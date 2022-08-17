<template>
  <div id="app">
    <div class="auth" v-if="!showDisqusBlock">
      Войти через
      <button @click="googleAuth" id="googleBtnAuth">Google</button>
      <button @click="vkAuth" id="vkBtnAuth">Вконтакте</button>
      <button @click="fbAuth" id="fbBtnAuth">Facebook</button>
    </div>

    <disqus-block v-else />
  </div>
</template>

<script>
import DisqusBlock from "./disqus-block.vue";

export default {
  name: "discussion-filter-contacts-page",
  data() {
    return {
      showDisqusBlock: false,
    };
  },
  components: {
    DisqusBlock,
  },
  methods: {
    googleAuth() {
      // проходим через приложение

      // переходим в обсуждения
      this.showDisqusBlock = true;
    },
    vkAuth() {
      // проходим через приложение

      // переходим в обсуждения
      this.showDisqusBlock = true;
    },
    fbAuth() {
      // проходим через приложение

      // переходим в обсуждения
      this.showDisqusBlock = true;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.auth {
  margin: 32px;
  font-size: 18px;
  display: flex;
  align-items: center;
}

#googleBtnAuth,
#vkBtnAuth,
#fbBtnAuth {
  cursor: pointer;
  margin-left: 10px;
}
</style>