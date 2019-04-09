<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-left',
    };
  },
  // beforeRouteUpdate(to, from, next) {
  //   const toDepth = to.path.split('/').length;
  //   const fromDepth = from.path.split('/').length;
  //   this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
  //   next();
  // },
  watch: {
    $route(to, from) {
      console.log(from);
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
    },
  },
};
</script>

<style lang="scss" scoped>
  #app {
  }

  .router {
    transition: all .5s ease;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
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
