import React, { useState } from 'react';
import articlesContext from './articlesContext';

const ArticlesState = ( props ) => {

    // Initial Array of Categories 
    const arrayOfCategories = ['People','Illustrations','Art', 'Sunset', 'Wallpapers','Abstract', 'Nature'];
    
//States
    //State of Categories' checks    
    const [checkValues, setCheckValues] = useState([]);
   //State to change toggle of Shopping Cart
    const [shopingState, setShopingState] = useState(false);
    //State to change toggle of sortingButton
   
    // State of InitialPrice
    const [priceState, setPriceState] = useState('Any Price');
    //State for ScreenSizes Changes
    const [screenSize, setScreenSize] = useState(true);
    //State to change toggle of Filtering
    const [filteringToggle, setFilteringToggle] = useState(false);

//Functions
    //toggleOfShoppingCart
    const toggleCart = () => {
        if(shopingState)setShopingState(false);
        else setShopingState(true);
    }
    //toggleOfShoppingCart
    const toggleFilteringFunc = () => {

        if(filteringToggle)setFilteringToggle(false);
        else setFilteringToggle(true);
    }

    return (
        <articlesContext.Provider
         value={{
            toggleFilteringFunc,
            arrayOfCategories,
            checkValues,
            shopingState,
            setCheckValues,
            setShopingState,
            toggleCart,
            setPriceState,
            priceState,
            screenSize,
            setScreenSize,
            filteringToggle,

         }}
        >
            {props.children}
        </articlesContext.Provider>
    )
}

export default ArticlesState
