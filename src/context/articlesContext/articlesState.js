import React, { useEffect, useReducer, useState } from 'react';
import articlesContext from './articlesContext';
import { products } from '../../data/dataStore';
import { getProductsByPrice } from '../../selectors/getProductsByPrice';
import { getProductsByCategory } from '../../selectors/getProductsByCategory';
import articlesReducer from './articlesReducer';
import { types } from '../../types/types';

//init is used by useReducer as the initial state.
const init = () => {
	//it returns the content stored in the localStorage and if it does not exist it returns "{logged: false}"
	return JSON.parse(localStorage.getItem('Cart')) || [];
};

const ArticlesState = (props) => {
	const [cart, dispatch] = useReducer(articlesReducer, [], init);

	//effect that changes the content in localStorage every time the cart changes
	useEffect(() => {
		localStorage.setItem('Cart', JSON.stringify(cart));
	}, [cart]);

	// Initial Array of Categories
	const arrayOfCategories = [
		'People',
		'Illustrations',
		'Art',
		'Sunset',
		'Wallpapers',
		'Abstract',
		'Nature',
	];

	//States
	// State with the array  that it's gonna filtering
	const [productListToFiltering, setProductListToFiltering] = useState([]);
	//State with the array  that it's gonna send to Paginnation
	const [productListToShow, setProductListToshow] = useState([]);

	//State to change toggle of Filtering
	const [filteringToggle, setFilteringToggle] = useState(false);
	//State to change toggle of Shopping Cart
	const [shopingState, setShopingState] = useState(false);
	//State of Categories' checks
	const [checkValues, setCheckValues] = useState([]);
	// State of InitialPrice
	const [priceState, setPriceState] = useState('Any Price');
	//State for ScreenSizes Changes
	const [screenSize, setScreenSize] = useState(true);
	//State to save the SortingValue
	const [sortValue, setSortValue] = useState('Price');
	//State to save the orderList Value
	//True is for 'Descending' and  false is for 'Ascending';
	const [orderList, setOrderList] = useState(true);

	//State to indicate how many items per page  we need
	// const [itemPerPAge, setItemPerPAge] = useState(6);

	// EndStates------------------------------------------------

	//Efects
	//Effect of Category
	useEffect(() => {
		// const productsByCategory = getProductsByCategory(productList,checkValues);
		const productsByCategory = getProductsByCategory(products, checkValues);
		setProductListToFiltering(productsByCategory);
	}, [checkValues]);

	//Effect of PriceRange
	useEffect(() => {
		if (productListToFiltering.length === 0) return;
		const productsByPrice = getProductsByPrice(
			productListToFiltering,
			priceState
		);
		setProductListToshow(productsByPrice);
	}, [priceState, productListToFiltering]);

	// ----------------------------------------------

	//Functions
	//toggleOfShoppingCart
	const toggleCart = () => {
		if (shopingState) setShopingState(false);
		else setShopingState(true);
	};
	//toggleOfShoppingCart
	const toggleFilteringFunc = () => {
		if (filteringToggle) setFilteringToggle(false);
		else setFilteringToggle(true);
	};
	//Function to chage the SortingValue
	function handleSortChange(e) {
		setSortValue(e.target.value);
	}
	//Function to chage the orderList Value
	const changeOrderList = () => {
		setOrderList(!orderList);
	};

	//Functions to chage Reducer
	//Add a proct to the cart
	const addProduct = (newArticle) => {
		dispatch({
			type: types.addShoppingCart,
			payload: newArticle,
		});
	};
	//clean all the list
	const cleanList = () => {
		dispatch({
			type: types.cleanShoppingCart,
		});
	};

	return (
		<articlesContext.Provider
			value={{
				productListToShow,
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
				orderList,
				handleSortChange,
				changeOrderList,
				addProduct,
				cleanList,
				cart,
			}}
		>
			{props.children}
		</articlesContext.Provider>
	);
};

export default ArticlesState;
