import React from 'react'
import '../css/Header.css';
import { FaShoppingBasket } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import  { useState } from "react";
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setDrawer } from "../redux/slices/basketSlice"; 



function Header() {

    // burda theme ile şu anki tema açıkk mı kapalı mı bu bilgiyi tutuyoruz (true false ile)
    // setTheme ise bu değeri değiştirmek için kullanacağımız fonksiyon oluyo
const [theme,setTheme]=useState(false);
    const dispatch = useDispatch();

const navigate =useNavigate();

const{products}= useSelector((store)=>store.basket)

//  bu değeri değiştirmek için kullanacağımız setTheme fonksiyonunu tanımlıyoruz
// them true ise arka plan rengi siyaz yazı beyaz değilse tersi

const changeTheme = () =>{

    const root = document.getElementById("root");
   
    if(theme){
        root.style.backgroundColor ="black";
        root.style.color="#fff"
    }else{
        root.style.backgroundColor="#fff";
        root.style.color="black"
    }
    //  burda ise setTheme ! ,le değeri tersine çeviriyorsyn
     setTheme(!theme);
}


  return (
    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <div className='flex-row'>
            <img className='logo' src="./src/images/logo.png" alt="" />
            <p className='logo-text'>PARGE A.Ş.</p>
        </div>

        <div className='flex-row'> 
            <input className='search-input' placeholder='bir şeyler arayın ...' type="text" />
          <div >


             {theme ? <MdLightMode className='icon' onClick={changeTheme} /> : <MdDarkMode  className='icon' onClick={changeTheme}/>  }
            {/* <MdDarkMode  className='icon'/>  şimdi burası dark mode içinn kullanılacak o yüzden moon ve lamp arasında geçiş olacak*/ }
            
            
                 <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
                <FaShoppingBasket style={{marginRight:'5px'}} className='icon' />                </Badge>  
           </div>
            

        </div>
    </div>
  )
}

export default Header