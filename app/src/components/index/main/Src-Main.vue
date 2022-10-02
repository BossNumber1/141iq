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
export default {
  name: "Src-Main",
  props: ['dbForUserOrig', 'db'],
  data() {
    return {
      showFirstPartCode: false,
      showSecondPartCode: false,
      showThirdPartCode: false,
      copiedFirstSrc: false,
      copiedSecondSrc: false,
      copiedThirdSrc: false,
      dbForUser: this.dbForUserOrig,
      src: this.db,
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
        navigator.clipboard.writeText(this.dbForUser[0].src);

        // добавляем счёт, чтобы не дублировать замену кода
        this.howLongWasCodeTemplateShown = 0;
      } else if (numberIcon === 1) {
        this.copiedSecondSrc = true;

        // сохраняем в буфер
        navigator.clipboard.writeText(this.dbForUser[1].src);

        // добавляем счёт, чтобы не дублировать замену кода
        this.howLongWasCodeScriptsShown = 0;
      } else if (numberIcon === 2) {
        this.copiedThirdSrc = true;

        // сохраняем в буфер
        navigator.clipboard.writeText(this.dbForUser[2].src);

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
              margin: 5px 0 0 10px;
              border: 1px solid;
              border-radius: 12px;
              padding: 0 81px 9px 57px;
              width: 93%;
            }

            .copyIcon {
              cursor: $cursorPointer;
              margin-top: 25px;
              height: 32px;
                
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