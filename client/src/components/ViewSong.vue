<template>
  <div>
    <v-layout>
      <v-flex md6>
        <Panel title="Song">
          <v-row class="text-right">
            <v-col class="py-0">
              <v-btn
                :to="{
                  name: 'song-edit',
                  params() {
                    return { songId: song.id };
                  }
                }"
                class="warning"
                dark
                outlined
                >Edit Song</v-btn
              >
              <v-btn
                class="warning"
                dark
                outlined
                @click="setbookmark"
                v-if="isUserLoggedIn && !bookmark"
                >set bookmark</v-btn
              >
              {{ bookmark }}
              <v-btn
                class="warning"
                dark
                outlined
                @click="unsetbookmark"
                v-if="isUserLoggedIn && bookmark"
                >unset bookmark</v-btn
              >
            </v-col>
          </v-row>
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
// import Panel from "@/components/Panel.vue";
import VueYouTubeEmbed from "vue-youtube-embed";

import { mapState } from "vuex";
import BookmarksService from "@/services/BookmarksService";

export default {
  components: {
    // Panel,
    VueYouTubeEmbed
  },
  computed: {
    ...mapState(["isUserLoggedIn"])
  },
  data() {
    return {
      song: {},
      bookmark: null
    };
  },
  methods: {
    async setbookmark() {
      try {
        this.bookmark = (
          await BookmarksService.post({
            SongId: this.song.id,
            UserId: this.$store.state.user.id
          })
        ).data;
      } catch (error) {
        console.log(error);
      }
    },
    async unsetbookmark() {
      try {
        await BookmarksService.delete(this.bookmark.id);
        this.bookmark = null;
      } catch (error) {
        console.log(error);
      }
    },
    async getSongData() {
      try {
        const response = await SongsService.show(this.$route.params.songId);
        this.song = response.data;
        this.getBookmark();
      } catch (error) {
        console.log(error);
      }
    },
    async getBookmark() {
      try {
        this.bookmark = (
          await BookmarksService.index({
            songId: this.song.id,
            userId: this.$store.state.user.id
          })
        ).data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  async mounted() {
    this.getSongData();
  }
};
</script>

<style>
.textarea {
  font-family: monospace;
  background: #ddd;
}
</style>
