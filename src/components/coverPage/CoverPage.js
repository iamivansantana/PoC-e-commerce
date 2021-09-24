import React, { useContext } from 'react';
import articlesContext from '../../context/articlesContext/articlesContext';
import './CoverPage.css';

const CoverPage = () => {
	//access to the context to get the data to be displayed
	const { addProduct, setShopingState } = useContext(articlesContext);

	const newProduct = {
		productName: 'Ciudad de Bravo',
		productPrice: 100.0,
		productImg: 'assets/fotitosByivansantana/fotitosbyivansantana034.webp',
	};

	//Function to send the product when press the button add
	const sendProduct = () => {
		addProduct(newProduct);
		setShopingState(true);
	};

	return (
		<>
			<div className='containerCoverPage'>
				<div className='displayGrid'>
					<div className='coverTittle'>
						Ciudad de Bravo<span className='coverPrice'>$100.00</span>
					</div>
					<div className='coverBtnAdd'>
						<button onClick={sendProduct} className='btn btnAddStyles' type='button'>
							ADD TO CART
						</button>
					</div>
					<div className='coverImgPrimary'>
						<div className='coverBadge'>Photo of the day</div>
						<img
							src='assets\fotitosByivansantana\fotitosbyivansantana034.webp'
							alt='PhotoOfTheDay'
						/>
					</div>
					<div className='coverDesc'>
						<div className='coverDescTittle'>About the Ciudad de Bravo</div>
						<div className='coverDescCategory'>Wallpapers</div>
						<div className='coverDescDescription'>
							Chilpancingo o Ciudad Bravo, oficialmente llamada Chilpancingo de los
							Bravo (en náhuatl: chilpan, cingo ‘lugar de avispa, pequeño ’‘pequeño
							avispero’), es una ciudad mexicana, capital del estado de Guerrero. Es la
							segunda más grande del mismo y cabecera del municipio homónimo. Se ubica
							en la región Centro del estado y en el suroeste de México.
						</div>
					</div>
					<div className='coverAlsoBuy'>
						<div className='coverAlsoBuyContainter'>
							<div className='coverAlsoBuyContainterTittle'>People also buy</div>
							<div className='coverAlsoBuyContainterImages'>
								<div className='coverAlsoBuyIMGS'>
									<img
										src='assets\fotitosByivansantana\fotitosbyivansantana026.webp'
										srcSet='assets\fotitosByivansantana\fotitosbyivansantana026Small2.webp 450w'
										sizes='50vw'
										alt='PeopleAlsoBuy1'
									/>
								</div>
								<div className='coverAlsoBuyIMGS'>
									<img
										src='assets\fotitosByivansantana\fotitosbyivansantana004.webp'
										srcSet='assets\fotitosByivansantana\fotitosbyivansantana004Small.webp 450w'
										sizes='50vw'
										alt='PeopleAlsoBuy2'
									/>
								</div>
								<div className='coverAlsoBuyIMGS'>
									<img
										src='assets\fotitosByivansantana\fotitosbyivansantana003.webp'
										srcSet='assets\fotitosByivansantana\fotitosbyivansantana003Small.webp 450w'
										sizes='50vw'
										alt='PeopleAlsoBuy3'
									/>
								</div>
							</div>
						</div>
						<div className='coverAlsoBuyContainter' style={{ marginTop: '1rem' }}>
							<div className='coverAlsoBuyContainterTittle'>Details</div>
							<div className='coverAlsoBuyContainterImages'>
								Size: 1020 x 1020 pixel
							</div>
							<div className='coverAlsoBuyContainterImages'>Size: 15 mb</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoverPage;
