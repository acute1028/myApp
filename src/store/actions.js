import { BILL_LIST } from "./mutation-types";

export default {
  getBillList({ commit }) {
    const billList = [
      {
        date: "2020/1/1",
        type: "スーパー",
        income: "0",
        spend: "1500",
        memo: "業務スーパー"
      },
      {
        date: "2020/1/1",
        type: "給与",
        income: "150000",
        spend: "0",
        memo: "ボーナス"
      },
      {
        date: "2020/1/1",
        type: "スーパー",
        income: "0",
        spend: "1500",
        memo: "業務スーパー"
      },
      {
        date: "2020/1/1",
        type: "給与",
        income: "150000",
        spend: "0",
        memo: "ボーナス"
      }
    ];
    commit(BILL_LIST, { billList });
  }
};
