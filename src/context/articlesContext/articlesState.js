import React, { useEffect, useState } from 'react';
import articlesContext from './articlesContext';
import {products} from '../../data/dataStore';
import { getProductsByPrice } from '../../selectors/getProductsByPrice';
import { getProductsByCategory } from '../../selectors/getProductsByCategory';
import { sortProducts } from '../../selectors/sortProducts';

const ArticlesState = ( props ) => {

   

     // Initial Array of Categories 
     const arrayOfCategories = ['People','Illustrations','Art', 'Sunset', 'Wallpapers','Abstract', 'Nature'];
    
     //States
        // State with the array  that it's gonna filtering
        const [productListToFiltering, setProductListToFiltering] = useState([]);
        //State with the array  that it's gonna send to Paginnation
        const [productListToShow, setProductListToshow] = useState([]);
        //State that save the Array with the pagination
        const [displayListArr, setDisplayListArr] = useState([]);
         
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
         //State to save the current page
        const [currentPage, setCurrentPage] = useState(1);
        //State to indicate how many items per page  we need
        // const [itemPerPAge, setItemPerPAge] = useState(6);


    // EndStates------------------------------------------------

    
//Efects
    
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

    // Effect to create the pagination
    useEffect(() => {

        //This get the element where the buttons of pagination ar gonna showing
        const paginationElement = document.querySelector('#pagination');
        const itemPerPage = 6;

        //Return the array per pages.
        function DisplayList (arrayList,itemPerPage,page){
            page--;
            let start = itemPerPage * page;
            let end = start + itemPerPage;
            let paginatedItems = arrayList.slice(start,end);
        return paginatedItems;
        }
        
        //Function to create all the buttons we need 
        function SetupPagination (array, wrapper, rows_per_page) {
            wrapper.innerHTML = "";
            //get the total pages
            let totalPages = Math.ceil(array.length / rows_per_page);
            //for each page makes a button
            for (let i = 1; i < totalPages + 1; i++) {
                let btn = PaginationButton(i);
                wrapper.appendChild(btn);
            }
            if (totalPages === 0) return;
            else if (currentPage > totalPages) setCurrentPage(totalPages);
        }
        
        //Funcition to create the buttons for the pagination
        function PaginationButton (page) {
            //Create a button
            let button = document.createElement('button');
            //Add the conten in this case is a number
            button.innerText = page;
            //Add the active class for the button that matches the current page
            if (currentPage === page) button.classList.add('active');
            //Add the event for the button
            button.addEventListener('click', function () {
                setCurrentPage(page);
            });
        return button;
        }

        //return the Arry with the pagination
       let displayListREturner = DisplayList(productListToShow,itemPerPage,currentPage);
       //Save the pagination on the State
       setDisplayListArr(displayListREturner);
        //Function to create the buttons
       SetupPagination(productListToShow, paginationElement, itemPerPage);


       }, [productListToShow,currentPage]);

    // Effect to change the sorting   
    useEffect(() => {

        if(displayListArr.length === 0)return;
        sortProducts(displayListArr,sortValue,orderList);

    },[displayListArr,sortValue,orderList,checkValues]);
    


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
    // Function to go to the next page
    const btnNext = (itemPerPage)=>{
        let totalPages = Math.ceil(productListToShow.length / itemPerPage);
        if (currentPage === totalPages) return;
        setCurrentPage(currentPage + 1);
    }
    // Function to go to the previous page
    const btnPrevious = ()=>{
        if (currentPage === 1) return;
        setCurrentPage(currentPage - 1);
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
            displayListArr,
            btnNext,
            btnPrevious
         }}
        >
            {props.children}
        </articlesContext.Provider>
    )
}

export default ArticlesState
