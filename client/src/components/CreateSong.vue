<template>
  <div>
    <Panel title="Create Song">
      <v-row>
        <v-col class="py-0"
          ><v-text-field
            required
            v-model="song.title"
            label="Title"
            outlined
            dense
            hint="Don't forget it"
          ></v-text-field
        ></v-col>
        <v-col class="py-0"
          ><v-text-field
            v-model="song.artist"
            label="Artist"
            outlined
            dense
            hint="Don't forget it"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0"
          ><v-text-field
            v-model="song.genre"
            label="Genre"
            outlined
            dense
            hint="Don't forget it"
          ></v-text-field
        ></v-col>
        <v-col class="py-0"
          ><v-text-field
            v-model="song.album"
            label="Album"
            outlined
            dense
            hint="Don't forget it"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0"
          ><v-text-field
            v-model="song.albumImageURL"
            label="albumImageURL"
            outlined
            dense
            hint="Don't forget it"
          ></v-text-field
        ></v-col>
        <v-col class="py-0"
          ><v-text-field
            v-model="song.youtubeID"
            label="youtubeID"
            outlined
            dense
            hint="Don't forget it"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0"
          ><v-text-field
            v-model="song.lyrics"
            label="lyrics"
            outlined
            dense
            hint="Don't forget it"
          ></v-text-field
        ></v-col>
        <v-col class="py-0"
          ><v-text-field
            v-model="song.tab"
            label="Tab"
            outlined
            dense
            multi-line
            hint="Don't forget it"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn color="primary" @click="create">Submit</v-btn>
        </v-col>
      </v-row>
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
      song: {
        title: "",
        artist: "",
        genre: "",
        album: "",
        albumImageURL: "",
        youtubeID: "",
        lyrics: "",
        tab: ""
      }
    };
  },
  methods: {
    async create() {
      try {
        const response = await SongsService.post(this.song);
        this.$router.push({ name: "songs" });
      } catch (error) {
        // for (let [key, value] of Object.entries(error)) {
        //   console.log(`${key}: ${value}`);
        // }
        this.error = error.response.data.error;
      }
    }
  },
  async mounted() {}
};
</script>

<style></style>
