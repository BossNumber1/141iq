<template>
  <div class="main">
    <div v-if="timeRead !== ''" class="timeRead">
      Среднее время прочтения: {{timeRead}}
    </div>
    <DemoMain />
    <SrcMain :dbForCopy="dbForCopy" :db="db" />
    <DiscussionMain />
  </div>
</template>

<script>
import DemoMain from "./main/Demo-Main.vue"
import DiscussionMain from "./main/Discussion-Main.vue"
import SrcMain from "./main/Src-Main.vue"
import readingTime from 'reading-time'

export default {
  name: "Main-App",
  props: ['db', 'dbForCopy'],
  data() {
    return {
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
    const statsAboutSrcFirst = readingTime(this.dbForCopy[0].src);
    const statsAboutSrcSecond = readingTime(this.dbForCopy[1].src);
    const statsAboutSrcThird = readingTime(this.dbForCopy[2].src);

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