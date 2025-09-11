import React, { useState } from 'react';
import '../css/Header.css';
import { FaShoppingBasket } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Badge from '@mui/material/Badge';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setDrawer } from "../redux/slices/basketSlice"; 
import { FaHome, FaSignInAlt } from "react-icons/fa"; // ikonlar

function Header() {

    // Tema durumu: true = dark mode, false = light mode
    const [theme, setTheme] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { products } = useSelector((store) => store.basket);

    // Tema değiştirme fonksiyonu
    const changeTheme = () => {
        const root = document.getElementById("root");
        if(theme){
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
        } else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black";
        }
        setTheme(!theme);
    }

    return (
        <div className="header-container" style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:'10px 20px'}}>
            
            {/* Logo ve Başlık */}
            <div className='flex-row'>
                <img className='logo' src="./src/images/logo.png" alt="Logo" />
                <p className='logo-text'>PARGE A.Ş.</p>
            </div>

            {/* Menü & Arama & Sepet */}
            <div className='flex-row' style={{alignItems:'center', gap:'20px'}}>
                
            {/* React Router Linkleri */}
<div className="nav-links" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
  <Link to="/" className="link">
    <FaHome style={{ marginRight: '6px' }} /> Ana Sayfa
  </Link>
  <Link to="/auth" className="link">
    <FaSignInAlt style={{ marginRight: '6px' }} /> Giriş
  </Link>
</div>
                {/* Arama Input */}
                <input className='search-input' placeholder='Bir şeyler arayın ...' type="text" />

                {/* Tema ve Sepet */}
                <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
                    {theme ? 
                        <MdLightMode className='icon' onClick={changeTheme} /> 
                        : 
                        <MdDarkMode className='icon' onClick={changeTheme} />
                    }

                    <Badge 
                        onClick={() => dispatch(setDrawer())} 
                        badgeContent={products.length} 
                        color="error"
                    >
                        <FaShoppingBasket className='icon' />  
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default Header;
