<template>
  <div>
    <mt-index-list>
      <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
        <mt-cell title="Apple"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Caldwin"></mt-cell>
        <mt-cell title="Craden"></mt-cell>
        <mt-cell title="Crash"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
        <mt-cell title="Zone"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
export default {
  name: 'Find',
};
</script>

<style scoped lang="scss">
  .mint-indexlist {
    & /deep/ {
      .mint-indexlist-nav {
        border-left: 0;
        background-color: transparent;
      }
    }

  }
</style>
