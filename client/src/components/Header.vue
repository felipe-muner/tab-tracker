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
      >Felipe Muner - Portfolio</v-toolbar-title>
      <v-btn
        @click="() => this.$router.push('/')"
        class="primary--text my-auto ml-5"
        color="white"
      >BROWSE</v-btn>

      <v-spacer></v-spacer>

      <v-btn
        class="primary--text my-auto ml-5"
        color="white"
        @click="() => this.$router.push('login')"
      >Sign In</v-btn>

      <v-btn
        class="primary--text my-auto ml-5"
        color="white"
        @click="() => this.$router.push('register')"
      >Sign Up</v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  methods: {},
  created() {}
};
</script>
<style lang="stylus"></style>