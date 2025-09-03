import React from 'react'
import '../css/Product.css';
// react-routerden useNavigate hookunu import ettik
// useNavigate sayfalar arası yönlendirme yapmak için kullanılır = NAVIGATION
import { useNavigate } from 'react-router-dom';


// product isminde bir function tanımlıyoruz ve parametre olarak {product} alıyo . yani bu component çağrılırken product propu geliyor.
function Product({ product }) {
    // product ögesini çağırırken içinden destructuring ile id price vb değerleri alıypruz.
    //! destructuring = bir obje veya bir array içinden elemanın alınıp bir değişkene kaydedilmesi
    const { id, price, image, title, description } = product;
   
    const navigate = useNavigate();

    return (
        <div className='card'>
            <img className='image' src={image} alt="" />
            <div>
                <p style={{ textAlign: 'center', height: '50px' }}>{title}</p>
                <h3 style={{ textAlign: 'center' }}>{price}₺</h3>
            </div>

            <div className='flex-row'>
                <button onClick={() => navigate("/product-details/" + id)} className='detail-button'>Detayına İncele</button>
            </div>
        </div>
    )
}

// Bu bileşeni dışa aktarıyorsun. Böylece başka dosyalarda import Product from './Product' diye çağırabilirsin.

export default Product