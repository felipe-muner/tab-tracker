<template>
  <div>
    <Panel title="Song"></Panel>
  </div>
</template>

<script>
import SongsService from "@/services/SongsService";
import Panel from "@/components/Panel.vue";

export default {
  components: {
    Panel
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log(this.$router.currentRoute.params.songId);

    // const response = await SongsService.index();
    // this.songs = response.data;
  }
};
</script>

<style></style>
