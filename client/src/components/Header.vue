<template>
  <v-card color="grey lighten-4" flattile>
    <v-toolbar
      height="100px"
      dark
      prominent
      style="border-radius:0px;"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon class="my-auto"></v-app-bar-nav-icon>

      <v-toolbar-title
        @click="() => this.$router.push('/')"
        class="my-auto pb-0"
        style="cursor:pointer;"
        >Felipe Muner - Portfolio</v-toolbar-title
      >
      <v-btn
        @click="() => this.$router.push({ name: 'songs' })"
        class="primary--text my-auto ml-5"
        color="white"
        >BROWSE</v-btn
      >

      <v-spacer></v-spacer>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        class="primary--text ml-5 my-auto"
        color="white"
        @click="() => this.$router.push({ name: 'login' })"
        >Sign In</v-btn
      >

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        class="primary--text ml-5 my-auto"
        color="white"
        @click="() => this.$router.push({ name: 'register' })"
        >Sign Up</v-btn
      >

      <v-btn
        v-if="$store.state.isUserLoggedIn"
        class="primary--text ml-5 my-auto"
        color="white"
        @click="logout"
        >Log Out</v-btn
      >
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({ name: "Home" });
    }
  },
  created() {}
};
</script>
<style lang="stylus"></style>
