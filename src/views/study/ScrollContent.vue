<template>
  <!--<div>-->
  <!--<mt-header fixed title="Scroll">-->
  <!--<mt-button icon="back" slot="left" @click="back">返回</mt-button>-->
  <!--<mt-button icon="more" slot="right"></mt-button>-->
  <!--</mt-header>-->
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li>sddddddddddddddddddddd</li>
      <li>sddddddddddddddddddd...</li>
      <li>...</li>
      <li>dsssss...</li>
      <li>...</li>
      <li>..sd.</li>
      <li>.sdds..</li>
      <li>.sddsdddddddddddddddddddd..</li>
      <li>sddddddddddddddddddddd</li>
      <li>sddddddddddddddddddd...</li>
      <li>...</li>
      <li>.sddsdddddddddddddddddddd..</li>
      <li>sddddddddddddddddddddd</li>
      <li>sddddddddddddddddddd...</li>
      <li>...</li>
      <li>dsssss...</li>
      <li v-for="(item,index) in data" :key="index">
        {{item}}
      </li>
    </ul>
    <div class="loading-wrapper"></div>
  </div>
  <!--</div>-->
</template>
<script>
import BScroll from 'better-scroll'

export default {
  name: 'ScrollContent',
  data() {
    return {
      data: ['2', '3']
    };
  },
  mounted() {
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
      this.scroll.on('touchend', (pos) => {
        // 下拉动作
        console.log(pos)
        if (pos.y > 50) {
          this.loadData()
        }
      })
    }, 20);
    // this.$nextTick(() => {
    // })
  },
  methods: {
    back() {
      this.$router.goBack();
    },
    loadData() {
      console.log('loadData');
      const arr = [2.3, 4];
      this.data = this.data.concat(arr);
    }
  }
}
</script>

<style scoped lang="scss">
  .content li {
    font-size: 20px;
    height: 60px;
  }
</style>
