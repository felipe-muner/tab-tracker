<template>
  <div>
    <Panel title="Edit Song">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col class="py-0">
            <v-text-field
              :rules="requiredRules"
              v-model="song.title"
              label="Title"
              outlined
              dense
              hint="Don't forget it"
            ></v-text-field>
          </v-col>
          <v-col class="py-0">
            <v-text-field
              :rules="requiredRules"
              v-model="song.artist"
              label="Artist"
              outlined
              dense
              hint="Don't forget it"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="py-0">
            <v-text-field
              :rules="requiredRules"
              v-model="song.genre"
              label="Genre"
              outlined
              dense
              hint="Don't forget it"
            ></v-text-field>
          </v-col>
          <v-col class="py-0">
            <v-text-field
              :rules="requiredRules"
              v-model="song.album"
              label="Album"
              outlined
              dense
              hint="Don't forget it"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="py-0">
            <v-text-field
              :rules="requiredRules"
              v-model="song.albumImageURL"
              label="albumImageURL"
              outlined
              dense
              hint="Don't forget it"
            ></v-text-field>
          </v-col>
          <v-col class="py-0">
            <v-text-field
              :rules="requiredRules"
              v-model="song.youtubeID"
              label="youtubeID"
              outlined
              dense
              hint="Don't forget it"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="py-0">
            <v-textarea
              :rules="requiredRules"
              v-model="song.lyrics"
              label="Lyrics"
              outlined
              dense
              hint="Don't forget it"
            ></v-textarea>
          </v-col>
          <v-col class="py-0">
            <v-textarea
              :rules="requiredRules"
              v-model="song.tab"
              label="Tab"
              outlined
              dense
              hint="Don't forget it"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn color="primary" @click="save">Save</v-btn>
          </v-col>
        </v-row>
      </v-form>
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
      valid: false,
      requiredRules: [v => !!v || "Required field."],
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
    async save() {
      if (this.$refs.form.validate()) {
        try {
          await SongsService.put(this.song);
          this.$router.push({
            name: "song",
            params: { songId: this.$route.params.songId }
          });
        } catch (error) {
          this.error = error.response.data.error;
        }
      }
    }
  },
  async mounted() {
    this.song = (await SongsService.show(this.$route.params.songId)).data;
  }
};
</script>

<style></style>
