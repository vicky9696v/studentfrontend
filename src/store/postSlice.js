import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./actions";
// import { leadership } from './postSlice';

const initialState = {
  leader_board :  [],
};
const slice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    datareceived: (state, action) =>{
      state.leader_board = action.payload;
    },
    leaders: (state, action) =>{
      state.leader_board = action.payload;
    },
  },
});
export const {
  datareceived,
  leaders,
} = slice.actions;


export const studentform = (data) =>
  actions.apicallbegan({
    method: "POST",
    url: "/student/",  
    data,
    onSuccess: datareceived.type,
  });
  export const leadership = () =>
  actions.apicallbegan({
    method: "GET",
    url: "/student/",  
    // data,
    onSuccess: leaders.type,
  });
export default slice.reducer;
