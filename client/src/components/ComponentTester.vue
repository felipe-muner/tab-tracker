<template>
  <div>
    <h1>qwe2s</h1>
  </div>
</template>

<script>
import ApiTesterComponent from "@/services/ApiTesterComponent";

export default {
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
      if (this.$refs.form.validate()) {
        // try {
        //   const response = await SongsService.post(this.song);
        //   this.$router.push({ name: "songs" });
        // } catch (error) {
        //   console.log(error);
        // }
      } else {
        alert("fill up the blank fields.");
      }
    }
  }
};
</script>

<style></style>
