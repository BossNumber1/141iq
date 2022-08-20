<template>
    <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure" id="googleBtnAuth">
        <img src="../../../../public/pictures/icons/googleAuth.svg" alt="google icon auth" />
    </GoogleLogin>
</template>

<script>
import GoogleLogin from 'vue-google-login';

export default {
    name: "ggl-icon-component",
    components: { GoogleLogin },
    data() {
        return {
            params: {
                client_id: "998411006620-07le35rq25nvkahgbfda95tftnufccm0.apps.googleusercontent.com",
                plugin_name: "chat"
            },
            renderParams: {}
        }
    },
    methods: {
        onSuccess(response) {
            // проходим через приложение

            // получаем имя и аватарку пользователя
            const name = response.ov.yf;
            const ava = response.ov.DO;

            // сохраняем в store полученные данные
            this.$store.dispatch('saveUserName', name);
            this.$store.dispatch('saveUserAva', ava);

            // переходим в обсуждения
            this.$emit('login', false);
        },
        onFailure(e) {
            console.log("failed: ", e);
        },
    },
    mounted() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '998411006620-07le35rq25nvkahgbfda95tftnufccm0.apps.googleusercontent.com',
                plugin_name: "chat"
            })
        })
    }
}
</script>

<style lang="scss">
    #googleBtnAuth {
        cursor: url('../../../../public/pictures/cursors/pointer.png'), pointer;
        margin-left: 10px;

        &:hover {
            transform: scale(1.4);
        }
    }
</style>