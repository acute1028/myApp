import { BILL_LIST } from "./mutation-types";

export default {
  [BILL_LIST](state, { billList }) {
    console.log("aaaa" + billList);
    state.billList = billList;
  }
};
