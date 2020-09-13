<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <span class="item_icon">
          <i class="iconfont icon-shouye"></i>
        </span>
        <span>ホーム</span>
      </mt-tab-item>
      <mt-tab-item id="bill">
        <span class="item_icon">
          <i class="iconfont icon-bill"></i>
        </span>
        <span>家計簿</span>
      </mt-tab-item>
      <mt-tab-item id="period">
        <span class="item_icon">
          <i class="iconfont icon-shenglijiankang"></i>
        </span>
        <span>生理管理</span>
      </mt-tab-item>
      <mt-tab-item id="profile">
        <span class="item_icon">
          <i class="iconfont icon-ren"></i>
        </span>
        <span>プロファイル</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: this.$route.path.replace("/", "")
    };
  },
  watch: {
    selected: function(val) {
      switch (val) {
        case "home":
          this.$router.replace("/home");
          break;
        case "bill":
          this.$router.replace("/bill");
          break;
        case "period":
          this.$router.replace("/period");
          break;
        case "profile":
          this.$router.replace("/profile");
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.mint-tabbar {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
  .mint-tab-item {
    flex: 1 1 auto;
    color: #999999;
    &.is-selected {
      color: #02a774;
    }
    span {
      display: block;
      font-size: 12px;
      margin-top: 2px;
      margin-bottom: 2px;
      .iconfont {
        font-size: 22px;
      }
    }
  }
}
</style>
