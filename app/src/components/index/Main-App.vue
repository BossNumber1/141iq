<template>
  <div class="main">
    <div class="main__demo">
      <div class="titleBlock display-6">Что получаем</div>
      <div class="main__demo-content">
        <FilterContacts />
        <div class="placeForAds"></div>
      </div>
    </div>
    <div class="main__src">
      <div class="titleBlock display-6 mb-5 mt-5">Как достигаем</div>
      <div class="main__src-content">
        <div class="codeBlock">
          <div class="codeBlock-title badge text-bg-warning" @click="manageDisplayRequiredCode('0')">
            <div>template</div>
            <div v-if="!showFirstPartCode">
              <img src="../../../public/pictures/icons/showCode.png" alt="icon code show" />
            </div>
            <div v-else>
              <img src="../../../public/pictures/icons/hideCode.png" alt="icon code hide" />
            </div>
          </div>
          <div class="code">
            <div id="templateSrc"></div>
            <div class="copyIcon" @click="copySrc(0)">
              <img v-if="!copiedFirstSrc" src="../../../public/pictures/icons/copyIcon.png" alt="icon copy" />
              <img v-else src="../../../public/pictures/icons/successIcon.svg" alt="icon success copied" />
            </div>
          </div>
        </div>
        <div class="codeBlock">
          <div class="codeBlock-title badge text-bg-warning" @click="manageDisplayRequiredCode('1')">
            <div>script</div>
            <div v-if="!showSecondPartCode">
              <img src="../../../public/pictures/icons/showCode.png" alt="icon code show" />
            </div>
            <div v-else>
              <img src="../../../public/pictures/icons/hideCode.png" alt="icon code hide" />
            </div>
          </div>
          <div class="code">
            <div id="scriptSrc"></div>
            <div class="copyIcon" @click="copySrc(1)">
              <img v-if="!copiedSecondSrc" src="../../../public/pictures/icons/copyIcon.png" alt="icon copy" />
              <img v-else src="../../../public/pictures/icons/successIcon.svg" alt="icon success copied" />
            </div>
          </div>
        </div>
        <div class="codeBlock">
          <div class="codeBlock-title badge text-bg-warning" @click="manageDisplayRequiredCode('2')">
            <div>style scoped lang="scss"</div>
            <div v-if="!showThirdPartCode">
              <img src="../../../public/pictures/icons/showCode.png" alt="icon code show" />
            </div>
            <div v-else>
              <img src="../../../public/pictures/icons/hideCode.png" alt="icon code hide" />
            </div>
          </div>
          <div class="code">
            <div id="stylesSrc"></div>
            <div class="copyIcon" @click="copySrc(2)">
              <img v-if="!copiedThirdSrc" src="../../../public/pictures/icons/copyIcon.png" alt="icon copy" />
              <img v-else src="../../../public/pictures/icons/successIcon.svg" alt="icon success copied" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main__discussion">
      <div class="titleBlock display-6 mb-5 mt-5">Есть вопросы? Помогу!</div>
      <div class="main__discussion-content">
        <DisqusBlock />
      </div>
    </div>
  </div>
</template>

<script>
import FilterContacts from "../../components/FilterContacts.vue";
import DisqusBlock from "../../components/disqus/disqus-block";

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
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0const search = require("search-in-list"); // включаем библиотеку поиска

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0if (event.target.value === "") {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// при очистке поля - возвращаем исходный список
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0this.users = sourceArrayUsers;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0} else if (event.target.value.length > this.contentInput.length) {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0this.users = search(this.users, event.target.value); // фильтруем исходный массив
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0} else if (event.target.value.length < this.contentInput.length) {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0this.emptyArrayUsers = false;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0this.users = search(sourceArrayUsers, event.target.value); // фильтруем исходный массив
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0} else {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0this.users = search(sourceArrayUsers, event.target.value); // фильтруем исходный массив
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0this.contentInput = event.target.value; // сохраняем текущее содержимое

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
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// border: 1px solid orange;
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
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0margin-right: 16px;
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

      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0&-icon {
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0margin-right: 10px;
      \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}
      \u00a0\u00a0\u00a0\u00a0}
      \u00a0\u00a0}
      }`
    },
]

export default {
  name: "Main-App",
  components: {
    FilterContacts,
    DisqusBlock
  },
  data() {
    return {
      showFirstPartCode: false,
      showSecondPartCode: false,
      showThirdPartCode: false,
      copiedFirstSrc: false,
      copiedSecondSrc: false,
      copiedThirdSrc: false,
      src: db,
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
    copySrc(numberIcon) {
      if (numberIcon === 0) {
        this.copiedFirstSrc = true;
      } else if (numberIcon === 1) {
        this.copiedSecondSrc = true;
      } else if (numberIcon === 2) {
        this.copiedThirdSrc = true;
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
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/sass/common/vars.scss';

.placeForAds {
  // width: 100%;
  width: max-content;
  // border: 1px solid;
  height: 250px;
  margin: 50px 0;
}

.titleBlock {
  text-align: center;
  margin: 10px;
}

  .main {
    &__demo {
      &-content {
        margin-top: 50px;
        display: flex;
        align-items: center;
      }
    }

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