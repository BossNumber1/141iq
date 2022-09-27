<template>
  <div class="main__src">
      <div class="titleBlock display-6 mb-5 mt-5">Как достигаем</div>
      <div class="main__src-content">
        <div class="codeBlock">
          <div class="codeBlock-title badge text-bg-warning" @click="manageDisplayRequiredCode('0')">
            <div>template</div>
            <div v-if="!showFirstPartCode">
              <img src="../../../../public/pictures/icons/showCode.png" alt="icon code show" />
            </div>
            <div v-else>
              <img src="../../../../public/pictures/icons/hideCode.png" alt="icon code hide" />
            </div>
          </div>
          <div class="code">
            <div id="templateSrc"></div>
            <div class="copyIcon" @click="copySrc(0)">
              <img v-if="!copiedFirstSrc" src="../../../../public/pictures/icons/copyIcon.png" alt="icon copy" />
              <img v-else src="../../../../public/pictures/icons/successIcon.svg" alt="icon success copied" />
            </div>
          </div>
        </div>
        <!-- <div class="hljs-literal">&_body3</div> -->
        <div class="codeBlock">
          <div class="codeBlock-title badge text-bg-warning" @click="manageDisplayRequiredCode('1')">
            <div>script</div>
            <div v-if="!showSecondPartCode">
              <img src="../../../../public/pictures/icons/showCode.png" alt="icon code show" />
            </div>
            <div v-else>
              <img src="../../../../public/pictures/icons/hideCode.png" alt="icon code hide" />
            </div>
          </div>
          <div class="code">
            <div id="scriptSrc"></div>
            <div class="copyIcon" @click="copySrc(1)">
              <img v-if="!copiedSecondSrc" src="../../../../public/pictures/icons/copyIcon.png" alt="icon copy" />
              <img v-else src="../../../../public/pictures/icons/successIcon.svg" alt="icon success copied" />
            </div>
          </div>
        </div>
        <div class="codeBlock">
          <div class="codeBlock-title badge text-bg-warning" @click="manageDisplayRequiredCode('2')">
            <div>style scoped lang="scss"</div>
            <div v-if="!showThirdPartCode">
              <img src="../../../../public/pictures/icons/showCode.png" alt="icon code show" />
            </div>
            <div v-else>
              <img src="../../../../public/pictures/icons/hideCode.png" alt="icon code hide" />
            </div>
          </div>
          <div class="code">
            <div id="stylesSrc"></div>
            <div class="copyIcon" @click="copySrc(2)">
              <img v-if="!copiedThirdSrc" src="../../../../public/pictures/icons/copyIcon.png" alt="icon copy" />
              <img v-else src="../../../../public/pictures/icons/successIcon.svg" alt="icon success copied" />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
