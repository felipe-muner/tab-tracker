<template>
  <div>
    <Panel title="Search">
      <v-text-field
        v-model="search"
        label="search by song title, artist, album, genre"
        outlined
        dense
      ></v-text-field>
    </Panel>
  </div>
</template>

<script>
export default {
  data() {
    return { search: 10 };
  },
  watch: {
    search(val) {
      const route = {
        name: "songs"
      };
      if ("" !== this.search) {
        route.query = {
          search: this.search
        };
        this.$router.push(route);
      }
    }
  }
};
</script>

<style></style>
