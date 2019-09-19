<template>
  <div class="itemRoot">
    <div class="itemContentRoot" @click="clickItem">
      <div class="leftDiv">
        <img v-show="leftImg" :src="leftImg" alt="" class="imgStyle leftImg">
        <span class="leftLabel">{{leftLabel}}</span>
      </div>
      <div class="rightDiv">
        <span class="rightLabel">{{rightLabel}}</span>
        <img v-show="rightImg" :src="rightImg?rightImg:''" alt="" class="imgStyle">
      </div>
    </div>
    <div :style="isShowDivider===true?'height:1px;background-color:#d9d9d9':''"></div>
  </div>
</template>

<script>
export default {

  props: {
    leftImg: {
      default: ''
    },
    leftLabel: {
      default: ''
    },
    rightImg: {
      default: ''
    },
    rightLabel: {
      default: ''
    },
    isShowDivider: {
      default: false
    },
    clickItem: {
      type: Function
    }
  }
};
</script>

<style lang="scss" scoped>
  .itemRoot {
    background-color: #fff;
    &:active{
      background-color: #d9d9d9;
    }
  }

  /* 内容根布局 */
  .itemContentRoot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  .leftDiv {
    display: flex;
    align-items: center;
    .leftImg {
      margin-right: 20px;
    }
  }

  .rightDiv {
    display: flex;
    align-items: center;
    .rightLabel {
      margin-right: 10px;
    }
  }

  .imgStyle {
    width: 35px;
    height: 35px;
  }
</style>
