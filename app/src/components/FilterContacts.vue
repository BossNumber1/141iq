<template>
    <div class="container">
        <div class="header">
            <div class="header__inputArea">
                <div class="header__inputIcon">
                    <img src="https://clck.ru/sMgeU" alt="search icon" />
                </div>
                <div class="header__inputContent">
                    <input type="text" placeholder="Введите данные для поиска"
                        @input="(event) => searchInList(event)" />
                </div>
            </div>
        </div>
        <div class="main">
            <div class="usersList">
                <div class="list" v-if="!emptyArrayUsers">
                    <div class="userInfo" v-for="user in users" :key="user.id">
                        <div class="userAvatar">
                            <img :src="user.avatar" :alt="user.alt" />
                        </div>
                        <div class="userData">
                            <div class="userName">
                                {{ user.name }}
                            </div>
                            <div class="userResidence">
                                {{ user.residence }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main__warning" v-else>
                    <div class="main__warning-icon">
                        <img src="https://clck.ru/sMhds" alt="attention icon" />
                    </div>
                    <div class="main__warning-content">
                        Такого пользователя нет в Базе Данных
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const sourceArrayUsers = [
    {
        id: 1,
        avatar: "./pictures/avatars/Pheophan.png",
        alt: "Pheophan avatar",
        name: "Feofan",
        residence: "Moscow",
    },
    {
        id: 2,
        avatar: "./pictures/avatars/Anna.png",
        alt: "Anna avatar",
        name: "Анна Краснова",
        residence: "Saint-Petersburg",
    },
    {
        id: 3,
        avatar: "./pictures/avatars/Evgeny.png",
        alt: "Evgeny avatar",
        name: "Евгений Анисимов",
        residence: "Veliky Novgorod",
    },
];

export default {
    name: "FilterContacts",
    data() {
        return {
            users: sourceArrayUsers,
            emptyArrayUsers: false,
            contentInput: "",
        };
    },
    methods: {
        searchInList(event) {
            const search = require("search-in-list"); // включаем библиотеку поиска

            if (event.target.value === "") {
                // при очистке поля - возвращаем исходный список
                this.users = sourceArrayUsers;
            } else if (event.target.value.length > this.contentInput.length) {
                this.users = search(this.users, event.target.value); // фильтруем исходный массив
            } else if (event.target.value.length < this.contentInput.length) {
                this.emptyArrayUsers = false;
                this.users = search(sourceArrayUsers, event.target.value); // фильтруем исходный массив
            } else {
                this.users = search(sourceArrayUsers, event.target.value); // фильтруем исходный массив
            }

            this.contentInput = event.target.value; // сохраняем текущее содержимое

            if (this.users.length === 0) {
                // даём сигнал, что список доступных пользователей закончился
                this.emptyArrayUsers = true;
            }
        },
    },
};
</script>

<style scoped lang="scss">
.container {
    padding: 0 20px;

    .header {
        padding: 6px 0;

        &__inputArea {
            border: 1px solid gray;
            border-radius: 12px;
            display: flex;
            align-items: center;
            padding: 0px;
            width: 335px;
            height: 56px;
            align-self: stretch;
            flex-grow: 0;

            .header__inputContent {
                // border: 1px solid orange;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                padding: 12px 12px 12px 0px;
                width: 283px;
                height: 42px;
                flex: none;
                order: 1;
                flex-grow: 1;

                input {
                    width: 95%;
                    border: none;
                    outline: none;
                }
            }

            margin-bottom: 22px;
        }
    }

    .main {
        .usersList {
            margin-bottom: 24px;
            margin-left: 10px;

            .list {
                .userInfo {
                    display: flex;
                    align-items: center;
                    margin: 5px 0;

                    .userAvatar {
                        margin-right: 16px;
                    }

                    .userData {
                        .userName {
                            width: 282px;
                            height: 18px;
                            font-family: "Roboto";
                            font-style: normal;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 18px;
                            color: #263238;
                        }

                        .userResidence {
                            width: 282px;
                            height: 18px;
                            font-family: "Roboto";
                            font-style: normal;
                            font-weight: 400;
                            font-size: 14px;
                            line-height: 18px;
                            display: flex;
                            align-items: center;
                            color: #9E9E9E;
                        }
                    }
                }
            }
        }

        &__warning {
            display: flex;
            align-items: center;

            &-icon {
                margin-right: 10px;
            }
        }
    }
}
</style>