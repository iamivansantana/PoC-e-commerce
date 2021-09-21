import React from 'react';
import './Product.css';

const ProductCard = ({product}) => {
    
    return (
        <>
            <div className="containerProduct flex flex-column">
                <div className="productImgContainer">
                    <div className="productHover">
                        <div className="flex flex-aling-right">
                            <button onClick={()=>{alert('ok')}} className="btnAdd" type="button">ADD TO CART</button>
                        </div>
                    </div>
                    <img className="imgCover" src={`${product.image.src}`} alt="alt"/>
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
