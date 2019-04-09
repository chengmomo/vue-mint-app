<template>
  <div class="wrapper">
    <mt-header fixed title="分类">
      <!--<router-link to="/" slot="left">-->
        <!--<mt-button icon="back">返回</mt-button>-->
      <!--</router-link>-->
      <mt-button icon="back" slot="left" @click="back">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="content-style">
      <div class="leftNav">
        <ul>
          <li v-for="(item, index) in navList" :key="index" :class="activeIndex===index?'active':''"
              @click="clickItem(index)">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="rightContent">
        <ul>
          <li>
            {{activeContent}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data() {
    return {
      navList: [
        { name: '特别推荐', list: [2, 2] },
        { name: '时事热点', list: [1, 2] },
        { name: '特别关注', list: [1, 2] },
        { name: '热门话题', list: [1, 2] },
        { name: '特别推荐', list: [1, 2] },
        { name: '时事热点', list: [1, 2] },
        { name: '特别关注', list: [1, 2] },
        { name: '热门话题', list: [1, 2] }],
      activeIndex: 0,
      activeContent: null,
    };
  },
  mounted() {
    this.activeContent = this.navList[this.activeIndex].name;
  },
  methods: {
    back() {
      this.$router.goBack();
    },
    clickItem(i) {
      this.activeIndex = i;
      this.activeContent = this.navList[i].name;
    },
  },
};
</script>

<style scoped lang="scss">
  .wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: scroll;
    .content-style {
      margin-top: 40px;
      height: calc(100% - 40px);
    }
  }

  .rightContent {
    margin-left: 120px;
    margin-top: 0;
    padding: 20px 15px;
    li {
      list-style-type: none;

    }
  }

  .leftNav {
    width: 120px;
    background-color: #f7f9fc;
    height: 100%;
    float: left;
    li {
      font-size: 16px;
      height: 44px;
      line-height: 44px;
      padding-left: 14px;
      padding-right: 10px;
    }
    .active {
      background-color: #fff;
      border-left: 3px solid #2cc17b;
      font-weight: bold;
    }
  }
</style>
