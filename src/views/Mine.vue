<template>
  <div class="rootDiv">
    <common-item left-label="朋友圈" :clickItem="clickCell"
                 :leftImg="require('../assets/img/ic_friends_circle.png')"
                 :rightImg="require('../assets/img/ic_common.png')"></common-item>
    <common-item left-label="收藏" :clickItem="clickCell" :isShowDivider="true" class="firstItem"
                 :leftImg="require('../assets/img/ic_emoji.png')"></common-item>
    <common-item left-label="设置" :clickItem="clickCell" :isShowDivider="true"
                 :leftImg="require('../assets/img/ic_settings.png')"></common-item>
    <common-item left-label="游戏" right-label="王者荣耀" :clickItem="clickCell"
                 :leftImg="require('../assets/img/ic_game.png')"></common-item>
    <!--<common-cell title="111" @click-cell="clickCell"></common-cell>-->
  </div>
</template>

<script>
import CommonCell from '../components/CommonCell';
import CommonItem from '../components/CommonItem';

export default {
  name: 'Mine',
  components: { CommonItem, CommonCell },
  methods: {
    clickCell() {
      /* eslint-disable */
        console.log(123);
      },
    },
  };
</script>

<style scoped>
  .rootDiv {
    background-color: #e3e3e3;
    height: 100vh;
    padding-top: 15px;
  }

  .firstItem {
    margin-top: 15px;
  }
</style>
