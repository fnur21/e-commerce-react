// normalde useState ile sepetteki ürünlri tutabilirsin am asayfa her f5 olduğunda bu değer sıfıranır o yüzden biz localStorage(tarayıcı kapansa bir veriler saklanır) veya sessionStorage (sayfa kapanınca veriler gider)kullanırız 

import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    product:getBasketFromStorage(),


}

const writeFromBasketToStorage =(basket)=>{
localStorage.setItrem("basket", JSON.stringify(basket))
}

const getBasketFromStorage = ()=>{
    if(localStorage.getItem("basket")){
        return JSON.parse(localStorage.getItem("basket"));
    }
    return[];
}

export const basketSlice =createSlice({
    name:"basket",
    initialState,
    reducer: {
  addToBasket: (state,action )=> {

const findProduct= product &&productSlice.find((product) => product.id === action.payload.id);
    
if (findProduct) {
    
}else{
    state.product =[...state.product, action.payload];
    writeFromBasketToStorage(state.product);
}
  }
    }
})

export const { }= basketSlice.actions

export default basketSlice.reducer