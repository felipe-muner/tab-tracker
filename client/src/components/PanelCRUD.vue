<template>
  <div class="container">
    <h1>Panel Crud Boilerplate</h1>
    <slot name="title"></slot>
    <slot name="header"></slot>
    <slot name="footer"></slot>
    <hr style="width:50%;" class="mx-auto" />
    <form>
      <div>
        <slot name="form-header"></slot>
      </div>
      <div>
        <slot name="form-field"></slot>
      </div>
      <div>
        <slot name="form-button"></slot>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
