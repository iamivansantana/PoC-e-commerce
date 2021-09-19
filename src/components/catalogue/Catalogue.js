import React, { useState } from 'react';
import Filtering from '../filtering/Filtering';
import './Catalogue.css'

const Catalogue = () => {

    const [sortingStatus, setSortingStatus] = useState(true);

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
                    <div className="catalogueGalery">Galery</div>  

                </div>
            </div>
        </>
    )
}

export default Catalogue
