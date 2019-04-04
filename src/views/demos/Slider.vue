<template>
  <div class="slider-container">
    <div class="slider" ref="slider">
      <div class="slider-group" ref="sliderGroup">
        <!--<slot></slot>-->
        <div class="slider-item" v-for="(item, index) in list" :key="index">
          <img :src="item.src">
        </div>
      </div>
      <div class="slider-dots" v-if="dots">
        <span :class="`dot ${index === currentPageIndex ? 'active' :'' }`"
              v-for="(item, index) in list.length" :key="index"></span>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  name: 'slider',
  props: {
    info: {
      type: Array,
    },
    // 是否循环播放
    loop: {
      type: Boolean,
      default: true,
    },
    // 是否自动播放
    autoPlay: {
      type: Boolean,
      default: true,
    },
    // 播放间隔
    interval: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      list: this.info,
      dots: true,
      currentPageIndex: 0,
    };
  },
  mounted() {
    // 在确保列表渲染完成后，才能创建 BScroll 实例，因此Vue中初始化 BScroll 最佳时机是 mouted 的 nextTick；还可以通过 setIimeout 来实现
    // $nextTick() 是 vue 提供的钩子，主要是确保 DOM 已经全部挂载完在调用下面的方法
    // 发现使用 this.$nectTick() 存在问题，因此使用了 settimeout 20ms 的方法
    const that = this;
    setTimeout(() => {
      that.initSliderWidth();
      that.initSlider();
      // 如果自动播放 则开启
      if (that.autoPlay) {
        that.play();
      }
    }, 20);
  },
  destroyed() {
    clearTimeout(this.timer);
  },
  methods: {
    initSliderWidth() {
      // 获取手机屏幕的宽度
      // const imgWidth = this.$refs.slider.clientWidth
      const imgWidth = window.innerWidth;
      let sliderWidth = imgWidth * this.info.length;
      if (this.loop) {
        // 循环轮播需要添加两个img DOM 的宽度
        sliderWidth += imgWidth * 2;
      }
      this.$refs.sliderGroup.style.width = `${sliderWidth}px`;
      const children = this.$refs.sliderGroup.children;
      for (let i = 0; i < children.length; i++) {
        // <slot></slot>
        // children[i].className = 'slider-item';
        children[i].style.width = `${imgWidth}px`;
      }
    },
    initSlider() {
      const options = {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop, // 开启循环播放
          threshold: 0.3, // 滚动距离超过宽度/高度的 30% 时切换图片
          speed: 400, // 切换动画时长 400ms
          // stepX: 200, // 每页宽度为 200px
          // stepY: 200, // 每页高度为 200px
        },
        bounce: false,
        click: true,
      };
      this.slider = new BScroll(this.$refs.slider, options);
      // 获取当前页
      this.getCurrentPageIndex();
    },
    getCurrentPageIndex() {
      this.slider.on('scrollEnd', () => {
        const index = this.slider.getCurrentPage().pageX;
        this.currentPageIndex = index;
        // 当滚动结束以后 如果是自动播放的话 那么首先要清除定时器(防止手动拖动轮播图以后图片无法正确显示)然后再次执行方法 才能实现轮播
        if (this.autoPlay) {
          clearTimeout(this.timer);
          this.play();
        }
      });
    },
    play() {
      let pageIndex = this.currentPageIndex;
      this.timer = setInterval(() => {
        pageIndex++;
        if (pageIndex >= this.list.length) {
          pageIndex = 0;
        }
        this.slider.goToPage(pageIndex);
      }, this.interval);
    },
  },
};
</script>

<style lang="scss" scoped>
  .slider {
    position: relative;
    min-height: 1px;
    .slider-group {
      overflow: hidden;
      white-space: nowrap;
      .slider-item {
        overflow: hidden;
        height: 220px;
        float: left;
        width: 100%;
        & img {
          display: block;
          width: 100%;
        }
      }
    }
    .slider-dots {
      position: absolute;
      bottom: 12px;
      left: 0;
      right: 0;
      height: 20px;
      text-align: center;
      .dot {
        display: inline-block;
        margin: 0 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #dfdfdf;
      }
      & .active {
        width: 20px;
        border-radius: 5px;
        background: #dfdfdf;
      }
    }
  }
</style>
