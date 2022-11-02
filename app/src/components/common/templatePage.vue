<template>
  <div>
    <Header />
    <PreMain />
    <Main :db="db" :dbForCopy="dbForCopy" />
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
    props: ['db', 'dbForCopy'],
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