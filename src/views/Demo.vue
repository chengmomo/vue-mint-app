<template>
  <div>
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item v-for="item in navs" :id="item.id" :key="item.id">{{item.name}}</mt-tab-item>
    </mt-navbar>
    <div style="padding-top: 4px">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item v-for="item in navs" :id="item.id" :key="item.id">
          <component :is="item.comp" :info="item.info"></component>
          <!--<div>{{item.name}}</div>-->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import Slider from './demos/Slider';

export default {
  name: 'Demo',
  components: { Slider },
  data() {
    return {
      selected: 1,
      slide: [
        { src: '../../static/img/card-1.jpg' },
        { src: '../../static/img/card-2.jpg' },
        { src: '../../static/img/card-3.jpg' },
      ],
      navs: [],
    };
  },
  mounted() {
    this.navs = [
      { id: 1, name: '轮播', comp: Slider, info: this.slide },
      { id: 2, name: '图片懒加载', comp: Slider, info: [] },
      { id: 3, name: '通讯录', comp: Slider, info: [] },
      { id: 4, name: '搜索', comp: Slider, info: [] },
      { id: 5, name: 'transition', comp: Slider, info: [] }];
  },
};
</script>

<style scoped>

</style>
