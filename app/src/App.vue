<template>
  <div class="container" id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "App",
  };
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100&display=swap");
@import './styles/sass/common/vars.scss';

body {
  font-family: "Roboto Slab", serif;
  // color: #332525;

  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Chrome/Safari/Opera */
  -khtml-user-select: none;
  /* Konqueror */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version, currently not supported by any browser */

  cursor: $cursorDefault;
}

.title {
    text-align: center;
    margin-bottom: 30px;
}

img {
  width: 100%;
  height: auto;
}
</style>
