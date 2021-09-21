import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react/cjs/react.development';
import articlesContext from '../../context/articlesContext/articlesContext';
import Filtering from './Filtering';

const FilteringFixed = () => {

    const {toggleFilteringFunc,filteringToggle} = useContext(articlesContext);


    useEffect(() => {
        
        const filteringWindow = document.querySelector('#filteringWindow');
        const FilteringWindowContainer = document.querySelector('#FilteringWindowContainer');

        if (filteringToggle){
            filteringWindow.classList.add('filteringWindowACTIVE');
            FilteringWindowContainer.classList.add('FilteringWindowContainerACTIVE');
        }
        else{
            filteringWindow.classList.remove('filteringWindowACTIVE');
            FilteringWindowContainer.classList.remove('FilteringWindowContainerACTIVE');
        }  
    })


    return (
        <div id="filteringWindow" className="filteringWindow flex "> 

            <div id="FilteringWindowContainer" className="flex flex-column flex-justify-between FilteringWindowContainer ">
                
                <div className="FilteringContainerSettings">
                    <div className="flex flex-justify-between" style={{height:'2rem'}}>
                        <div className="textColorPrimary textBold textTittle">Filter</div>
                        <button onClick={toggleFilteringFunc}  className="btn btn-hover"><img width="20px" height="20px" src="\assets\e-commerce\icons\closeIcon.svg" alt="btnClose" /></button>
                    </div>
                    
                    <div className="filteringSettings">
                        <Filtering />
                    </div>
                </div>



                <div className="filteringButtonsContainer flex flex-aling-center flex-justify-center" >
                    {/* <div className="textColorPrimary textBold textTittle">CLEAR</div> */}
                    <button  className="btn btnClear" style={{width:'45%',marginRight:'5px'}}>CLEAR</button>
                    <button  onClick={toggleFilteringFunc} className="btn btnAdd" style={{width:'45%',marginLeft:'5px'}}>SAVE</button>
                </div>



            </div>
            
            <div className=" flex filteringBack"/>


        </div>
    )
}

export default FilteringFixed
