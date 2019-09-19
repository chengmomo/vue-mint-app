<template>
  <div>
    <mt-header fixed title="首页"></mt-header>
    <scroll-bar class="scroll-bar"
                :nav="nav" :default-tab="currentTab" @nav-change="changeNav"></scroll-bar>
  </div>
</template>

<script>
  import CommonCell from '../../components/CommonCell';
  import ScrollBar from '../../components/ScrollBar';

  export default {
    name: 'Home',
    components: { ScrollBar, CommonCell },
    data() {
      return {
        nav: ['推荐', '运动', '彩妆', '个护', '保健', '护肤', '美食', '生活'],
        currentTab: 0
      };
    },
    methods: {
      clickCell(name) {
        this.$router.push({
          name
        });
      },
      changeNav(event, navIndex) {
        this.currentTab = navIndex;
      }
    }
  };
</script>

<style scoped>
  .scroll-bar {
    margin-top: 40px;
  }
</style>
