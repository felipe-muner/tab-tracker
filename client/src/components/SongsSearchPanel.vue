<template>
  <div>
    {{ search }}
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
    return { search: "" };
  },
  watch: {
    search(val) {
      const route = {
        name: "songs"
      };
      if (this.search !== "") {
        route.query = {
          search: this.search
        };
      }
      this.$router.push(route);
    },
    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      }
    }
  }
};
</script>

<style></style>
