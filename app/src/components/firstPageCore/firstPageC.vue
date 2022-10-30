<template>
  <div>
    <TemplatePage />
    <Main />
    <AdminCard v-if="showCardAdmin" :showCardAdmin="showCardAdmin" />
    <Footer @showAdminCardBio="showAdminCardBio" :showCardAdmin="showCardAdmin" />
  </div>
</template>

<script>
  import TemplatePage from "../common/templatePage"
  import Main from "../index/Main-App.vue"
  import Footer from "../index/Footer-App.vue"
  import AdminCard from "../AdminCard.vue"

  export default {
    name: "firstPageC",
    components: {
      TemplatePage,
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
  };
</script>