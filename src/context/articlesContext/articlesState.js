import React, { useState } from 'react';
import articlesContext from './articlesContext';

const ArticlesState = ( props ) => {

    // Initial Array of Categories 
    const arrayOfCategories = ['People','Premium','Pets', 'Food', 'Landmarks','Cities', 'Nature'];
    
//States
    //State of Categories' checks    
    const [checkValues, setCheckValues] = useState([]);
   //State to change toggle of Shopping Cart
    const [shopingState, setShopingState] = useState(false);
    //State to change toggle of sortingButton
    const [sortingStatus, setSortingStatus] = useState(true);
    // State of InitialPrice
    const [priceState, setPriceState] = useState('Any Price');

//Functions
    //toggleOfShoppingCart
    const toggleCart = () => {
        if(shopingState)setShopingState(false);
        else setShopingState(true);
    }

    return (
        <articlesContext.Provider
         value={{
            arrayOfCategories,
            checkValues,
            shopingState,
            setCheckValues,
            setShopingState,
            toggleCart,
            setPriceState,
            priceState,
            setSortingStatus,
            sortingStatus,

         }}
        >
            {props.children}
        </articlesContext.Provider>
    )
}

export default ArticlesState
