<template>
  <div>
    <Panel title="Song">{{song}}</Panel>
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
    return {
      song: {}
    };
  },
  methods: {},
  async mounted() {
    const response = await SongsService.show(this.$route.params.songId);
    this.song = response.data;
  }
};
</script>

<style></style>
