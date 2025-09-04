import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slices/productSlice';
import  '../css/ProductDetails.css';
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";
import { useState } from 'react';
import { addToBasket, calculateBasket } from "../redux/slices/basketSlice";

function ProductDetails() {

// useParams urlden bir değer okumamız gerekiyorsa mesela ürünün idsi gibi onu çokumak için useParams parametresini kullanırsın
    const {id} = useParams();

const {products , selectedProduct} = useSelector((store) =>store.product)
 const { price, image, title, description } = selectedProduct;

const [count,setCount]=useState(0);


const dispatch=useDispatch();


const increment =()=>{
  setCount (count + 1)
}
// setCount(prev)=>(prev+1) burda prev önceki değeri demek

const decrement = () => {
        setCount(count - 1)
    }

const addBasket =()=>{
  const payload ={
    id,
    price,
    image,
    title,
    description,
    count
  }


  dispatch(addToBasket(payload))
    dispatch(calculateBasket());
}


    useEffect(() => {
getProductById();
 },[])

    const getProductById =()=>{
products && products.map((product)=>{
  if (product.id==id) {
    dispatch(setSelectedProduct(product));
  }
}
)
    }
  return (
<div className="product-details">
  <div className="product-image">
    <img src={image} alt={title}/>
  </div>
  <div className="product-info">
    <h1>{title}</h1>
    <p>{description}</p>
    <h2>{price} $</h2>
     <div className='product-number'>
    < FaCirclePlus onClick={increment}/>
    <span>{count}</span>
    <FaMinusCircle onClick={decrement} />
  </div>

  <div>
<button  onClick={addBasket} className='basket-button'>sepete ekle</button>
  </div>

  </div>

 
</div>
  )
}

export default ProductDetails