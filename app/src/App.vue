<template>
  <div class="container">
    <div class="header">
      <div class="header__title">Фильтрация списка на Vue</div>
      <div class="header__subtitle">Делаю сложное простым</div>
    </div>
    <div class="main">
      <div class="main__demo">
        <div class="titleBlock">Что получаем</div>
        <div class="main__demo-content">
          <FilterContacts />
        </div>
      </div>
      <div class="main__src">
        <div class="titleBlock">Как достигаем</div>
        <div class="main__src-content">
          <div class="codeBlock">
            <div class="codeBlock-title" @click="manageDisplayRequiredCode('0')">template</div>
            <div class="code">
              <img src="https://clck.ru/sNA3H" alt="a snapshot of the template" />
            </div>
          </div>
          <div class="codeBlock">
            <div class="codeBlock-title" @click="manageDisplayRequiredCode('1')">script</div>
            <div class="code">
              <img src="https://clck.ru/sNA5M" alt="a snapshot of the script" />
            </div>
          </div>
          <div class="codeBlock">
            <div class="codeBlock-title" @click="manageDisplayRequiredCode('2')">style scoped lang="scss"</div>
            <div class="code">
              <img src="https://clck.ru/sNA6M" alt="a snapshot of the styles" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import FilterContacts from "./components/FilterContacts";

export default {
  name: "App",
  components: {
    FilterContacts,
  },
  data() {
    return {
      showCode: false,
    };
  },
  methods: {
    manageDisplayRequiredCode(numberBlock) {
      if (this.showCode === false) {
        this.showCode = true;
        document.getElementsByClassName("code")[+numberBlock].style.display = "inherit";
      } else {
        this.showCode = false;
        document.getElementsByClassName("code")[+numberBlock].style.display = "none";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100&display=swap");

body {
  font-family: "Roboto Slab", serif;
}

.header {
  padding-top: 50px;
  margin-bottom: 120px;

  &__title {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }

  &__subtitle {
    color: gray;
    font-size: 14px;
    text-align: center;
  }
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
        &-title {
          background-color: lightgray;
          color: #d61a1a;
          font-size: 20px;
          height: 40px;
          display: flex;
          align-items: center;
          padding-left: 20px;
          border-radius: 12px;
          margin-bottom: 10px;
          cursor: pointer;
        }

        .code {
          display: none;
        }
      }
    }
  }
}

.footer {}

.titleBlock {
  text-align: center;
  font-size: 20px;
  margin: 10px;
}

img {
  width: 100%;
  height: auto;
}
</style>

