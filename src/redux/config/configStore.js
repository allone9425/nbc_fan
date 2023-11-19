//중앙 데이터 관리소를 설정하는 방법
import { configureStore } from "@reduxjs/toolkit";
import letterReducer from "redux/reducers/letterReducer";
import selectMemberReducer from "redux/reducers/selectMemberReducer";

const store = configureStore({
  reducer: {
    letter: letterReducer,
    selectMember: selectMemberReducer,
  },
});

export default store;
