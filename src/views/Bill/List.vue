<template>
  <div id="list">
    <ul>
      <li class="header">
        <span>日付</span>
        <span>分類</span>
        <span>収入</span>
        <span>支出</span>
        <span>備考</span>
      </li>
    </ul>
    <ul v-for="(bill, index) in billList" :key="index" class="billList">
      <li>
        <span>{{ bill.date }}</span>
        <span>{{ bill.type }}</span>
        <span>{{ bill.income }}</span>
        <span>{{ bill.spend }}</span>
        <span>{{ bill.memo }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["billList"])
  },
  methods: {}
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#list
  margin-top 10px
ul li
  display list-item
  span
    width 20%
    height 100%
    border 0.5px solid #ddd
li.header
  background #bfc
ul.billList:nth-child(odd)
  li
    background #ddd
</style>
