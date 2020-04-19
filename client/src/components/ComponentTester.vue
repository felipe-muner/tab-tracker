<template>
  <div>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required />
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>
      </v-form>
    </v-container>
    <v-container>
      <v-row class="row" v-for="i in Math.ceil(items.length / 2)" :key="i">
        <span v-for="item in items.slice((i - 1) * 2, i * 2)" :key="item">{{item}}</span>
      </v-row>
    </v-container>

    <v-container>
      <v-row v-for="i in Math.ceil(myTest.length / 3)" :key="i">
        <span v-for="test in myTest.slice((i - 1) * 3, i * 3)" :key="test" class="mx-auto">
          <v-card class="ma-5" max-width="300" shaped>
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0 text-left">Number 10</v-card-subtitle>

            <v-card-text class="text--primary text-left">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, felipe</div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="orange" text>See more...</v-btn>
            </v-card-actions>
          </v-card>
        </span>
      </v-row>
    </v-container>

    <v-container></v-container>
  </div>
</template>

<script>
import ApiTesterComponent from "@/services/ApiTesterComponent";

export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    items: [
      "item 1",
      "item 2",
      "item 3",
      "item 4",
      "item 5",
      "item 6",
      "item 7",
      "item 8",
      "item 9",
      "item 10",
      "item 11",
      "item 12",
      "item 13",
      "item 14",
      "item 15",
      "item 16",
      "item 17",
      "item 18",
      "item 19",
      "item 20",
      "item 21",
      "item 22",
      "item 23",
      "item 24",
      "item 25"
    ],
    myTest: [
      "item 1",
      "item 2",
      "item 3",
      "item 4",
      "item 5",
      "item 6",
      "item 7",
      "item 8"
    ]
  }),

  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        let response = await ApiTesterComponent().get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response.data);
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style scoped>
</style>
