<template>
  <div id="list">
    <ul class="th">
      <li>日付</li>
      <li>分類</li>
      <li>収入</li>
      <li>支出</li>
      <li>備考</li>
    </ul>
    <ul v-for="(bill, index) in currentList" :key="index" class="td">
      <li>{{ bill.date }}</li>
      <li>{{ bill.type }}</li>
      <li>{{ bill.income }}</li>
      <li>{{ bill.spend }}</li>
      <li>{{ bill.memo }}</li>
    </ul>
    <van-pagination
      v-model="currentPage"
      :total-items="this.billList.length"
      :items-per-page="10"
      :show-page-size="5"
      :force-ellipses="true"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    ...mapState(["billList"]),
    currentList: function() {
      return this.billList.slice(
        (this.currentPage - 1) * 10,
        this.currentPage * 10
      );
    }
  },
  methods: {}
};
</script>

<style lang="less" scoped>
ul {
  display: flex;
  padding: 0px;
  line-height: 20px;
  li {
    display: block;
    width: 20%;
    flex: 1 1 auto;
    border: 1px solid #ddd;
  }
  &.th {
    background: #3cb371;
    font-weight: bold;
    border-top: 1px;
  }
  &.td:nth-child(odd) {
    background: #f0fff0;
  }
}
</style>
