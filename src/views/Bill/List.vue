<template>
  <div id="list">
    <div class="form">
      <van-field
        lable="収入"
        readonly
        clickable
        name="billDate"
        :value="billDate"
        placeholder="日付"
        @click="showCalendar = true"
      />
      <van-calendar
        v-model="showCalendar"
        @confirm="onConfirm"
        :show-confirm="false"
      />
      <van-dropdown-menu>
        <van-dropdown-item v-model="type" :options="typeOptions" />
      </van-dropdown-menu>
      <van-field v-model="income" type="number" placeholder="収入" />
      <van-field v-model="spend" type="number" placeholder="支出" />
      <van-field v-model="memo" type="text" placeholder="備考" />
      <van-button round block type="primary" size="normal" @click="onSubmit">
        保存
      </van-button>
    </div>
    <div id="billList">
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
  </div>
</template>

<script>
import { mapState } from "vuex";
import format from "date-fns/format";
export default {
  data() {
    return {
      billDate: "",
      showCalendar: false,
      type: 0,
      typeOptions: [
        { text: "なし", value: 0 },
        { text: "スーパー", value: 1 },
        { text: "食事", value: 2 },
        { text: "給料", value: 3 },
        { text: "その他", value: 99 }
      ],
      income: "",
      spend: "",
      memo: "",
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
  methods: {
    onConfirm(date) {
      this.billDate = format(date, "yyyy-MM-dd");
      this.showCalendar = false;
    },
    onSubmit() {
      console.log("submit", this.spend);
    }
  }
};
</script>

<style lang="less" scoped>
.form {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .section {
    width: 50%;
  }
  .van-cell {
    width: 50%;
  }
  .van-button--block {
    width: 50%;
  }
}
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
    margin-top: 10px;
  }
  &.td:nth-child(odd) {
    background: #f0fff0;
  }
}
</style>
