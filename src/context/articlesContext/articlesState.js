import React, { useEffect, useState } from 'react';
import articlesContext from './articlesContext';
import {products} from '../../data/dataStore';
import { getProductsByPrice } from '../../selectors/getProductsByPrice';
import { getProductsByCategory } from '../../selectors/getProductsByCategory';
import { sortProducts } from '../../selectors/sortProducts';

const ArticlesState = ( props ) => {

    // State with the array who is gonna showing on the view
    const [productListToFiltering, setProductListToFiltering] = useState([]);
    const [productListToShow, setProductListToshow] = useState([]);


     // Initial Array of Categories 
     const arrayOfCategories = ['People','Illustrations','Art', 'Sunset', 'Wallpapers','Abstract', 'Nature'];
    
     //States
         //State of Categories' checks    
         const [checkValues, setCheckValues] = useState([]);
        //State to change toggle of Shopping Cart
         const [shopingState, setShopingState] = useState(false);
         // State of InitialPrice
         const [priceState, setPriceState] = useState('Any Price');
         //State for ScreenSizes Changes
         const [screenSize, setScreenSize] = useState(true);
         //State to change toggle of Filtering
         const [filteringToggle, setFilteringToggle] = useState(false);
         //State to save the SortingValue
         const [sortValue, setSortValue] = useState('Price');
         //State to save the orderList Value
             //True is for 'Descending' and  false is for 'Ascending';
         const [orderList, setOrderList] = useState(true);


    // EndStates------------------------------------------------

    

    
    //Effect of Category
    useEffect(() => {
        // const productsByCategory = getProductsByCategory(productList,checkValues);
        const productsByCategory = getProductsByCategory(products,checkValues);
        setProductListToFiltering(productsByCategory);
    },[checkValues])


    //Effect of PriceRange
    useEffect(() => {
        if(productListToFiltering.length === 0)return;
        const productsByPrice = getProductsByPrice(productListToFiltering,priceState);
        setProductListToshow(productsByPrice);
    },[priceState,productListToFiltering]);  

    

    
// Effect to change the sorting   
useEffect(() => {
    if(productListToShow.length === 0)return;
    // console.log(productListToShow);

    // const productsSorting = sortProducts(productListToShow,sortValue,orderList);
    sortProducts(productListToShow,sortValue,orderList);


    // setProductListToshow(productsSorting);

    // console.log(productsSorting);

},[productListToShow]);
    





    // ----------------------------------------------


   

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
    //Function to chage the SortingValue
    function handleSortChange(e) {
        setSortValue(e.target.value);
    }
    //Function to chage the orderList Value
    const changeOrderList = ()=>{
        setOrderList(!orderList);
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
            sortValue,
            handleSortChange,
            changeOrderList,

         }}
        >
            {props.children}
        </articlesContext.Provider>
    )
}

export default ArticlesState
