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
            let userID, accessToken, loginStatus;

            if (response.response) {
                userID = response.response.authResponse.userID;
                accessToken = response.response.authResponse.accessToken;
            } else {
                userID = response.authResponse.userID;
                accessToken = response.authResponse.accessToken;
            }

            (async function () {
                const axios = require('axios').default;
                
                await axios.get(
                    "https://graph.facebook.com/" + userID + "?access_token=" + accessToken
                ).then(
                    response => {
                        try {
                            if (response.status === 200) {
                                // получаем и сохраняем имя пользователя
                                localStorage.setItem("userName", response.data.name);

                                // пропускаем к обсуждениям
                                loginStatus = true;
                            } else {
                                console.log("ooops! error...")
                            }
                            
                            // создаём аватарку проекта для фейсбучных пользователей
                            // background: linear-gradient(to right, blue, pink);
                        } catch (e) {
                            console.error("error text:", e);
                        }
                    }
                )

                return loginStatus;
            })().then((response) => {
                if (response) {
                    // переходим в обсуждения
                    this.$emit('login', false);
                }
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