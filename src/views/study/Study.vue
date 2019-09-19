<template>
  <div>
    <mt-navbar class="menu-container" v-model="selected">
      <mt-tab-item v-for="item in navs" :id="item.id" :key="item.id">{{item.name}}</mt-tab-item>
    </mt-navbar>
    <div class="tab-container">
      <mt-tab-container v-model="selected" :swipeable="false">
        <mt-tab-container-item v-for="item in navs" :id="item.id" :key="item.id">
          <component :is="item.comp" :info="item.info"></component>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
  import CommonCell from '../../components/CommonCell';
  import SliderDemo from './SliderDemo';
  import MintDemo from './MintDemo';
  import CommonDemo from './CommonDemo';
  import ImageLoad from './imageLoad';

  export default {
    components: { ImageLoad, CommonDemo, MintDemo, SliderDemo, CommonCell },
    data() {
      return {
        selected: 1,
        navs: []
      };
    },
    mounted() {
      this.navs = [
        { id: 1, name: 'mint组件', comp: MintDemo, info: [] },
        { id: 2, name: '轮播组件', comp: SliderDemo, info: [] },
        { id: 3, name: '图片懒加载', comp: ImageLoad, info: [] },
        { id: 4, name: '其他组件', comp: CommonDemo, info: [] },
        { id: 5, name: 'transition', comp: CommonDemo, info: [] }
      ];
    },
    methods: {}
  };
</script>

<style scoped lang="scss">
  @import '../../assets/css/function';

  .tab-container {
    padding-top: 4px;
    box-sizing: border-box;
    background-color: white;
  }
</style>
