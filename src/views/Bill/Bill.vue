<template>
  <div id="bill">
    <h1>家計簿</h1>
    <ul>
      <li
        :key="index"
        v-for="(tab, index) in tabs"
        @click="toggle(index, tab.view)"
        :class="{ active: active == index }"
      >
        {{ tab.type }}
      </li>
    </ul>
    <component :is="currentView"></component>
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
      active: 0,
      currentView: "All",
      tabs: [
        {
          type: "All",
          view: "All"
        },
        {
          type: "Day",
          view: "Day"
        },
        {
          type: "Month",
          view: "Month"
        },
        {
          type: "Year",
          view: "Year"
        }
      ]
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
    ...mapActions(["getBillList"]),
    toggle(i, v) {
      this.active = i;
      this.currentView = v;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
ul
  display flex
  border-top 2px solid #ddd
ul li
  height:40px
  background #fff
  border-right 2px solid #ddd
  display inline-flex
  flex 1 0 auto
  justify-content center
  align-items center
ul li.active
 background #bfc
</style>
