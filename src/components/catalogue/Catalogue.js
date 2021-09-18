import React from 'react';
import './Catalogue.css'

const Catalogue = () => {
    return (
        <>
            <div className="catalogueContainer flex flex-column">
                <div className="catalogueHead flex flex-justify-between">
                    <div>Photogragy / Premium Photos</div>  
                    <div className="">
                        <div>Menu</div>
                        <div>||Scort By Price°</div>
                    </div>
                </div>
                <div className="flex">
                    <div className="catalogueFiltering">Filtering</div>  
                    <div>Galery</div>  
                </div>
            </div>
        </>
    )
}

export default Catalogue
