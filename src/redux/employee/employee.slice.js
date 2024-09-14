import { createSlice } from "@reduxjs/toolkit";
import SAMPLE_DATA from "../../../data.sample";
const INIT_STATE = {
  list: SAMPLE_DATA, //goc
  filterList: SAMPLE_DATA,
};
const employeeSlice = createSlice({
  name: "employee",
  initialState: INIT_STATE,
  reducers: {
    addEmployee: (state, action) => {
      const { payload } = action;
      payload.id = state.list.length + 1;
      state.list.push(payload);
      state.filterList.push(payload);
    },
    updateEmployee: (state, action) => {
      const { payload } = action;

      const target = state.list.find((item) => item.id === payload.id);
      if (target) {
        Object.assign(target, payload);
      }

      const filterTarget = state.filterList.find(
        (item) => item.id === payload.id
      );
      if (filterTarget) {
        Object.assign(filterTarget, payload);
      }
    },
    searchEmployee: (state, action) => {
      const { payload } = action;
      // đưa được giá trị mà người dùng nhập vào func này, sau đó thực hiện func timf kiếm dựa trện giá trị người  dùng
      state.filterList = state.list.filter((item) =>
        item.name.toLowerCase().includes(payload.toLowerCase())
      );
    },
    deleteEmployee: (state, action) => {
      const { payload } = action;
      state.list = state.list.filter((item) => item.id !== payload.id);
      state.filterList = state.filterList.filter(
        (item) => item.id !== payload.id
      );
    },
  },
});
export const { addEmployee, updateEmployee, searchEmployee, deleteEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;