const dbForUser = [
  {
    id: 1,
    src: `
      <div class="container">
      \u00a0\u00a0<div class="header">
      \u00a0\u00a0\u00a0\u00a0<div class="header__inputArea">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="header__inputIcon">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<img src="https://clck.ru/sMgeU" alt="search icon" />
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="header__inputContent">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<input type="text" placeholder="Введите данные для поиска" @input="(event) => searchInList(event)" />
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0</div>
      \u00a0\u00a0<div class="main">
      \u00a0\u00a0\u00a0\u00a0<div class="usersList">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="list" v-if="!emptyArrayUsers">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="userInfo" v-for="user in users" :key="user.id">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="userAvatar">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<img :src="user.avatar" :alt="user.alt" />
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="userData">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="userName">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0{{ user.name }}
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="userResidence">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0{{ user.residence }}
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="main__warning" v-else>
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="main__warning-icon">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<img src="https://clck.ru/sMhds" alt="attention icon" />
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="main__warning-content">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0Такого пользователя нет в Базе Данных
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0</div>
      </div>`
  },
  {
    id: 2,
    src: `
      const sourceArrayUsers = [
      \u00a0\u00a0{
      \u00a0\u00a0\u00a0\u00a0id: 1,
      \u00a0\u00a0\u00a0\u00a0avatar: "./pictures/avatars/Pheophan.png",
      \u00a0\u00a0\u00a0\u00a0alt: "Pheophan avatar",
      \u00a0\u00a0\u00a0\u00a0name: "Feofan",
      \u00a0\u00a0\u00a0\u00a0residence: "Moscow",
      \u00a0\u00a0},
      \u00a0\u00a0{
      \u00a0\u00a0\u00a0\u00a0id: 2,
      \u00a0\u00a0\u00a0\u00a0avatar: "./pictures/avatars/Anna.png",
      \u00a0\u00a0\u00a0\u00a0alt: "Anna avatar",
      \u00a0\u00a0\u00a0\u00a0name: "Анна Краснова",
      \u00a0\u00a0\u00a0\u00a0residence: "Saint-Petersburg",
      \u00a0\u00a0},
      \u00a0\u00a0{
      \u00a0\u00a0\u00a0\u00a0id: 3,
      \u00a0\u00a0\u00a0\u00a0avatar: "./pictures/avatars/Evgeny.png",
      \u00a0\u00a0\u00a0\u00a0alt: "Evgeny avatar",
      \u00a0\u00a0\u00a0\u00a0name: "Евгений Анисимов",
      \u00a0\u00a0\u00a0\u00a0residence: "Veliky Novgorod",
      \u00a0\u00a0},
      ];

      export default {
      \u00a0\u00a0name: "FilterContacts",
      \u00a0\u00a0data() {
      \u00a0\u00a0\u00a0\u00a0return {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0users: sourceArrayUsers,
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0emptyArrayUsers: false,
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0contentInput: "",
      \u00a0\u00a0\u00a0\u00a0};
      \u00a0\u00a0},
      \u00a0\u00a0methods: {
      \u00a0\u00a0\u00a0\u00a0searchInList(event) {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// включаем библиотеку поиска
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0const search = require("search-in-list");

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0if (event.target.value === "") {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// при очистке поля - возвращаем исходный список
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0this.users = sourceArrayUsers;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0} else if (event.target.value.length > this.contentInput.length) {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// фильтруем исходный массив
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0this.users = search(this.users, event.target.value);
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0} else if (event.target.value.length < this.contentInput.length) {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0this.emptyArrayUsers = false;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// фильтруем исходный массив
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0this.users = search(sourceArrayUsers, event.target.value);
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0} else {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// фильтруем исходный массив
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0this.users = search(sourceArrayUsers, event.target.value);
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}
      
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// сохраняем текущее содержимое
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0this.contentInput = event.target.value;

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0if (this.users.length === 0) {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// даём сигнал, что список доступных пользователей закончился
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0this.emptyArrayUsers = true;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}
      \u00a0\u00a0\u00a0\u00a0},
      \u00a0\u00a0},
      };`
  },
  {
    id: 3,
    src: `
      .container {
      \u00a0\u00a0padding: 0 20px;

      \u00a0\u00a0.header {
      \u00a0\u00a0\u00a0\u00a0padding: 6px 0;

      \u00a0\u00a0\u00a0\u00a0&__inputArea {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0border: 1px solid gray;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0border-radius: 12px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0display: flex;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0align-items: center;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0padding: 0px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0width: 335px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0height: 56px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0align-self: stretch;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0flex-grow: 0;

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.header__inputContent {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0display: flex;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0flex-direction: column;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0justify-content: center;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0align-items: flex-start;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0padding: 12px 12px 12px 0px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0width: 283px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0height: 42px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0flex: none;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0order: 1;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0flex-grow: 1;

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0input {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0width: 95%;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0border: none;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0outline: none;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0margin-bottom: 22px;
      \u00a0\u00a0\u00a0\u00a0}
      \u00a0\u00a0}

      \u00a0\u00a0.main {
      \u00a0\u00a0\u00a0\u00a0.usersList {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0margin-bottom: 24px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0margin-left: 10px;

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.list {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.userInfo {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0display: flex;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0align-items: center;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0margin: 5px 0;

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.userAvatar {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0margin-right: 16px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.userData {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.userName {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0width: 282px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0height: 18px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0font-family: "Roboto";
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0font-style: normal;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0font-weight: 400;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0font-size: 14px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0line-height: 18px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0color: #263238;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.userResidence {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0width: 282px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0height: 18px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0font-family: "Roboto";
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0font-style: normal;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0font-weight: 400;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0font-size: 14px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0line-height: 18px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0display: flex;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0align-items: center;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0color: #9E9E9E;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}
      \u00a0\u00a0\u00a0\u00a0}

      \u00a0\u00a0\u00a0\u00a0&__warning {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0display: flex;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0align-items: center;

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0&__icon {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0margin-right: 10px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}
      \u00a0\u00a0\u00a0\u00a0}
      \u00a0\u00a0}
      }`
  },
]

