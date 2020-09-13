<template>
  <div id="bill">
    <h1>家計簿</h1>
    <mt-navbar v-model="selected">
      <mt-tab-item id="all">全て</mt-tab-item>
      <mt-tab-item id="day">日計</mt-tab-item>
      <mt-tab-item id="month">月計</mt-tab-item>
      <mt-tab-item id="year">年計</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="all">
        <All></All>
      </mt-tab-container-item>
      <mt-tab-container-item id="day">
        <Day></Day>
      </mt-tab-container-item>
      <mt-tab-container-item id="month">
        <Month></Month>
      </mt-tab-container-item>
      <mt-tab-container-item id="year">
        <Year></Year>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import All from "./All.vue";
import Day from "./Day.vue";
import Month from "./Month.vue";
import Year from "./Year.vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      selected: "all"
    };
  },
  components: {
    All,
    Day,
    Month,
    Year
  },
  mounted() {
    this.getBillList();
  },
  methods: {
    ...mapActions(["getBillList"])
  }
};
</script>

<style lang="less" scoped>
h1 {
  margin: 5px 0 0 5px;
}
.mint-navbar {
  margin-bottom: 15px;
  .mint-tab-item {
    flex: 1 1 auto;
    color: #999999;
    &.is-selected {
      color: #02a774;
      border-bottom: 3px solid #02a774;
    }
  }
}
</style>
