import {ProductModel,ProductArrayModel} from "../models/redux-models";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialProductState:ProductArrayModel={
    all_products:[],
    particular_product:{    
       
        "id": 0,
        "title": "",
        "price":0,
        "image": "",
        "category": "",
        "rating" : {
            rate: 0
        }
        
    }
}

const productSlice=createSlice({
    name:'product',
    initialState:initialProductState,
    reducers:{
        setProducts(state,action:PayloadAction<ProductModel[]>){
            state.all_products=action.payload;
        },
        setParticularProduct(state,action:PayloadAction<ProductModel>){
            state.particular_product=action.payload;
        }
    }
})
export default productSlice;