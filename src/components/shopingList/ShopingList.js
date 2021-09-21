import React, { useContext } from 'react';
import articlesContext from '../../context/articlesContext/articlesContext';
import './ShopingList.css';

const ShopingList = () => {

    //Context of Articles
    const { toggleCart} = useContext(articlesContext);





    return (
        <>
            <div className="containerListShoping">
                <div style={{padding:'1rem'}} className="flex flex-column flex-center">
                    <div className="closeList flex flex-justify-right flex-aling-center">
                        <button  onClick={toggleCart} className="btn btnCloseListStyles"><img  width="20px" height='20px'  src="\assets\e-commerce\icons\closeIcon.svg" alt="btnClose" /></button>
                    </div>
                    <div className="listShoping flex flex-column flex-aling-center">

                        <div className="flex shopingItemStyles flex-justify-between">
                            <div className="shopingItemDescription flex flex-column flex-justify-center" >
                                <div className="shopingItemDescriptionTittle">Samurai King Resting</div>
                                <div className="shopingItemDescriptionPrice">$10000.00</div>
                            </div>
                            <div className="flex shopingItemImage">
                                <img loading="lazy" src={`https://cdn.pixabay.com/photo/2021/09/11/15/43/outdoor-6615900_960_720.jpg`} alt="imgProduct" />
                            </div>
                        </div>
                        <div className="flex shopingItemStyles flex-justify-between">
                            <div className="shopingItemDescription flex flex-column flex-justify-center" >
                                <div className="shopingItemDescriptionTittle">Samurai King Resting</div>
                                <div className="shopingItemDescriptionPrice">$10000.00</div>
                            </div>
                            <div className="flex shopingItemImage">
                                <img loading="lazy" src={`https://cdn.pixabay.com/photo/2021/09/11/15/43/outdoor-6615900_960_720.jpg`} alt="imgProduct" />
                            </div>
                        </div>
                        <div className="flex shopingItemStyles flex-justify-between">
                            <div className="shopingItemDescription flex flex-column flex-justify-center" >
                                <div className="shopingItemDescriptionTittle">Samurai King Resting</div>
                                <div className="shopingItemDescriptionPrice">$10000.00</div>
                            </div>
                            <div className="flex shopingItemImage">
                                <img loading="lazy" src={`https://cdn.pixabay.com/photo/2021/09/11/15/43/outdoor-6615900_960_720.jpg`} alt="imgProduct" />
                            </div>
                        </div>
                        <div className="flex shopingItemStyles flex-justify-between">
                            <div className="shopingItemDescription flex flex-column flex-justify-center" >
                                <div className="shopingItemDescriptionTittle">Samurai King Resting</div>
                                <div className="shopingItemDescriptionPrice">$10000.00</div>
                            </div>
                            <div className="flex shopingItemImage">
                                <img loading="lazy" src={`https://cdn.pixabay.com/photo/2021/09/11/15/43/outdoor-6615900_960_720.jpg`} alt="imgProduct" />
                            </div>
                        </div>
                        
                        
                    </div>
                    <button className="btn btnClearStyles" type="button">CLEAR</button>
                </div>
            </div>  
        </>
    )
}

export default ShopingList
