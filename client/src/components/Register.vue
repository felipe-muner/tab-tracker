<template>
  <v-container>
    <v-row>
      <v-col md="6" offset-md="3">
        <v-card flat>
          <v-toolbar color="primary" dark extended flat :elevation="15">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <!-- <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-apps</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>-->
          </v-toolbar>

          <v-card class="mx-auto" max-width="70%" style="margin-top: -64px;">
            <v-toolbar flat>
              <v-spacer></v-spacer>
              <v-toolbar-title class="black--text">Register</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-divider></v-divider>

            <v-card-text>
              <!-- <v-row>
              <v-col md="4" offset-md="4">-->
              <v-card class="pa-2 elevation-0">
                <v-text-field v-model="email" label="E-mail" outlined hint="Don't forget it"></v-text-field>
                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  label="Password"
                  hint="At least 8 characters"
                  outlined
                  counter
                  @click:append="show1 = !show1"
                ></v-text-field>
                <br />
                <v-btn @click="register" color="primary">Register</v-btn>
              </v-card>
              <!-- </v-col>
              </v-row>-->
              <!-- <div>
          <input
            type="email"
            name="email"
            v-model="email"
            placeholder="email"
          />
          <br />
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder="password"
          />
          <br />
          <div v-html="error" class="error"></div>
          <br />
          <v-btn class="primary" @click="register">Register</v-btn>
              </div>-->
            </v-card-text>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      show1: false,
      email: "",
      password: "",
      error: null
    };
  },
  // watch: {
  //   email(value) {
  //     console.log(value);
  //   }
  // },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
      } catch (error) {
        // for (let [key, value] of Object.entries(error)) {
        //   console.log(`${key}: ${value}`);
        // }
        this.error = error.response.data.error;
      }
    }
  }
  // mounted() {
  //   setTimeout(() => {
  //     alert((this.email = "hello world"));
  //   }, 1000);
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.error {
  color: red;
}
</style>