const db = [
  {
    id: 1,
    src: `
      <div class="container">
      \u00a0\u00a0<div class="header">
      \u00a0\u00a0\u00a0\u00a0<div class="header__inputArea">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="header__inputIcon">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<img src="https://clck.ru/sMgeU" alt="search icon" />
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="header__inputContent">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<input type="text" placeholder="Введите данные для поиска" @input="(event) => searchInList(event)" />
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0</div>
      \u00a0\u00a0<div class="main">
      \u00a0\u00a0\u00a0\u00a0<div class="usersList">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="list" v-if="!emptyArrayUsers">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="userInfo" v-for="user in users" :key="user.id">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="userAvatar">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<img :src="user.avatar" :alt="user.alt" />
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="userData">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="userName">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0{{ user.name }}
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="userResidence">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0{{ user.residence }}
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="main__warning" v-else>
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="main__warning-icon">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<img src="https://clck.ru/sMhds" alt="attention icon" />
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<div class="main__warning-content">
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0Такого пользователя нет в Базе Данных
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0\u00a0\u00a0</div>
      \u00a0\u00a0</div>
      </div>`
  },
  {
    id: 2,
    src: `
      const sourceArrayUsers = [
      \u00a0\u00a0{
      \u00a0\u00a0\u00a0\u00a0id: 1,
      \u00a0\u00a0\u00a0\u00a0avatar: "./pictures/avatars/Pheophan.png",
      \u00a0\u00a0\u00a0\u00a0alt: "Pheophan avatar",
      \u00a0\u00a0\u00a0\u00a0name: "Feofan",
      \u00a0\u00a0\u00a0\u00a0residence: "Moscow",
      \u00a0\u00a0},
      \u00a0\u00a0{
      \u00a0\u00a0\u00a0\u00a0id: 2,
      \u00a0\u00a0\u00a0\u00a0avatar: "./pictures/avatars/Anna.png",
      \u00a0\u00a0\u00a0\u00a0alt: "Anna avatar",
      \u00a0\u00a0\u00a0\u00a0name: "Анна Краснова",
      \u00a0\u00a0\u00a0\u00a0residence: "Saint-Petersburg",
      \u00a0\u00a0},
      \u00a0\u00a0{
      \u00a0\u00a0\u00a0\u00a0id: 3,
      \u00a0\u00a0\u00a0\u00a0avatar: "./pictures/avatars/Evgeny.png",
      \u00a0\u00a0\u00a0\u00a0alt: "Evgeny avatar",
      \u00a0\u00a0\u00a0\u00a0name: "Евгений Анисимов",
      \u00a0\u00a0\u00a0\u00a0residence: "Veliky Novgorod",
      \u00a0\u00a0},
      ];

      export default {
      \u00a0\u00a0name: "FilterContacts",
      \u00a0\u00a0data() {
      \u00a0\u00a0\u00a0\u00a0return {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0users: sourceArrayUsers,
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0emptyArrayUsers: false,
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0contentInput: "",
      \u00a0\u00a0\u00a0\u00a0};
      \u00a0\u00a0},
      \u00a0\u00a0methods: {
      \u00a0\u00a0\u00a0\u00a0searchInList(event) {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// включаем библиотеку поиска
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0const search search-in-list;

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0if (event.target.value === "") {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// при очистке поля - возвращаем исходный список
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0this.users = sourceArrayUsers;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0} else if (event.target.value.length > this.contentInput.length) {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// фильтруем исходный массив
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0this.users = search(this.users, event.target.value);
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0} else if (event.target.value.length < this.contentInput.length) {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0this.emptyArrayUsers = false;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// фильтруем исходный массив
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0this.users = search(sourceArrayUsers, event.target.value);
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0} else {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// фильтруем исходный массив
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0this.users = search(sourceArrayUsers, event.target.value);
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}
      
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// сохраняем текущее содержимое
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0this.contentInput = event.target.value;

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0if (this.users.length === 0) {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// даём сигнал, что список доступных пользователей закончился
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0this.emptyArrayUsers = true;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}
      \u00a0\u00a0\u00a0\u00a0},
      \u00a0\u00a0},
      };`
  },
  {
    id: 3,
    src: `
      .container {
      \u00a0\u00a0padding: 0 20px;

      \u00a0\u00a0.header {
      \u00a0\u00a0\u00a0\u00a0padding: 6px 0;

      \u00a0\u00a0\u00a0\u00a0inputArea {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0border: 1px solid gray;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0border-radius: 12px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0display: flex;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0align-items: center;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0padding: 0px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0width: 335px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0height: 56px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0align-self: stretch;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0flex-grow: 0;

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.header__inputContent {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0display: flex;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0flex-direction: column;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0justify-content: center;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0align-items: flex-start;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0padding: 12px 12px 12px 0px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0width: 283px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0height: 42px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0flex: none;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0order: 1;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0flex-grow: 1;

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0input {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0width: 95%;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0border: none;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0outline: none;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0margin-bottom: 22px;
      \u00a0\u00a0\u00a0\u00a0}
      \u00a0\u00a0}

      \u00a0\u00a0.main {
      \u00a0\u00a0\u00a0\u00a0.usersList {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0margin-bottom: 24px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0margin-left: 10px;

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.list {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.userInfo {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0display: flex;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0align-items: center;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0margin: 5px 0;

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.userAvatar {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0margin-right: 16px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.userData {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.userName {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0width: 282px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0height: 18px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0font-family: "Roboto";
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0font-style: normal;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0font-weight: 400;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0font-size: 14px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0line-height: 18px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0color: #263238;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0.userResidence {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0width: 282px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0height: 18px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0font-family: "Roboto";
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0font-style: normal;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0font-weight: 400;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0font-size: 14px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0line-height: 18px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0display: flex;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0align-items: center;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0color: #9E9E9E;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}
      \u00a0\u00a0\u00a0\u00a0}

      \u00a0\u00a0\u00a0\u00a0warning {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0display: flex;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0align-items: center;

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0icon {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0margin-right: 10px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}
      \u00a0\u00a0\u00a0\u00a0}
      \u00a0\u00a0}
      }`
  },
]

