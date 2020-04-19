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
      <!-- <div v-for="s in songs" :key="s.id">
        <div>{{ s.title }}</div>
      </div>-->
      <v-container>
        <v-row v-for="i in Math.ceil(songs.length / 3)" :key="i">
          <span v-for="song in songs.slice((i - 1) * 3, i * 3)" :key="song" class="mx-auto">
            <v-card class="ma-5" max-width="300" shaped>
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>{{song.title}}</v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0 text-left">Number 10</v-card-subtitle>

              <v-card-text class="text--primary text-left">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, felipe</div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" class="mr-3 mb-3">See more...</v-btn>
              </v-card-actions>
            </v-card>
          </span>
        </v-row>
      </v-container>
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
