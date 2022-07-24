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
            <div class="codeBlock-title" @click="manageDisplayRequiredCode('0')">
              <div>template</div>
              <div v-if="!showFirstPartCode">
                <img src="../public/pictures/icons/showCode.png" alt="icon code show" />
              </div>
              <div v-else>
                <img src="../public/pictures/icons/hideCode.png" alt="icon code hide" />
              </div>
            </div>
            <div class="code">
              <img src="https://clck.ru/sNA3H" alt="a snapshot of the template" />
            </div>
          </div>
          <div class="codeBlock">
            <div class="codeBlock-title" @click="manageDisplayRequiredCode('1')">
              <div>script</div>
              <div v-if="!showSecondPartCode">
                <img src="../public/pictures/icons/showCode.png" alt="icon code show" />
              </div>
              <div v-else>
                <img src="../public/pictures/icons/hideCode.png" alt="icon code hide" />
              </div>
            </div>
            <div class="code">
              <img src="https://clck.ru/sNA5M" alt="a snapshot of the script" />
            </div>
          </div>
          <div class="codeBlock">
            <div class="codeBlock-title" @click="manageDisplayRequiredCode('2')">
              <div>style scoped lang="scss"</div>
              <div v-if="!showThirdPartCode">
                <img src="../public/pictures/icons/showCode.png" alt="icon code show" />
              </div>
              <div v-else>
                <img src="../public/pictures/icons/hideCode.png" alt="icon code hide" />
              </div>
            </div>
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
      showFirstPartCode: false,
      showSecondPartCode: false,
      showThirdPartCode: false,
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

