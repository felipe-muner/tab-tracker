<template>
  <div>
    <Panel title="Songs">
      <div v-for="s in songs" :key="s.id">
        <div>{{ s.name }}</div>
      </div>
    </Panel>
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
      songs: null
    };
  },
  async mounted() {
    const response = await SongsService.index();
    console.log(response);
  }
};
</script>

<style></style>
