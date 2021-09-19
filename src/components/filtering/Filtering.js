import React, { useContext, useState } from 'react';
import articlesContext from '../../context/articlesContext/articlesContext';
import './Filtering.css';

const Filtering = () => {

    const [priceState, setPriceState] = useState('Any Price');

    //Access to context
    const {arrayOfCategories,checkValues,setCheckValues} = useContext(articlesContext);

    //Function to update the state 
    const actualizarState = (e)=>{

        if(e.target.checked){
            const newChecksArry = [...checkValues,e.target.value];
            setCheckValues(newChecksArry);
        }
        else setCheckValues(checkValues.filter(product=>product !== e.target.value));



     }

    return (
        <>
            <div className="containerFiltering borderDown">
                
                <div className="flex flex-column categoriesStyles">
                    <div className="textSubtittle textBold textColorPrimary">Category</div>
                    {
                        arrayOfCategories.map((category)=>(
                            <label key={category} className="textSubtittle checkbox flex">
                                <input
                                    type="checkbox" 
                                    // id="cbox1" 
                                    name={category} 
                                    value={category} 
                                    onChange={actualizarState}
                                /> 
                                <span style={{marginLeft:'1rem',marginTop:'.2rem'}}>{category}</span>
                            </label>
                        ))
                    }
                </div>

                <div className="flex flex-column categoriesStyles">
                    <div className="textSubtittle textBold textColorPrimary" style={{marginTop:'1rem'}}>Price range</div>
                    <label className="textSubtittle checkbox flex">
                        <input type="radio" id="price1" name="price" defaultChecked value="Lower than $20" onClick={() => setPriceState('Any Price')}/>
                        <span style={{marginLeft:'1rem',marginTop:'.2rem'}}>Any Price</span>
                    </label>
                    <label className="textSubtittle checkbox flex">
                        <input type="radio" id="price1" name="price" value="Lower than $20" onClick={() => setPriceState('Lower than $20')}/>
                        <span style={{marginLeft:'1rem',marginTop:'.2rem'}}>Lower than $20</span>
                    </label>
                    <label className="textSubtittle checkbox flex">
                        <input type="radio" id="price2" name="price"  value="$20 - $100" onClick={() => setPriceState('$20 - $100')}/>
                        <span style={{marginLeft:'1rem',marginTop:'.2rem'}}>$20 - $100</span>
                    </label>
                    <label className="textSubtittle checkbox flex">
                        <input type="radio" id="price3" name="price"  value="$100 - $200" onClick={() => setPriceState('$100 - $200')}/>
                        <span style={{marginLeft:'1rem',marginTop:'.2rem'}}>$100 - $200</span>
                    </label>
                    <label className="textSubtittle checkbox flex">
                        <input type="radio" id="price4" name="price"  value="$More than $200" onClick={() => setPriceState('More than $200')}/>
                        <span style={{marginLeft:'1rem',marginTop:'.2rem'}}>More than $200</span>
                    </label>
                </div>
            </div>
        </>
    )
}

export default Filtering
