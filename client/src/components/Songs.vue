<template>
  <div>
    <Panel title="Songs">
      <div slot="actions">
        <v-btn
          class="blue white--text"
          small
          fab
          fixed
          right
          top
          @click="() => this.$router.push({ name: 'songs-create' })"
        >
          <v-icon>+</v-icon>
        </v-btn>
      </div>
      <div v-for="s in songs" :key="s.id">
        <div>{{ s.title }}</div>
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
    this.songs = response.data;
  }
};
</script>

<style></style>
