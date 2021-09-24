import React, { useContext, useEffect } from 'react';
import articlesContext from '../../context/articlesContext/articlesContext';
import Filtering from '../filtering/Filtering';
import ProductList from '../products/ProductList';
import './Catalogue.css';

const Catalogue = () => {
	//Access to Context
	//Destructuring from context
	const {
		screenSize,
		setScreenSize,
		toggleFilteringFunc,
		handleSortChange,
		sortValue,
		changeOrderList,
	} = useContext(articlesContext);

	//HERE I NEED TO PUT THE STATE ON A LOCAL WAY
	//Effect that hears when the screen size changes;
	useEffect(() => {
		//Condition to do the changes
		function isSmallScreen() {
			return window.matchMedia('(max-width: 876px)').matches;
		}
		setScreenSize(isSmallScreen());

		// Funtion that runs when the screen it's changing
		const screenResize = () => {
			// Check every time the size changes if the max-width is met to display the component in a responsive way.
			function isSmallScreen() {
				return window.matchMedia('(max-width: 876px)').matches;
			}
			// If the screen is less than 500px (Vertical cell)
			if (isSmallScreen()) setScreenSize(true);
			else setScreenSize(false);
		};

		// Event that listens when screen size changes
		window.addEventListener('resize', () => {
			screenResize();
		});

		return () => {
			// Event that listens when screen size changes
			window.removeEventListener('resize', () => {
				screenResize();
			});
		};
	}, [setScreenSize]);

	return (
		<>
			<div className='catalogueContainer flex flex-column'>
				<div className='flex flex-justify-between'>
					<div className='catalogueTittle'>
						<span className='textSubtittle textBold textColorPrimary'>
							Photogragy /
						</span>
						<span className='textSubtittle textLighter textColorSecondary'>
							Premium, Pets, Food Photos
						</span>
					</div>
					<div className='flex flex-justify-right'>
						{screenSize ? (
							<div>
								<button
									onClick={toggleFilteringFunc}
									className='btn btn-hover'
									type='button'
								>
									<img
										width='29px'
										height='29px'
										src='\assets\e-commerce\icons\sortingIcon.svg'
										alt='sortingButton'
									/>
								</button>
							</div>
						) : null}
					</div>
				</div>

				<div className='flex flex-justify-right flex-aling-center'>
					<button
						onClick={changeOrderList}
						className='btn btn-hover'
						style={{ marginRight: '5px' }}
					>
						<img
							width='15px'
							height='14.5px'
							src='\assets\e-commerce\icons\arrowsIcon.svg'
							alt='changeOrder'
						/>
					</button>
					<div className='textColorSecondary'>Sort By </div>

					<select defaultValue={sortValue} onChange={handleSortChange}>
						<option value='Price' defaultValue>
							Price
						</option>
						<option value='Alphabetically'>Alphabetically</option>
					</select>
				</div>

				<div className='flex' style={{ marginTop: '1rem' }}>
					{!screenSize ? (
						<div className='catalogueFiltering'>
							<Filtering />
						</div>
					) : null}
					<div className='catalogueGalery flex  flex-justify-center'>
						<ProductList />
					</div>
				</div>
			</div>
		</>
	);
};

export default Catalogue;
