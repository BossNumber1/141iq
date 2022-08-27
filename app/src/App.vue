<template>
  <div class="container" id="app">
    <div class="header">
      <div class="title display-1"><mark>141</mark>iq</div>
      <div class="header__subtitle lead text-muted">Делаю сложное простым</div>
    </div>
    <div class="subheader mt-2">
      <!-- <img src="../public/pictures/catbooks.png" alt="cat books" /> -->
      <!-- <img src="../public/pictures/womanstudy.png" alt="woman study" /> -->
       <Animator />
    </div>
    <div class="title display-1 mt-3">
      Фильтрация списка на Vue
    </div>
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
                <img src="../public/pictures/icons/showCode.png" alt="icon code show" />
              </div>
              <div v-else>
                <img src="../public/pictures/icons/hideCode.png" alt="icon code hide" />
              </div>
            </div>
            <div class="code">
              <div id="templateSrc"></div>
              <div class="copyIcon" @click="copySrc(0)">
                <img v-if="!copiedFirstSrc" src="../public/pictures/icons/copyIcon.png" alt="icon copy" />
                <img v-else src="../public/pictures/icons/successIcon.svg" alt="icon success copied" />
              </div>
            </div>
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
            <div class="code">
              <div id="scriptSrc"></div>
              <div class="copyIcon" @click="copySrc(1)">
                <img v-if="!copiedSecondSrc" src="../public/pictures/icons/copyIcon.png" alt="icon copy" />
                <img v-else src="../public/pictures/icons/successIcon.svg" alt="icon success copied" />
              </div>
            </div>
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
            <div class="code">
              <div id="stylesSrc"></div>
              <div class="copyIcon" @click="copySrc(2)">
                <img v-if="!copiedThirdSrc" src="../public/pictures/icons/copyIcon.png" alt="icon copy" />
                <img v-else src="../public/pictures/icons/successIcon.svg" alt="icon success copied" />
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
    <AdminCard v-if="showCardAdmin" :showCardAdmin="showCardAdmin" />
    <div class="footer">
      <div>
        <img src="../public/pictures/dogfriend.png" alt="dog image" />
        <p>
          Незнание вменяется в вину
        </p>
        <div class="footer-original-quote">Imperitia pro culpa habetur</div>
      </div>
      <div>
        <div class="footer__creator" @click="showAdminCardBio" v-if="!showCardAdmin">
          <img src="../public/pictures/creator.png" alt="creator" /> Дмитрий Устинов
        </div>
        <div class="footer__creator" @click="showAdminCardBio" v-else>
          <img src="../public/pictures/creator.png" alt="creator" /> Закрыть карточку
        </div>
        <div class="footer__contacts">
          <img src="../public/pictures/contacts.png" alt="contacts" />
          <a href="https://t.me/moyustimov">t.me/moyustimov</a>
        </div>
        <div class="footer__visitors">
          <img src="../public/pictures/eye.png" alt="eye" /> Нас посетило: <b>3</b> человек
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterContacts from "./components/FilterContacts";
import DisqusBlock from "./components/disqus/disqus-block";
import AdminCard from "./components/AdminCard.vue"
import Animator from "./components/Animator.vue"

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
  name: "App",
  components: {
    FilterContacts,
    DisqusBlock,
    AdminCard,
    Animator
  },
  data() {
    return {
      showFirstPartCode: false,
      showSecondPartCode: false,
      showThirdPartCode: false,
      src: db,
      copiedFirstSrc: false,
      copiedSecondSrc: false,
      copiedThirdSrc: false,
      showCardAdmin: false
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
    showAdminCardBio() {
      this.showCardAdmin = !this.showCardAdmin;
    }
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
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100&display=swap");
@import './styles/sass/common/vars.scss';

body {
  font-family: "Roboto Slab", serif;
  // color: #332525;

  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Chrome/Safari/Opera */
  -khtml-user-select: none;
  /* Konqueror */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version, currently not supported by any browser */

  cursor: $cursorDefault;
}

.header {
  // padding-top: 183px;
   padding-top: 52px;
  margin-bottom: 37px;

  &__subtitle {
    text-align: center;
  }
}

.subheader {
  // padding-left: 150px;
// img:nth-child(1) {
//     width: 256px;
//     height: 215px;
//     margin-right: 195px;
//   } 

// img:nth-child(2) {
// img {
  // margin-top: 15px;
    width: 255px;
        height: 75px;
    // height: 130px;
    
  // } 
  
}


.placeForAds {
  // width: 100%;
  width: max-content;
  // border: 1px solid;
  height: 250px;
  margin: 50px 0;
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

.footer {
  margin-top: 100px;
  padding: 50px 50px 20px 50px;
  border-top: 0.5px solid #e4e4e4;
  background: aliceblue;

  // border-top: 0.5px solid #332525;

  display: flex;

  img {
    width: 256px;
    height: 224px;
  }

  p {
    // display: none;
    font-size: 9px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  &-original-quote {
    font-size: 9px;
    padding-left: 5px;
  }

  &__creator {
    cursor: $cursorPointer;

    &:hover {
      font-size: 25px;
      transition: 0.5s;
    }
  }

  &__visitors, &__creator, &__contacts {
    // width: max-content + 20px;
    display: flex;
    align-items: center;
    justify-content: left;

    b {
      margin: 0 5px;
    }

    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }

    a {
      cursor: $cursorPointer;
      text-decoration: none !important;
      color: black;

      &:hover {
        font-size: 25px;
        transition: 0.5s;
      }
    }
  }
}

.title {
    text-align: center;
    margin-bottom: 30px;
}

.titleBlock {
  text-align: center;
  margin: 10px;
}

img {
  width: 100%;
  height: auto;
}
</style>
