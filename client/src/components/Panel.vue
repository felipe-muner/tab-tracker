<template>
  <v-card max-width="90%" class="mx-auto mt-5">
    <v-app-bar dark color="blue darken-4">
      <v-spacer></v-spacer>
      <v-toolbar-title class="font-title">{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <slot> No data defined. </slot>
          <!-- <div>
            <slot name="felipe"> </slot>
            <slot name="content"></slot>
          </div> -->
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({}),
  props: ["title"]
};
</script>

<style scoped>
.font-title {
  font-size: 35px;
  font-weight: 800;
}
</style>
