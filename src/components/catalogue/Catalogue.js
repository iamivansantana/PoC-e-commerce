import React, { useContext } from 'react';
import articlesContext from '../../context/articlesContext/articlesContext';
import Filtering from '../filtering/Filtering';
import Product from '../products/Product';
import './Catalogue.css'

const Catalogue = () => {

    //Access to Context
        //Destructuring of sortingStatus to show the sortingButton
    const {sortingStatus} = useContext(articlesContext);

    return (
        <>
            <div className="catalogueContainer flex flex-column">

                <div className="flex flex-justify-between">
                    <div className="catalogueTittle">
                        <span className="textSubtittle textBold textColorPrimary">Photogragy /</span> 
                        <span className="textSubtittle textLighter textColorSecondary">Premium, Pets, Food Photos</span>
                    </div>  
                    <div className="flex flex-justify-right">
                       
                        {(sortingStatus)?
                            <div>
                               <button className="btn btn-hover" type="button"><img width="29px" height="29px" src="\assets\e-commerce\icons\sortingIcon.svg" alt="sortingButton"/></button>
                            </div>
                        :null}
                    </div>
                </div>

                <div className="flex flex-justify-right flex-aling-center">
                    <button className="btn btn-hover" style={{marginRight:'5px'}}><img width="15px" height="14.5px" src="\assets\e-commerce\icons\arrowsIcon.svg" alt="changeOrder"/></button>
                    <div className="textColorSecondary">Sort By </div>
                
                    <select >
                        <option value="Price" defaultValue>Price</option>
                        <option value="alphabetically">Alphabetically</option>
                    </select>
                </div>

                
                <div className="flex" style={{marginTop:'1rem'}}>

                    <div className="catalogueFiltering">
                            <Filtering />
                    </div>  

                    <div className="catalogueGalery flex  flex-justify-center">
                            <Product />
                            <p>-------</p>
                            <Product />
                            <p>-------</p>
                            <Product />
                    </div>  


                </div>
                    {/* <div>
                        {(0===1)?null
                        :
                        <button
                            type="button"
                            className="bbtn btn-info mr-2 mb-5"
                            // onClick={}
                            >&laquo; Anterior            
                        </button>
                        }
                        {(5 === 6)?null
                        :
                        <button
                            type="button"
                            className="bbtn btn-info mb-5"
                            // onClick={}
                        >Siguiente &raquo;           
                        </button>
                        }
                    </div> */}
            </div>
        </>
    )
}

export default Catalogue
