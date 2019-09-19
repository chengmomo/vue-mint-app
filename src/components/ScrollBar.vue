<template>
  <div class="scroll-wrap" ref="scrollbar">
    <div class="scroll-content" ref="scrollList">
      <div v-for="(item,index) in nav" :key="index"
           :class='{"nav-item":true,"active": index === current}'
           @click="selectNav($event, index)">
        <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    name: 'ScrollBar',
    props: {
      nav: {
        type: Array,
        default() {
          return [{
            id: 1,
            name: 'default'
          }];
        }
      },
      defaultTab: {
        type: Number,
        default: null
      }
    },
    data() {
      return {
        scrollbar: '',
        current: 1
      };
    },
    mounted() {
      if (!this.defaultTab) {
        this.current = this.defaultTab;
      } else {
        this.current = this.defaultTab;
      }
      const that = this;
      // setTimeout(() => {
      that.initScrollWidth();
      that.initScroll();
      that.adjust(this.current);
      // }, 20);
    },
    methods: {
      initScrollWidth() {
        const scrollList = this.$refs.scrollList;
        const items = scrollList.children;
        let width = 0;
        for (let i = 0; i < items.length; i++) {
          width += items[i].clientWidth;
        }
        scrollList.style.width = `${width + 1}px`;
      },
      initScroll() {
        if (!this.scrollbar) {
          this.scrollbar = new BScroll(this.$refs.scrollbar, {
            click: true,
            startX: 0,
            scrollX: true,
            scrollY: false,
            eventPassthrough: 'vertical'
          });
        } else {
          this.scrollbar.refresh();
        }
      },
      selectNav(event, index) {
        // console.log(event);
        // if (!event._constructed) {
        //   return;
        // }
        this.current = index;
        this.adjust(this.current);
        this.$emit('nav-change', event, index);
      },
      adjust(current) {
        const viewportWidth = this.$refs.scrollbar.clientWidth;
        const scrollListWidth = this.$refs.scrollList.clientWidth;
        const minTranslate = Math.min(0, viewportWidth - scrollListWidth);
        const middleTranslate = viewportWidth / 2;
        const items = this.$refs.scrollList.children;
        // 固定每个tab长度
        const width = current * items[0].clientWidth;
        // 不固定长度
        // let width = 0;
        // items.every((item, index) => {
        //   if (index === current) {
        //     return false;
        //   }
        //   width += items[index].clientWidth;
        //   return true;
        // });
        let translate = middleTranslate - width;
        translate = Math.max(minTranslate, Math.min(0, translate));
        // console.log(translate);
        this.scrollbar.scrollTo(translate, 0, 30);
      }
    }
  };
</script>

<style scoped>
  .scroll-wrap {
    overflow: hidden;
    white-space: nowrap;
    background-color: white;
    font-size: 16px;
  }

  .nav-item {
    display: inline-block;
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }

  .active {
    color: #1FC8CF;
    border-bottom: 2px solid #1FC8CF;
  }
</style>
