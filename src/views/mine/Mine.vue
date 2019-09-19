<template>
  <div class="root_wrap">
    <div class="header_wrap">
      <img src="../../assets/img/ic_common.png" class="header_icon"/>
      <div>
        <p class="header_title">李现</p>
        <p>ahshnbxa</p>
      </div>
    </div>
    <div class="options_wrap">
      <div class="options_item" v-for="(item,index) in optionList" :key="index">
        <div class="item_num">{{item.num}}</div>
        <div class="item_name">{{item.name}}</div>
      </div>
    </div>
    <common-item left-label="朋友圈" :clickItem="clickCell" class="firstItem"
                 :leftImg="require('../../assets/img/ic_friends_circle.png')"
                 :rightImg="require('../../assets/img/ic_common.png')"></common-item>
    <common-item left-label="收藏" :clickItem="clickCell" :isShowDivider="true" class="firstItem"
                 :leftImg="require('../../assets/img/ic_emoji.png')"></common-item>
    <common-item left-label="设置" :clickItem="clickCell" :isShowDivider="true"
                 :leftImg="require('../../assets/img/ic_settings.png')"></common-item>
    <common-item left-label="游戏" right-label="王者荣耀" :clickItem="clickCell"
                 :leftImg="require('../../assets/img/ic_game.png')"></common-item>
    <common-cell title="游戏" :img="require('../../assets/img/ic_emoji.png')"
                 @click-cell="clickCell" class="firstItem"></common-cell>
  </div>
</template>

<script>
  import CommonCell from '../../components/CommonCell';
  import CommonItem from '../../components/CommonItem';

  export default {
    name: 'Mine',
    components: { CommonItem, CommonCell },
    data() {
      return {
        optionList: [{ name: 'option1', num: '28' }, { name: 'option1', num: '12' }, { name: 'option1', num: '40%' }]
      };
    },
    methods: {
      clickCell() {
        console.log(123);
      }
    }
  };
</script>

<style scoped>
  .root_wrap {
    /*height: 100vh;*/
    height: 100%;
    color: #666;
  }

  .header_wrap {
    background-color: #1FC8CF;
    height: 100px;
    color: white;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
  }

  .header_title {
    font-size: 18px;
    margin-bottom: 5px;
  }

  .header_icon {
    height: 60px;
    width: 60px;
    border-radius: 30px;
    margin-right: 20px;
  }

  .options_wrap {
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 10px;

  }

  .options_item:not(:last-of-type) {
    border-right: 1px solid #e3e3e3;
  }

  .options_item {
    flex: 1;
    text-align: center;
  }

  .item_num {
    color: #1FC8CF;
    margin-bottom: 8px;
    font-size: 16px;
  }

  .firstItem {
    margin-top: 14px;
  }
</style>
