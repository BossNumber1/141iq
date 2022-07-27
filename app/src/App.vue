<template>
  <div class="container">
    <div class="header">
      <div class="title display-1"><mark>141</mark>iq</div>
      <div class="header__subtitle lead text-muted">Делаю сложное простым</div>
    </div>
    <div class="placeForAds">

    </div>
    <div class="title display-1">
      Фильтрация списка на Vue
    </div>
    <div class="main">
      <div class="main__demo">
        <div class="titleBlock display-6">Что получаем</div>
        <div class="main__demo-content">
          <FilterContacts />
        </div>
      </div>
      <div class="main__src">
        <div class="titleBlock display-6 mb-5 mt-5">Как достигаем</div>
        <div class="main__src-content">
          <div class="codeBlock">
            <div class="codeBlock-title badge text-bg-warning" @click="manageDisplayRequiredCode('0')">
              <div>template</div>
              <div v-if="!showFirstPartCode">
                <img src="../public/pictures/icons/showCode.png" alt="icon code show" />
              </div>
              <div v-else>
                <img src="../public/pictures/icons/hideCode.png" alt="icon code hide" />
              </div>
            </div>
            <div class="code" id="templateSrc"></div>
          </div>
          <div class="codeBlock">
            <div class="codeBlock-title badge text-bg-warning" @click="manageDisplayRequiredCode('1')">
              <div>script</div>
              <div v-if="!showSecondPartCode">
                <img src="../public/pictures/icons/showCode.png" alt="icon code show" />
              </div>
              <div v-else>
                <img src="../public/pictures/icons/hideCode.png" alt="icon code hide" />
              </div>
            </div>
            <div class="code" id="scriptSrc"></div>
          </div>
          <div class="codeBlock">
            <div class="codeBlock-title badge text-bg-warning" @click="manageDisplayRequiredCode('2')">
              <div>style scoped lang="scss"</div>
              <div v-if="!showThirdPartCode">
                <img src="../public/pictures/icons/showCode.png" alt="icon code show" />
              </div>
              <div v-else>
                <img src="../public/pictures/icons/hideCode.png" alt="icon code hide" />
              </div>
            </div>
            <div class="code" id="stylesSrc"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer mt-5"></div>
  </div>
</template>

<script>
import FilterContacts from "./components/FilterContacts";

const db = [
  {
    id: 1,
    src: `
      <div class="container">
         <div class="header">
            <div class="header__inputArea">
               <div class="header__inputIcon">
                  <img src="https://clck.ru/sMgeU" alt="search icon" />
               </div>
               <div class="header__inputContent">
                  <input type="text" placeholder="Введите данные для поиска" @input="(event) => searchInList(event)" />
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
      </div>`
  },
  {
    id: 2,
    src: `
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
      };`
  },
  {
    id: 3,
    src: `
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
      }`
    },
]

export default {
  name: "App",
  components: {
    FilterContacts,
  },
  data() {
    return {
      showFirstPartCode: false,
      showSecondPartCode: false,
      showThirdPartCode: false,
      src: db
    };
  },
  methods: {
    manageDisplayRequiredCode(numberBlock) {
      const allCodeParts = document.getElementsByClassName("code");

      if (numberBlock === "0") {
        this.showFirstPartCode = !this.showFirstPartCode;
        this.showSecondPartCode = false;
        this.showThirdPartCode = false;

        // показываем или убираем содержимое кликнутого блока
        allCodeParts[0].style.display = this.showFirstPartCode ? "block" : "none";

        // скрываем оставшиеся блоки
        if (this.showFirstPartCode) {
          allCodeParts[1].style.display = "none";
          allCodeParts[2].style.display = "none";
        }
      } else if (numberBlock === "1") {
        this.showFirstPartCode = false;
        this.showSecondPartCode = !this.showSecondPartCode;
        this.showThirdPartCode = false;

        // показываем или убираем содержимое кликнутого блока
        allCodeParts[1].style.display = this.showSecondPartCode ? "block" : "none";

        // скрываем оставшиеся блоки
        if (this.showSecondPartCode) {
          allCodeParts[0].style.display = "none";
          allCodeParts[2].style.display = "none";
        }
      } else if (numberBlock === "2") {
        this.showFirstPartCode = false;
        this.showSecondPartCode = false;
        this.showThirdPartCode = !this.showThirdPartCode;

        // показываем или убираем содержимое кликнутого блока
        allCodeParts[2].style.display = this.showThirdPartCode ? "block" : "none";

        // скрываем оставшиеся блоки
        if (this.showThirdPartCode) {
          allCodeParts[0].style.display = "none";
          allCodeParts[1].style.display = "none";
        }
      }
    },
  },
  mounted() {
    document.querySelector("#templateSrc").innerText = this.src[0].src;
    document.querySelector("#scriptSrc").innerText = this.src[1].src;
    document.querySelector("#stylesSrc").innerText = this.src[2].src;
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100&display=swap");

body {
  font-family: "Roboto Slab", serif;
  // color: #332525;
}

.header {
  padding-top: 50px;
  margin-bottom: 30px;

  &__subtitle {
    // color: gray;
    // font-size: 14px;
    text-align: center;
  }
}

.placeForAds {
  width: 100%;
  border: 1px solid;
  height: 280px;
  margin: 50px 0;
}

.main {
  &__demo {
    &-content {
      margin-top: 50px;
      // border: 1px solid;
    }
  }

  &__src {
    &-content {
      .codeBlock {
        margin-bottom: 10px;

        &-title {
          background-color: lightgray;
          // color: #d61a1a;
          color: #332525 !important;
          font-size: 20px;
          font-weight: normal;
          height: 40px;
          padding-left: 20px;
          border-radius: 12px;
          margin-bottom: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .code {
          display: none;
        }
      }
    }
  }
}

.footer {}

.title {
    text-align: center;
    margin-bottom: 30px;
}

.titleBlock {
  text-align: center;
  // font-size: 20px;
  margin: 10px;
}

img {
  width: 100%;
  height: auto;
}
</style>

