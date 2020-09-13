<template>
  <div id="bill">
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
  methods: {
    toggle(i, v) {
      this.active = i;
      this.currentView = v;
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
ul{
  display:flex;
  border-top:2px solid #bfc;
}
ul li{
  height:40px;
  background: #fff;
  border-right:2px solid #bfc;
  display: inline-flex;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
  cursor:pointer;
}
ul li.active{
 background:#bfc;
}
</style>
