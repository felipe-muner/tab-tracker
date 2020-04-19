<template>
  <div>
    <Panel title="Create Song">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="create">Validate</v-btn>
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
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ]
    };
  },
  methods: {
    async create() {
      this.$refs.form.validate();

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
