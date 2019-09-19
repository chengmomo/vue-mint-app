<template>
  <div>
    <mt-cell title="使用better-scroll"></mt-cell>
    <slider :info="slides"></slider>
    <mt-cell title="使用mint组件swipe"></mt-cell>
    <mt-swipe :auto="0" style="height: 200px">
      <mt-swipe-item v-for="(item, index) in slides" :key="index" class="item">
        <img :src="item.src" alt="" class="image">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import Slider from '../../components/Slider';

  export default {
    name: 'SliderDemo',
    components: { Slider },
    data() {
      return {
        slides: [
          { src: '../../static/img/card-1.jpg' },
          { src: '../../static/img/card-2.jpg' },
          { src: '../../static/img/card-3.jpg' }
        ]
      };
    }
  };
</script>

<style scoped>
  .image {
    width: 100%;
    height: 100%;
  }
</style>
