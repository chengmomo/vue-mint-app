<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <mt-header fixed :title="tabs[selected-1].name"></mt-header>
      <div style="margin-top: 40px"></div>
      <mt-tab-container v-model="selected" class="page-tabbar-container">
        <mt-tab-container-item v-for="item in tabs" :id="item.id" :key="item.id">
          <!--<mt-cell v-for="n in 10" :title="item.name + n" :key="n"></mt-cell>-->
          <component :is="item.comp"></component>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item v-for="(item, index) in tabs" :id="item.id" :key="item.id"
                   @click.native="changeState(index)">
        <img slot="icon" src="../assets/logo.png">
        <!--<tabbaricon-->
        <!--:normalImage="require('../assets/logo.png')"-->
        <!--:selectedImage="require('../assets/logo.png')"-->
        <!--:focused="currentIndex[0].isSelect"-->
        <!--/>-->
        {{item.name}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Message from './Message';
import Mine from './Mine';
import Find from './Find';
import Demo from './Demo';

export default {
  name: 'Home',
  components: { Demo, Find, Mine, Message },
  data() {
    return {
      selected: 1,
      tabs: [
        { id: 1, name: '学习', comp: Demo },
        { id: 2, name: '消息', comp: Message },
        { id: 3, name: '发现', comp: Find },
        { id: 4, name: '我的', comp: Mine }],
      // 默认 tab 的选中情况
      currentIndex: [
        { isSelect: true },
        { isSelect: false },
        { isSelect: false },
        { isSelect: false },
      ],
    };
  },
  mounted() {
  },
  methods: {
    // 改变选中 tab 的状态，根据状态来改变要显示选中与否的图片
    changeState(n) {
      for (let i = 0; i < this.currentIndex.length; i += 1) {
        if (i === n) { // 当前选中的为 true
          this.currentIndex[i].isSelect = true;
        } else { // 其它的为 false
          this.currentIndex[i].isSelect = false;
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-tabbar {
    overflow: hidden;
  }

  .page-wrap {
    overflow: auto;
    padding-bottom: 55px;
    width: 100%;
  }
</style>
