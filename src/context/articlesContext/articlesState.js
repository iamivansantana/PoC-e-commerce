import React, { useState } from 'react';
import articlesContext from './articlesContext';

const ArticlesState = ( props ) => {

    //States
    const [shopingState, setShopingState] = useState(false);

    //Functions

    //toggleOfShoppingCart
    const toggleCart = () => {
        if(shopingState)setShopingState(false);
        else setShopingState(true);
    }

    return (
        <articlesContext.Provider
         value={{
            shopingState,
            setShopingState,
            toggleCart

         }}
        >
            {props.children}
        </articlesContext.Provider>
    )
}

export default ArticlesState
