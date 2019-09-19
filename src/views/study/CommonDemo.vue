<template>
  <div>
    <common-cell title="分类" @click-cell="clickCell('Category')"></common-cell>
    <common-cell title="better-scroll" @click-cell="clickCell('Scroll')"></common-cell>
  </div>
</template>

<script>
  import CommonCell from '../../components/CommonCell';

  export default {
    name: 'CommonDemo',
    components: { CommonCell },
    methods: {
      clickCell(name) {
        this.$router.push({
          name
        });
      }
    }
  };
</script>

<style scoped>

</style>
