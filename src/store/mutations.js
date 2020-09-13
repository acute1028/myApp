import { BILL_LIST } from "./mutation-types";

export default {
  [BILL_LIST](state, { billList }) {
    state.billList = billList;
  }
};
