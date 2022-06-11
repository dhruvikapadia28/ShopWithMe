import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    total: 0 ,
  },
  reducers: {
    addItemCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      // total = (existingItem.quantity)*(existingItem.price);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          name: newItem.name,
        });
        state.total+= newItem.price;
      } else {
        existingItem.quantity++;
        state.total+= newItem.price;
      }
    },
    removerItemFromCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity=state.totalQuantity--;
      state.total= state.total - newItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== newItem.id);
      } else {
        existingItem.quantity--;
      }
    },
    emptyCart(state){
        state.items=[];
        state.totalQuantity=0;
        state.total=0;
    }
  },
});


export const cartActions = cartSlice.actions;

export default cartSlice;
