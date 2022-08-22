<template>
  <div class="disqus">
    <div class="disqus_input">
      <img src="../../../public/pictures/icons/defaultAva.png" alt="user ava" v-if="!userAva" />
      <img :src="userAva" alt="user ava" v-else />

      <div class="disqus_print-comment" v-if="!showTextarea">
        <input
          type="text"
          ref="commentField"
          placeholder="Введите сообщение..."
          @input="(event) => printed(event.target.value)"
          @click="inputClicked"
        />
      </div>
      <div class="disqus_print-comment" v-if="showTextarea">
        <div v-if="needLogin">
          <DisqusAuth @login="login" />
        </div>
        <div v-if="!needLogin">
          <textarea
            ref="commentTextarea"
            @input="(event) => printed(event.target.value)"
          />
          <div class="textarea-dop-block">
            <div class="disqus_send-comment" @click="sendComment">
              <button type="submit" class="btn btn-primary btn-sm">
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="disqus_list" v-if="showComment">
      <div class="comment" v-for="comment in commentList" :key="comment.id_comment">
        <img :src="comment.avatar" alt="avatar user" />
        <div class="comment__content">
          <div class="comment__author-name">{{comment.name}}</div>
          <div class="comment__text">{{ comment.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DisqusAuth from "./disqus-auth.vue";
let allComments;

export default {
  name: "disqus-block",
  components: {
    DisqusAuth,
  },
  data() {
    return {
      commentCurrent: "",
      commentList: [],
      showComment: false,
      showTextarea: false,
      needLogin: true,
      userAva: false,
      userName: false,
      textareaCreated: false,
    };
  },
  methods: {
    inputClicked() {
      // показываем поле ввода
      this.showTextarea = true;
    },
    printed(val) {
      this.commentCurrent = val;
    },
    sendComment() {
      // создаём id нового коммента
      const idCommentNew = this.commentList.length + 1;

      // получаем данные для коммента
      const userAva = this.userAva;
      const userName = this.userName;
      const commentText = this.commentCurrent;

      // создаём новый коммент
      let newComment = {
        id_comment: idCommentNew,
        ava: userAva,
        name: userName,
        text: commentText,
      }

      // сохраняем коммент
      this.commentList.push(newComment);

      // и на сервер тоже
      (async function () {
        // отправляем данные авторизации для аутентификации на сервере
        const axios = require('axios').default;

        await axios.post(
          'https://iq141.herokuapp.com/saveComment',
          {
            name: userName,
            avatar: userAva,
            text: commentText
          }
        ).then(
            response => {
                try {
                  if (response.statusText !== "OK") {
                    console.log("Ошибка сохранения коммента");
                  } 
                } catch (e) {
                    console.error("Error text:", e);
                }
            }
        )
      })();

      // включаем показ комментов
      this.showComment = true;
      // очищаем данные поля
      this.commentCurrent = "";
      // очищаем поле
      if (this.$refs.commentField) {
        this.$refs.commentField.value = "";
      }

      // убираем курсор
      this.textareaCreated = true;
    },
    login(value) {
      this.needLogin = value;
    }
  },
  mounted() {
    localStorage.getItem("userAva") ? this.needLogin = false : this.needLogin = true;
    localStorage.getItem("userAva") ? this.userAva = localStorage.getItem("userAva") : this.userAva = false;

    // получаем все ранее созданные комментарии
    (async function() {
      const axios = require('axios').default;
      
      await axios.get(
        'https://iq141.herokuapp.com/getAllComments'
      ).then(response => {
        try {
          allComments = response;
        } catch (e) {
          console.error("Error text:", e);
        }

        return allComments;
      })
    })().then(() => {
      try {
        for (let i = 0; i < allComments.data.length; i++) {
          this.commentList.push(allComments.data[i]);
        }
      } catch (e) {
        console.error("Error text:", e);
      }
    });
  },
  updated() {
    console.log("commentList:", this.commentList);

    if (this.$refs.commentTextarea && this.textareaCreated === false) {
      // ставим курсор в поле ввода, как только оно появилось
      this.$refs.commentTextarea.focus();
    }

    if (this.$refs.commentTextarea && this.$refs.commentTextarea.value.length > 0) {
      // очищаем поле ввода, если оно заполнено
      this.$refs.commentTextarea.value = "";
    }

    // получаем имя и аватарку вошедшего пользователя
    this.userAva = localStorage.getItem("userAva");
    this.userName = localStorage.getItem("userName");

    // включаем показ комментов
      this.showComment = true;
  },
};
</script>

<style lang="scss">
.disqus {
  margin: 20px 0 40px 0;
  width: 100%;
  height: max-content;
  border-radius: 12px;
  overflow: hidden;
  padding: 0 33px;

  .disqus_input {
    display: flex;
    align-items: center;

    .disqus_print-comment {
      input {
        margin: 10px 20px 0 10px;
        width: 280px;
        height: 40px;
        border: none;
        padding-left: 12px;
        outline: none;
        font-size: 20px;
        font-weight: 300;
      }

      textarea {
        margin: 10px 20px 0 10px;
        width: 280px;
        height: 80px;
        border-radius: 10px;
        padding-left: 6px;
        outline: none;
        font-size: 20px;
        font-weight: 300;
      }

      .textarea-dop-block {
        margin: 0 20px 0 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .disqus_send-comment {
          margin-left: 190px;
        }
      }
    }
  }

  .disqus_list {
    margin: 10px 0;

    .comment {
      margin: 10px;
      border-radius: 10px;
      position: relative;
      width: max-content;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px;

      font-size: 13px;

      img {
        width: 30px;
        height: 30px;
        border-radius: 30px;
        margin-right: 10px;
      }

      .comment__content {
        .comment__author-name {
          color: rgb(22, 6, 255);
        }

        .comment__text {
          text-align: left;
        }
      }
    }
  }
}

.disqus_input > img {
  margin-top: 10px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
}
</style>