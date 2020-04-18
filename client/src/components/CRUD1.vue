<template>
  <div>
    <PanelCRUD>
      <div slot="title">{{ title + "fel231ipe" }}</div>
      <div slot="header">
        ahahha2
      </div>
      <div slot="footer">
        ooter2
      </div>
      <div slot="form-header">
        ooter213eeee
      </div>
      <div slot="form-field">
        ooterahahah
      </div>
      <div slot="form-button">
        ooterhahahahaha220202
      </div>
    </PanelCRUD>
  </div>
</template>

<script>
import PanelCRUD from "@/components/PanelCRUD.vue";
export default {
  data() {
    return {
      title: "Felipe CRUD1"
    };
  },
  components: {
    PanelCRUD
  }
};
</script>

<style></style>