export default {
  name: "Src-Main",
  data() {
    return {
      showFirstPartCode: false,
      showSecondPartCode: false,
      showThirdPartCode: false,
      copiedFirstSrc: false,
      copiedSecondSrc: false,
      copiedThirdSrc: false,
      src: db,
      howLongWasCodeTemplateShown: 0,
      howLongWasCodeScriptsShown: 0,
      howLongWasCodeStylesShown: 0,
    }
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
        document.querySelector("#templateSrc").innerText = this.src[0].src;

        // скрываем оставшиеся блоки
        if (this.showFirstPartCode) {
          allCodeParts[1].style.display = "none";
          allCodeParts[2].style.display = "none";
          
          // document.querySelector("#templateSrc").innerText = "";
          document.querySelector("#scriptSrc").innerText = "";
          document.querySelector("#stylesSrc").innerText = "";
        }

        // отмечаем, что код был показан юзеру
        this.howLongWasCodeTemplateShown = +this.howLongWasCodeTemplateShown + 1;
      } else if (numberBlock === "1") {
        this.showFirstPartCode = false;
        this.showSecondPartCode = !this.showSecondPartCode;
        this.showThirdPartCode = false;

        // показываем или убираем содержимое кликнутого блока
        allCodeParts[1].style.display = this.showSecondPartCode ? "block" : "none";
        document.querySelector("#scriptSrc").innerText = this.src[1].src;

        // скрываем оставшиеся блоки
        if (this.showSecondPartCode) {
          allCodeParts[0].style.display = "none";
          allCodeParts[2].style.display = "none";

          document.querySelector("#templateSrc").innerText = "";
          // document.querySelector("#scriptSrc").innerText = "";
          document.querySelector("#stylesSrc").innerText = "";
        }

        // отмечаем, что код был показан юзеру
        this.howLongWasCodeScriptsShown = +this.howLongWasCodeScriptsShown + 1;
      } else if (numberBlock === "2") {
        this.showFirstPartCode = false;
        this.showSecondPartCode = false;
        this.showThirdPartCode = !this.showThirdPartCode;

        // показываем или убираем содержимое кликнутого блока
        allCodeParts[2].style.display = this.showThirdPartCode ? "block" : "none";
        document.querySelector("#stylesSrc").innerText = this.src[2].src;

        // скрываем оставшиеся блоки
        if (this.showThirdPartCode) {
          allCodeParts[0].style.display = "none";
          allCodeParts[1].style.display = "none";

          document.querySelector("#templateSrc").innerText = "";
          document.querySelector("#scriptSrc").innerText = "";
          // document.querySelector("#stylesSrc").innerText = "";
        }

        // отмечаем, что код был показан юзеру
        this.howLongWasCodeStylesShown = +this.howLongWasCodeStylesShown + 1;
      }
    },
    copySrc(numberIcon) {
      if (numberIcon === 0) {
        this.copiedFirstSrc = true;

        // сохраняем в буфер
        navigator.clipboard.writeText(dbForUser[0].src);

        // добавляем счёт, чтобы не дублировать замену кода
        this.howLongWasCodeTemplateShown = 0;
      } else if (numberIcon === 1) {
        this.copiedSecondSrc = true;

        // сохраняем в буфер
        navigator.clipboard.writeText(dbForUser[1].src);

        // добавляем счёт, чтобы не дублировать замену кода
        this.howLongWasCodeScriptsShown = 0;
      } else if (numberIcon === 2) {
        this.copiedThirdSrc = true;

        // сохраняем в буфер
        navigator.clipboard.writeText(dbForUser[2].src);

        // добавляем счёт, чтобы не дублировать замену кода
        this.howLongWasCodeStylesShown = 0;
      } 
      
      document.getElementsByClassName("copyIcon")[numberIcon].style.pointerEvents = "none";
      document.getElementsByClassName("copyIcon")[numberIcon].style.opacity = "0.3";
    },
  },
  mounted() {
    document.querySelector("#templateSrc").innerText = this.src[0].src;
    document.querySelector("#scriptSrc").innerText = this.src[1].src;
    document.querySelector("#stylesSrc").innerText = this.src[2].src;

    let recaptchaScript = document.createElement('script');
    recaptchaScript.setAttribute('type', 'text/javascript');
    recaptchaScript.setAttribute('src', "https://www.effectivecreativeformats.com/ec36492b749edd34a18d22588bedadb0/invoke.js");
    document.getElementsByClassName("placeForAds")[0].appendChild(recaptchaScript);

    // document.head.appendChild(recaptchaScript);
  },
  updated() {
    const codeTemplateColors = [
      {
        id: 0,
        code: 'v-else',
        color: '#0CC634'
      },
      {
        id: 1,
        code: ':key="user.id"',
        color: '#F44F1A'
      },
      {
        id: 2,
        code: '{{ user.name }}',
        color: '#F1334A'
      },
      {
        id: 3,
        code: '{{ user.residence }}',
        color: '#F1334A'
      },
      {
        id: 4,
        code: 'img src="https://clck.ru/sMhds" alt="attention icon"',
        color: '#386FFC'
      },
      {
        id: 5,
        code: 'Такого пользователя нет в Базе Данных',
        color: '#FFC700'
      },
      {
        id: 6,
        code: 'img :src="user.avatar" :alt="user.alt"',
        color: '#386FFC'
      },
      {
        id: 7,
        code: 'v-if="!emptyArrayUsers"',
        color: '#0CC634'
      },
      {
        id: 8,
        code: 'v-for="user in users"',
        color: '#0CC634'
      },
      {
        id: 9,
        code: 'input type="text" placeholder="Введите данные для поиска"',
        color: '#AD0068'
      },
      {
        id: 10,
        code: 'img src="https://clck.ru/sMgeU" alt="search icon"',
        color: '#386FFC'
      },
      {
        id: 11,
        code: '@input=',
        color: '#AD8700'
      },
      {
        id: 12,
        code: 'event',
        color: '#AD8700'
      },
      {
        id: 13,
        code: 'searchInList',
        color: '#AD8700'
      },
    ]

    const codeScriptColors = [
      {
        id: 0,
        code: 'sourceArrayUsers',
        color: '#F44F1A'
      },
      {
        id: 1,
        code: 'users',
        color: '#AD8700'
      },
      {
        id: 2,
        code: 'emptyArrayUsers',
        color: '#FFC700'
      },
      {
        id: 3,
        code: 'contentInput',
        color: '#0CC634'
      },
      {
        id: 4,
        code: 'event',
        color: '#386FFC'
      },
      // {
      //   id: 5,
      //   code: 'search = require("search-in-list")',
      //   color: '#AD0068'
      // },
      // {
      //   id: 6,
      //   code: 'search',
      //   color: '#AD0068'
      // },
      {
        id: 5,
        code: 'search-in-list',
        color: '#AD0068'
      },
      {
        id: 6,
        code: 'search',
        color: '#AD0068'
      },

      {
        id: 7,
        code: '// включаем библиотеку поиска',
        color: '#787878'
      },
      {
        id: 8,
        code: '// при очистке поля - возвращаем исходный список',
        color: '#787878'
      },
      {
        id: 9,
        code: '// фильтруем исходный массив',
        color: '#787878'
      },
      {
        id: 10,
        code: '// сохраняем текущее содержимое',
        color: '#787878'
      },
      {
        id: 11,
        code: '// даём сигнал, что список доступных пользователей закончился',
        color: '#787878'
      },    
    ]

    const codeStyleColors = [
      {
        id: 0,
        code: '.container',
        color: '#F44F1A'
      },
      {
        id: 1,
        code: '.header',
        color: '#AD8700'
      },
      {
        id: 2,
        code: 'inputArea',
        color: '#AD0068'
      },
      {
        id: 3,
        code: '.header__inputContent',
        color: '#0CC634'
      },
      {
        id: 4,
        code: 'input',
        color: '#386FFC'
      },
      {
        id: 5,
        code: '.main',
        color: '#AD8700'
      },
      {
        id: 6,
        code: '.usersList',
        color: '#AD0068'
      },
      {
        id: 7,
        code: '.list',
        color: '#0CC634'
      },
      {
        id: 8,
        code: '.userInfo',
        color: '#386FFC'
      },
      {
        id: 9,
        code: '.userAvatar',
        color: '#8F00FF'
      },
      {
        id: 10,
        code: '.userData',
        color: '#8F00FF'
      },
      {
        id: 11,
        code: '.userName',
        color: '#CF2727'
      },
      {
        id: 12,
        code: '.userResidence',
        color: '#CF2727'
      },
      {
        id: 13,
        code: 'warning',
        color: '#AD0068'
      },
      {
        id: 14,
        code: 'icon',
        color: '#0CC634'
      },
    ]

    if (this.showFirstPartCode) {
      document.getElementsByClassName("code")[0].style.display = "flex";
      document.getElementsByClassName("code")[0].style.justifyContent = "space-between";
    } else if (this.showSecondPartCode) {
      document.getElementsByClassName("code")[1].style.display = "flex";
      document.getElementsByClassName("code")[1].style.justifyContent = "space-between";
    } else if (this.showThirdPartCode) {
      document.getElementsByClassName("code")[2].style.display = "flex";
      document.getElementsByClassName("code")[2].style.justifyContent = "space-between";
    } 

    // раскрашиваем определённые фразы следующим образом:
    function wordPaint(code, color, codePlace) {
      // получаем блок кода
      let srcBlock = document.getElementById(codePlace);

      // получаем содержимое блока кода
      let contentBlockCode = srcBlock.innerHTML;      
    
      // ищем и раскрашиваем определённое слово определённым цветом
      if (code === "// включаем библиотеку поиска") {
        contentBlockCode = contentBlockCode.replace("// включаем библиотеку поиска", '<div class="selectedWord" style="color: ' + color + '; font-size: 14px;">' + "// включаем библиотеку поиска" + '</div>');
      } else if (code === "// при очистке поля - возвращаем исходный список") {
        contentBlockCode = contentBlockCode.replace("// при очистке поля - возвращаем исходный список", '<div class="selectedWord" style="color: ' + color + '; font-size: 14px;">' + "// при очистке поля - возвращаем исходный список" + '</div>');
      } else if (code === "// фильтруем исходный массив") {
        const re = new RegExp(`${code}`, 'g');
        contentBlockCode = contentBlockCode.replace(re, '<div class="selectedWord" style="color: ' + color + '; font-size: 14px;">' + "// фильтруем исходный массив" + '</div>');
      } else if (code === "// сохраняем текущее содержимое") {
        contentBlockCode = contentBlockCode.replace("// сохраняем текущее содержимое", '<div class="selectedWord" style="color: ' + color + '; font-size: 14px;">' + "// сохраняем текущее содержимое" + '</div>');
      } else if (code === "// даём сигнал, что список доступных пользователей закончился") {
        contentBlockCode = contentBlockCode.replace("// даём сигнал, что список доступных пользователей закончился", '<div class="selectedWord" style="color: ' + color + '; font-size: 14px;">' + "// даём сигнал, что список доступных пользователей закончился" + '</div>');
      } else if (code === "inputArea") {
        contentBlockCode = contentBlockCode.replace("inputArea", '<div class="selectedWord" style="color: ' + color + '">' + "&__inputArea" + '</div>');
      } else if (code === "warning") {
        contentBlockCode = contentBlockCode.replace("warning", '<div class="selectedWord" style="color: ' + color + '">' + "&__warning" + '</div>');
      } else if (code === "icon") {
        contentBlockCode = contentBlockCode.replace("icon", '<div class="selectedWord" style="color: ' + color + '">' + "&-icon" + '</div>');
      } else if (code === "search-in-list") {
        contentBlockCode = contentBlockCode.replace("search-in-list", '<div class="selectedWord" style="color: ' + color + '">' + '= require("search-in-list")' + '</div>');
      } else if (codePlace === "templateSrc") {
        if (code === "event") {
          const re = new RegExp(`${code}`, 'g');
          contentBlockCode = contentBlockCode.replace(re, `<div class="selectedWord" style="color: ${color}">${code}</div>`);
        } else {
          // const re = new RegExp(`${code}(?![-|a-zA-Zа-яёА-ЯЁ])`, 'g');
          contentBlockCode = contentBlockCode.replace(code, `<div class="selectedWord" style="color: ${color}">${code}</div>`);
        }
      } else if (codePlace === "scriptSrc") {
        const re = new RegExp(`${code}(?![-|a-zA-Zа-яёА-ЯЁ])`, 'g');
        contentBlockCode = contentBlockCode.replace(re, `<div class="selectedWord" style="color: ${color}">${code}</div>`);
      } else {
        const re = new RegExp(`(^|[^_0-9a-zA-Zа-яёА-ЯЁ])${code}([^_0-9a-zA-Zа-яёА-ЯЁ]|$)`, 'g');
        contentBlockCode = contentBlockCode.replace(re, `<div class="selectedWord" style="color: ${color}">${code}</div>`);
      }

      // обновляем содержимое
      srcBlock.innerHTML = contentBlockCode;
    }

    if (+this.howLongWasCodeTemplateShown > 0) {
      for (let i = 0; i < codeTemplateColors.length; i++) {
        wordPaint(codeTemplateColors[i].code, codeTemplateColors[i].color, "templateSrc")
      }
    }

    if (+this.howLongWasCodeScriptsShown > 0) {
      for (let i = 0; i < codeScriptColors.length; i++) {
        wordPaint(codeScriptColors[i].code, codeScriptColors[i].color, "scriptSrc")
      }
    }

    if (+this.howLongWasCodeStylesShown > 0) {
      for (let i = 0; i < codeStyleColors.length; i++) {
        wordPaint(codeStyleColors[i].code, codeStyleColors[i].color, "stylesSrc")
      }
    }
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Padauk&display=swap');
  @import '../../../styles/sass/common/vars.scss';

  .selectedWord {
    display: inline-block;
    // margin: 0 5px;
    // z-index: -1;
  }

  .main {
    &__src {
      &-content {
        .codeBlock {
          margin-bottom: 10px;

          &-title {
            cursor: $cursorPointer;
            background-color: lightgray;
            color: #332525 !important;
            font-size: 20px;
            font-weight: normal;
            height: 40px;
            padding-left: 20px;
            border-radius: 12px;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-family: monospace;

            &:hover {
              box-shadow: 0px 0px 0px 1px #ffc107, inset 0px 0px 0px 1px #ffc107, 0px 0px 10px 2px #ffc107,inset 0px 0px 10px 2px #ffc107;
            }
          }

          .code {
            display: none;

            #templateSrc, #scriptSrc, #stylesSrc {
              font-family: 'Padauk', sans-serif;
              margin-left: 10px;
              border: 1px solid;
              border-radius: 12px;
              padding-right: 81px;
              padding-left: 57px;
            }

            .copyIcon {
              cursor: $cursorPointer;
              margin-top: 25px;
                
              img {
                width: 30px;
                height: 30px;
              }
            }
          }
        }
      }
    }
  }
</style>