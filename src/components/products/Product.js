import React from 'react';
import './Product.css';

const Product = () => {
    return (
        <>
            <div className="containerProduct flex flex-column">
                <div className="productImgContainer">
                    <div className="productHover">
                        <div className="flex flex-aling-right">
                            <button className="btnAdd" type="button">ADD TO CART</button>
                        </div>
                    </div>
                    <img className="imgCover" src="\assets\e-commerce\perritoGrande.png" alt="alt"/>
                </div>
                <div className="productDescContainer flex flex-column flex-justify-around">
                    <div className="textSubtittle textBold textColorSecondary" >Food</div>
                    <div className="textTittle textBold textColorPrimary">Samurai King Resting </div>
                    <div className="textTittle  textColorSecondary" >$93.89</div>
                    
                </div>
            </div>
        </>
    )
}

export default Product
