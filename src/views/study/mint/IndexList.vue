<template>
  <div class="wrapper">
    <mt-header fixed title="index List">
      <mt-button icon="back" slot="left" @click="back">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="content-style">
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
  </div>
</template>

<script>
  import CommonCell from '../../../components/CommonCell';

  export default {
    name: 'IndexList',
    components: { CommonCell },
    methods: {
      back() {
        this.$router.goBack();
      }
    }
  };
</script>

<style scoped lang="scss">
  .wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: scroll;
    .content-style {
      margin-top: 40px;
      height: calc(100% - 40px);
    }
  }

  .mint-indexlist {
    & /deep/ {
      .mint-indexlist-nav {
        border-left: 0;
        background-color: transparent;
      }
    }
  }
</style>
