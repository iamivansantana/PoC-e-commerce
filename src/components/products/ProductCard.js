import React from 'react';
import './Product.css';

const ProductCard = () => {
    return (
        <>
            <div className="containerProduct flex flex-column">
                <div className="productImgContainer">
                    <div className="productHover">
                        <div className="flex flex-aling-right">
                            <button onClick={()=>{alert('ok')}} className="btnAdd" type="button">ADD TO CART</button>
                        </div>
                    </div>
                    <img className="imgCover" src={`https://cdn.pixabay.com/photo/2021/09/11/15/43/outdoor-6615900_960_720.jpg`} alt="alt"/>
                    <div className="bestSeller">Best Seller</div>
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

export default ProductCard
