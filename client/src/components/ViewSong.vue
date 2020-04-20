<template>
  <div>
    <v-layout>
      <v-flex md6>
        <Panel title="Song">
          <v-layout>
            <v-card class="mx-auto">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="headline">{{
                    song.title
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{ song.artist }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-img :src="song.albumImageURL" height="194"></v-img>

              <v-card-text>{{ song.album }}</v-card-text>

              <v-card-actions>
                <v-btn text color="deep-purple accent-4">Back</v-btn>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-layout>
        </Panel>
      </v-flex>
      <v-flex md6>
        <Panel class="felipe">
          <v-row>
            <v-col>
              <h2>Lyrics</h2>
              {{ song.lyrics }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h2>Tab</h2>
              <v-textarea
                class="textarea"
                readonly
                v-model="song.tab"
              ></v-textarea>
            </v-col>
          </v-row>
        </Panel>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md12>
        <Panel>
          <youtube :video-id="song.youtubeID"></youtube>
        </Panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from "@/services/SongsService";
import Panel from "@/components/Panel.vue";
import VueYouTubeEmbed from "vue-youtube-embed";

export default {
  components: {
    Panel,
    VueYouTubeEmbed
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
    console.log(this.song);
  }
};
</script>

<style>
.textarea {
  font-family: monospace;
  background: #ddd;
}
</style>
