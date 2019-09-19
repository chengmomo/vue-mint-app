<template>
  <div>
    <div v-for="(item,index) in imgList" :key="index">
      <img class="item-pic" v-lazy="item.url"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'imageLoad',
    data() {
      return {
        imgList: [
          { url: require('./../../../static/img/card-1.jpg') },
          { url: require('./../../../static/img/card-2.jpg') },
          { url: require('./../../../static/img/card-3.jpg') },
          { url: require('./../../../static/img/card-1.jpg') },
          { url: require('./../../../static/img/card-2.jpg') },
          { url: require('./../../../static/img/card-3.jpg') }
        ]
      };
    }
  };
</script>

<style scoped>
  .item-pic {
    width: 100%;
  }
</style>
