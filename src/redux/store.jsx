//  önce redux dosyamızdan bir srıre.jsx dosyası açtık .
//  daha sonra provider componenti ile appi sarmalamamız gerekiyor store a erişebilmemiz için

import { configureStore } from '@reduxjs/toolkit'

import appReducer from '../redux/slices/appSlice';
import productReducter from '../redux/slices/productSlice';
import basketReducer from '../redux/slices/basketSlice';

export const store = configureStore({
  reducer: {
   app:appReducer,
   product :productReducter,
   basket :basketReducer
  },
})

