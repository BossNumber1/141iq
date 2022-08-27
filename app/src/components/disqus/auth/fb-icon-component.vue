<template>
    <div class="button">
        <facebook-login class="button-content" appId="735315827769925" loginLabel="" logoutLabel=""
            @login="getUserData" @get-initial-status="getUserData">
        </facebook-login>
    </div>
</template>

<script>
import facebookLogin from 'facebook-login-vuejs';

export default {
    name: "fb-icon-component",
    components: { facebookLogin },
    methods: {
        getUserData(response) {
            const userID = response.response.authResponse.userID;
            const accessToken = response.response.authResponse.accessToken;

            console.clear();
            console.log("uid =", userID);

            (async function () {
                const axios = require('axios').default;

                // https://graph.facebook.com/124616550318839
                // "https://graph.facebook.com/" + userID + "?access_token=" + accessToken
                
                await axios.get(
                    "https://graph.facebook.com/" + userID + "/picture"
                ).then(
                    response => {
                        try {
                            // получаем и сохраняем имя и аватарку пользователя
                            // console.clear();
                            console.log("na2:", response);
                            // localStorage.setItem("userName", response.data.name);
                            
                            // localStorage.setItem("userAva", response.ov.DO);
                        } catch (e) {
                            console.error("error text:", e);
                        }
                    }
                )

                return true;
            })().then(() => {
                // переходим в обсуждения
                this.$emit('login', false);
            });
        },
    }
}
</script>

<style scoped lang="scss">
.button {
    border: 1px solid;
    width: 100px;
    border-radius: 12px;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid rgba(158, 158, 158, 0.2);
    box-shadow: 0px 9px 9px -9px rgb(0 0 0 / 25%), inset 0px -1px 0px rgb(0 0 0 / 20%);
    transform: scale(0.85);
    margin-top: -10px;

    &-content {
        transform: scale(0.5);
        background: #3b5998;
        width: 80px;
        height: 63px;
        border-radius: 12px;
    }
}
</style>