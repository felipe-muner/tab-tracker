<template>
  <div>
    <CRUD1></CRUD1>
    <hr />
    <CRUD2></CRUD2>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

<script>
// @ is an alias to /src
import CRUD1 from "@/components/CRUD1.vue";
import CRUD2 from "@/components/CRUD2.vue";

export default {
  components: {
    CRUD1,
    CRUD2
  }
};
</script>
