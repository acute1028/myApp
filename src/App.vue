<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from "@/components/FooterGuide/FooterGuide.vue";
export default {
  name: "App",
  components: { FooterGuide },
  mounted() {},
  methods: {}
};
</script>

<style lang="stylus" rel="stylesheet/stylus"></style>
