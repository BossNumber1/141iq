<template>
  <div>
    <Header />
    <PreMain />
    <Main />
    <AdminCard v-if="showCardAdmin" :showCardAdmin="showCardAdmin" />
    <Footer @showAdminCardBio="showAdminCardBio" :showCardAdmin="showCardAdmin" />
  </div>
</template>

<script>
  import Header from "../index/Header-App.vue"
  import PreMain from "../index/PreMain-App.vue"
  import Main from "../index/Main-App.vue"
  import Footer from "../index/Footer-App.vue"
  import AdminCard from "../AdminCard.vue"

  export default {
    name: "templatePage",
    components: {
      Header,
      PreMain,
      AdminCard,
      Main,
      Footer
    },
    data() {
      return {
        showCardAdmin: false
      };
    },
    methods: {
      showAdminCardBio() {
        this.showCardAdmin = !this.showCardAdmin;
      }
    },
  }
</script>