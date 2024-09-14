import { configureStore } from "@reduxjs/toolkit";
import trashSlice from "./trash-employee/trash.slice";
import employeeSlice from "./employee/employee.slice";

const store = configureStore({
  reducer: {
    employee: employeeSlice,
    trash: trashSlice,
  },
});
export default store;
