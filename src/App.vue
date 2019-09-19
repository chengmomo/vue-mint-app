<template>
  <div id="app" :style="{'height': heightNum}">
    <!--<transition :name="transitionName">-->
    <!--<router-view class="router"/>-->
    <!--</transition>-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import Tabbar from './components/TabBar';

  export default {
    name: 'App',
    components: { Tabbar },
    data() {
      return {
        transitionName: '',
        heightNum: 0
      };
    },
    // beforeRouteUpdate(to, from, next) {
    //   const toDepth = to.path.split('/').length;
    //   const fromDepth = from.path.split('/').length;
    //   this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    //   next();
    // },
    watch: {
      $route() {
        // console.log(from);
        // console.log(this.$router);
        // 1、根据索引优先级判断：如果to索引大于from索引,判断为前进状态,反之则为后退状态
        // if (to.meta.index > from.meta.index) {
        //   this.transitionName = 'slide-left';
        // } else {
        //   this.transitionName = 'slide-right';
        // }
        // 2、根据path判断
        // const toDepth = to.path.split('/').length;
        // const fromDepth = from.path.split('/').length;
        // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
        // 3、根据路由存储的状态判断
        if (this.$router.isLeft) {
          this.transitionName = 'slide-left';
        }
        if (this.$router.isRight) {
          this.transitionName = 'slide-right';
        }
      }
    },
    created() {
      // 初始化页面
      this.$router.push('/');
      this.heightNum = `${window.innerHeight - 50}px`;
    }
  };
</script>

<style lang="scss" scoped>
  #app {
    background-color: #e3e3e3;
    width: 100%;
  }

  .router {
    transition: all .3s ease;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
  }

  .slide-left-enter, .slide-right-leave-active {
    /*opacity: 1;*/
    /*transform: translate3d(90%, 0, 0);*/
    /*-webkit-transform: translate3d(90%, 0, 0);*/
    /*-moz-transform: translate3d(90%, 0, 0);*/
    opacity: 0;
    transform: translate(50px, 0);
    -webkit-transform: translate(50px, 0);
    -moz-transform: translate(50px, 0);
  }

  .slide-right-enter, .slide-left-leave-active {
    opacity: 0;
    transform: translate(-50px, 0);
    -webkit-transform: translate(-50px, 0);
    -moz-transform: translate(-50px, 0);
    /*opacity: 1;*/
    /*transform: translate3d(-90%, 0, 0);*/
    /*-webkit-transform: translate3d(-90%, 0, 0);*/
    /*-moz-transform: translate3d(-90%, 0, 0);*/
  }
</style>
