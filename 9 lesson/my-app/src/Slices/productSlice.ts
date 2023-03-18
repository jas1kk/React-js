import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "../types";

interface IInitState{
    changeId: number | null
    products: IProducts[]
}

const initialState = {
    changeId: null,
    products: [{
        id: 1,
        productName: "Bread",
        productAmount: 20,
        productPrice: 200,
      },
      {
        id: 2,
        productName: "Milk",
        productAmount: 10,
        productPrice: 400,
      },
      {
        id: 3,
        productName: "Eggs",
        productAmount: 5,
        productPrice: 1000,
      },
      {
        id: 4,
        productName: "Water",
        productAmount: 20,
        productPrice: 100,
      }]
}  as IInitState;

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push({...action.payload, id: state.products.length + Math.random()});
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
        state.products = state.products.filter((product) => product.id !== action.payload)
    },
    EditOneProduct: (state, action: PayloadAction<IProducts>) => {
        const productIdx = state.products.findIndex((product) => product.id === action.payload.id)
        const before = state.products.slice(0, productIdx);
        const after = state.products.slice(productIdx + 1)
        console.log(action.payload)
        state.products = [...before, action.payload, ...after]
    },
    setChangeId: (state, action) =>{
        state.changeId = action.payload
    },
    unSetChangeId: (state) =>{
        state.changeId = null
    }
  },
});

export const { addProduct, deleteProduct, EditOneProduct, setChangeId, unSetChangeId } = productSlice.actions;
export default productSlice.reducer;
