<template>
  <footer class="footer_guide border-1px">
    <div
      class="guide_item"
      @click="goto('/home')"
      :class="{ on: isCurrent('/home') }"
    >
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>ホーム</span>
    </div>
    <div
      class="guide_item"
      @click="goto('/bill')"
      :class="{ on: isCurrent('/bill') }"
    >
      <span class="item_icon">
        <i class="iconfont icon-bill"></i>
      </span>
      <span>家計簿</span>
    </div>
    <div
      class="guide_item"
      @click="goto('/period')"
      :class="{ on: isCurrent('/period') }"
    >
      <span class="item_icon">
        <i class="iconfont icon-shenglijiankang"></i>
      </span>
      <span>生理管理</span>
    </div>
    <div
      class="guide_item"
      @click="goto('/profile')"
      :class="{ on: isCurrent('/profile') }"
    >
      <span class="item_icon">
        <i class="iconfont icon-ren"></i>
      </span>
      <span>プロファイル</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterGuide",
  data() {
    return {};
  },
  methods: {
    goto(path) {
      this.$router.replace(path);
    },
    isCurrent(path) {
      return this.$route.path === path;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../assets/stylus/mixins.styl"
.footer_guide
  top-border-1px(#e4e4e4)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex
  .guide_item
    display flex
    flex 1 1 auto
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
    &.on
      color #02a774
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px
</style>
