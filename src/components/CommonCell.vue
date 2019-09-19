<template>
  <div @click="clickCell">
    <mt-cell :title="title" :label="label" :value="value" :is-link="isLink">
      <img slot="icon" width="35" height="35" class="cell-img" v-if="img"
           :src="img">
    </mt-cell>
  </div>
</template>

<script>
  export default {
    name: 'CommonCell',
    props: {
      img: {
        default: null
      },
      title: {
        type: String,
        default: '',
        required: true
      },
      value: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        default: ''
      },
      isLink: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {};
    },
    mounted() {
    },
    methods: {
      clickCell() {
        this.$emit('click-cell');
      }
    }
  };
</script>

<style scoped>
  .cell-img {
    margin-right: 10px;
  }

  .mint-cell {
    border-bottom: 1px solid #e3e3e3;
  }
</style>
