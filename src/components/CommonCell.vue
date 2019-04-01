<template>
  <div @click="clickCell">
    <mt-cell :title="title" :label="label" :value="value" :is-link="isLink"></mt-cell>
  </div>
  <!-- href="/message"-->
</template>

<script>
export default {
  name: 'CommonCell',
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    isLink: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    clickCell() {
      this.$emit('click-cell');
    },
  },
};
</script>

<style scoped>

</style>
