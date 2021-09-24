import React, { useContext, useEffect, useState } from 'react';
import './Product.css';
import ProductCard from './ProductCard';
import articlesContext from '../../context/articlesContext/articlesContext';
import { sortProducts } from '../../selectors/sortProducts';

const ProductList = () => {
	const { productListToShow, sortValue, orderList } =
		useContext(articlesContext);

	//State that save the Array with the pagination
	const [displayListArr, setDisplayListArr] = useState([]);
	//State to save the current page
	const [currentPage, setCurrentPage] = useState(1);

	//variables & Constantes
	const itemPerPage = 6;
	const totalPages = Math.ceil(productListToShow.length / itemPerPage);

	// Effect to change the sorting
	useEffect(() => {
		if (productListToShow.length === 0) return;
		sortProducts(productListToShow, sortValue, orderList);
	}, [productListToShow, orderList, sortValue]);

	// Effect to create the pagination
	useEffect(() => {
		if (productListToShow.length === 0) return;

		//This get the element where the buttons of pagination ar gonna showing
		const paginationElement = document.querySelector('#pagination');

		//Return the array per pages.
		function DisplayList(arrayList, itemPerPage, page) {
			page--;
			const start = itemPerPage * page;
			const end = start + itemPerPage;
			const paginatedItems = arrayList.slice(start, end);
			return paginatedItems;
		}

		//Function to create all the buttons we need
		function SetupPagination(array, wrapper, rows_per_page) {
			wrapper.innerHTML = '';
			//get the total pages
			const totalPages = Math.ceil(array.length / rows_per_page);
			//for each page makes a button
			for (let i = 1; i < totalPages + 1; i++) {
				const btn = PaginationButton(i);
				wrapper.appendChild(btn);
			}
			if (totalPages === 0) return;
			else if (currentPage > totalPages) setCurrentPage(totalPages);
		}

		//Funcition to create the buttons for the pagination
		function PaginationButton(page) {
			//Create a button
			const button = document.createElement('button');
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
		const displayListREturner = DisplayList(
			productListToShow,
			itemPerPage,
			currentPage
		);

		//Save the pagination on the State
		setDisplayListArr(displayListREturner);
		//Function to create the buttons
		SetupPagination(productListToShow, paginationElement, itemPerPage);
	}, [productListToShow, currentPage, sortValue, orderList]);

	//Functions
	// Function to go to the next page (Button)
	const btnNext = (itemPerPage) => {
		const totalPages = Math.ceil(productListToShow.length / itemPerPage);
		if (currentPage === totalPages) return;
		setCurrentPage(currentPage + 1);
	};
	// Function to go to the previous page(Button)
	const btnPrevious = () => {
		if (currentPage === 1) return;
		setCurrentPage(currentPage - 1);
	};

	return (
		<>
			<div className='containerList'>
				<div className='containerListGrid'>
					{displayListArr.map((product) => (
						<div
							key={product.name}
							className='flex flex-aling-center flex-justify-center'
						>
							<ProductCard product={product} />
						</div>
					))}
				</div>
				{/* The pagination is shown here */}
				<div className='flex flex-justify-center flex-aling-center paginationStyles'>
					{currentPage !== 1 ? (
						<button
							onClick={btnPrevious}
							type='button'
							className='btn btn-hover textTittle textBold'
						>
							&lt;
						</button>
					) : null}

					<div className='pagenumbers' id='pagination'>
						{' '}
					</div>
					{currentPage !== totalPages ? (
						<button onClick={btnNext} className='btn btn-hover textTittle textBold'>
							&gt;
						</button>
					) : null}
				</div>
			</div>
		</>
	);
};

export default ProductList;
