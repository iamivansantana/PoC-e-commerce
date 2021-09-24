import React, { useContext } from 'react';
import articlesContext from '../../context/articlesContext/articlesContext';
import './Filtering.css';

const Filtering = () => {
	//Access to context
	//Destructuring states and functions
	const { arrayOfCategories, checkValues, setCheckValues, setPriceState } =
		useContext(articlesContext);

	//Function to update the state
	const actualizarState = (e) => {
		if (e.target.checked) {
			const newChecksArry = [...checkValues, e.target.value];
			setCheckValues(newChecksArry);
		} else
			setCheckValues(checkValues.filter((product) => product !== e.target.value));
	};

	return (
		<>
			<div className='containerFiltering'>
				<div
					className='flex flex-column '
					style={{
						paddingBottom: '1.5rem',
						borderBottom: '1px solid var(--BackgroundColorLineDown)',
					}}
				>
					<div className='textSubtittle textBold textColorPrimary'>Category</div>
					{arrayOfCategories.map((category) => (
						<label key={category} className='textSubtittle checkbox flex'>
							<input
								type='checkbox'
								// id="cbox1"
								name={category}
								value={category}
								onChange={actualizarState}
							/>
							<span style={{ marginLeft: '1rem', marginTop: '.2rem' }}>
								{category}
							</span>
						</label>
					))}
				</div>

				<div className='flex flex-column' style={{ paddingBottom: '1.5rem' }}>
					<div
						className='textSubtittle textBold textColorPrimary'
						style={{ marginTop: '1rem' }}
					>
						Price range
					</div>
					<label className='textSubtittle checkbox flex'>
						<input
							type='radio'
							name='price'
							defaultChecked
							value='Lower than $20'
							onClick={() => setPriceState('Any Price')}
						/>
						<span style={{ marginLeft: '1rem', marginTop: '.2rem' }}>Any Price</span>
					</label>
					<label className='textSubtittle checkbox flex'>
						<input
							type='radio'
							name='price'
							value='<20'
							onClick={() => setPriceState('<20')}
						/>
						<span style={{ marginLeft: '1rem', marginTop: '.2rem' }}>
							Lower than $20
						</span>
					</label>
					<label className='textSubtittle checkbox flex'>
						<input
							type='radio'
							name='price'
							value='>= 20 and <=100'
							onClick={() => setPriceState('>= 20 && <=100')}
						/>
						<span style={{ marginLeft: '1rem', marginTop: '.2rem' }}>$20 - $100</span>
					</label>
					<label className='textSubtittle checkbox flex'>
						<input
							type='radio'
							name='price'
							value='>=100 and <=200'
							onClick={() => setPriceState('>=100 && <=200')}
						/>
						<span style={{ marginLeft: '1rem', marginTop: '.2rem' }}>
							$100 - $200
						</span>
					</label>
					<label className='textSubtittle checkbox flex'>
						<input
							type='radio'
							name='price'
							value='>200'
							onClick={() => setPriceState('>200')}
						/>
						<span style={{ marginLeft: '1rem', marginTop: '.2rem' }}>
							More than $200
						</span>
					</label>
				</div>
			</div>
		</>
	);
};

export default Filtering;
