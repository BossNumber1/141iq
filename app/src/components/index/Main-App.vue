<template>
  <div class="main">
    <div v-if="timeRead !== ''" class="timeRead">
      Среднее время прочтения: {{timeRead}}
    </div>
    <DemoMain />
    <SrcMain :dbForUserOrig="dbForUser" :db="db" />
    <DiscussionMain />
  </div>
</template>

<script>
import DemoMain from "./main/Demo-Main.vue"
import DiscussionMain from "./main/Discussion-Main.vue"
import SrcMain from "./main/Src-Main.vue"
import readingTime from 'reading-time'

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
  name: "Main-App",
  data() {
    return {
      dbForUser: dbForUser,
      db: db,
      timeRead: ""
    }
  },
  components: {
    DemoMain,
    DiscussionMain,
    SrcMain
  },
  mounted() {
    // получаем среднее время прочтения

    // 1. получаем данные о времени прочтения по каждому коду
    const statsAboutSrcFirst = readingTime(dbForUser[0].src);
    const statsAboutSrcSecond = readingTime(dbForUser[1].src);
    const statsAboutSrcThird = readingTime(dbForUser[2].src);

    // 2. получаем время прочтения по каждому коду, в минутах
    const timeReadSrcFirst = +statsAboutSrcFirst.minutes;
    const timeReadSrcSecond = +statsAboutSrcSecond.minutes;
    const timeReadSrcThird = +statsAboutSrcThird.minutes;

    // 3. получаем общее время
    const timeReadCommon = timeReadSrcFirst + timeReadSrcSecond + timeReadSrcThird;

    // 4. округляем и сохраняем
    this.timeRead = Math.round(timeReadCommon) + " минуты";
  },
}
</script>

<style lang="scss">
  .titleBlock {
    text-align: center;
    margin: 10px;
  }

  .timeRead {
    color: gray;
    font-style: italic;
    margin-bottom: 18px;
    text-align: center;
    font-size: 13px;
  }
</style>