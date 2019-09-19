<template>
  <div class="page-tabbar">
    <!--<div class="page-wrap">-->
      <!--<mt-header fixed :title="tabs[selected-1].name"></mt-header>-->
      <!--&lt;!&ndash;使用mint自带组件mt-tab-container&ndash;&gt;-->
      <!--<div style="margin-top: 40px"></div>-->
      <!--<mt-tab-container v-model="selected" class="page-tabbar-container"-->
                        <!--:swipeable="swipeable">-->
        <!--<mt-tab-container-item v-for="item in tabs" :id="item.id" :key="item.id"-->
                               <!--:style="{'min-height': heightNum}">-->
          <!--<component :is="item.comp"></component>-->
        <!--</mt-tab-container-item>-->
      <!--</mt-tab-container>-->
    <!--</div>-->
    <mt-tabbar v-model="selected" fixed class="tab-bar">
      <mt-tab-item v-for="(item, index) in tabs" :id="item.id" :key="item.id"
                   @click.native="changeState(index)">
        <!--<img slot="icon" :src="item.icon">-->
        <i :class="item.icon" v-show="!item.isSelect"></i>
        <i :class="item.selectedIcon" v-show="item.isSelect"></i>
        {{item.name}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  // import Message from '../views/message/Message';
  // import Mine from '../views/mine/Mine';
  // import Find from '../views/find/Find';
  // import Study from '../views/study/Study';
  // import Home from '../views/home/Home';

  export default {
    name: 'tabbar',
    // components: { Home, Study, Find, Mine, Message },
    data() {
      return {
        selected: 0,
        swipeable: false,
        heightNum: 0,
        tabs: [
          {
            id: 0,
            name: '首页',
            routerName: 'Home',
            // comp: Home,
            icon: 'iconfont icon-home_home',
            selectedIcon: 'iconfont icon-home_home_on',
            isSelect: true
          },
          {
            id: 1,
            name: '学习',
            routerName: 'Study',
            // comp: Study,
            icon: 'iconfont icon-home_shouye',
            selectedIcon: 'iconfont icon-home_shouye_on',
            isSelect: false
          },
          {
            id: 2,
            name: '消息',
            routerName: 'Message',
            // comp: Message,
            icon: 'iconfont icon-home_xiaoxi',
            selectedIcon: 'iconfont icon-home_xiaoxi_on',
            isSelect: false
          },
          {
            id: 3,
            name: '发现',
            routerName: 'Find',
            // comp: Find,
            icon: 'iconfont icon-home_faxian',
            selectedIcon: 'iconfont icon-home_faxian_on',
            isSelect: false
          },
          {
            id: 4,
            name: '我的',
            routerName: 'Mine',
            // comp: Mine,
            icon: 'iconfont icon-home_wode',
            selectedIcon: 'iconfont icon-home_wode_on',
            isSelect: false
          }]
      };
    },
    watch: {
      // 使用路由切换tab
      selected(val) {
        this.$router.push({
          name: this.tabs[val].routerName
        });
      }
    },
    mounted() {
      this.heightNum = `${window.innerHeight - 95}px`;
    },
    methods: {
      // 改变选中 tab 的状态，根据状态来改变要显示选中与否的图片
      changeState(n) {
        for (let i = 0; i < this.tabs.length; i += 1) {
          if (i === n) {
            this.tabs[i].isSelect = true;
          } else {
            this.tabs[i].isSelect = false;
          }
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .page-tabbar {
    overflow: hidden;
  }

  .page-wrap {
    overflow: auto;
    padding-bottom: 55px;
    width: 100%;
  }

  .tab-bar {
    i {
      display: block;
    }
  }
</style>
