import React from 'react';
import { useContext } from 'react/cjs/react.development';
import articlesContext from '../../context/articlesContext/articlesContext';
import './Product.css';

const ProductCard = ({product}) => {

//access to the context to get the data to be displayed  
const {addProduct,setShopingState} = useContext(articlesContext);
    // const {addProduct} = useContext(articlesContext);

    const newProduct={
        productName:product.name,
        productPrice:product.price,
        productImg:product.image.src,
    };


  const sendProduct = ()=>{
      addProduct(newProduct);
      setShopingState(true);
  }
  

    
    return (
        <>
            <div className="containerProduct flex flex-column">
                <div className="productImgContainer">
                    <div className="productHover">
                        <div className="flex flex-aling-right">
                            <button onClick={sendProduct} className="btnAdd" type="button">ADD TO CART</button>
                        </div>
                    </div>
                    <img loading="lazy" className="imgCover" src={`${product.image.src}`} alt="alt"/>
                    {
                        (product.bestseller)?<div className="bestSeller">Best Seller</div>
                        :null
                    }
                </div>
                <div className="productDescContainer flex flex-column flex-justify-around">
                    <div className="textSubtittle textBold textColorSecondary" >{product.category}</div>
                    <div className="textTittle textBold textColorPrimary">{product.name} </div>
                    <div className="textTittle  textColorSecondary" >${product.price}</div>
                    
                </div>
            </div>
        </>
    )
}

export default ProductCard
