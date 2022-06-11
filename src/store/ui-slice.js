import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { itemIsVisible:true , orderIsVisible:false },
  reducers: {
   itemShow(state){
      state.itemIsVisible = true;
      state.orderIsVisible = false;
   },
   orderShow(state){
    state.itemIsVisible = false;
    state.orderIsVisible = true;
}
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;