//중앙 데이터 관리소를 설정하는 방법
import { configureStore } from "@reduxjs/toolkit";

import mainReducer from "redux/reducers/mainReducer";

const store = configureStore({
  reducer: { main: mainReducer },
});

export default store;
