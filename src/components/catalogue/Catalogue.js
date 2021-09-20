import React, { useContext, useEffect } from 'react';
import articlesContext from '../../context/articlesContext/articlesContext';
import Filtering from '../filtering/Filtering';
import ProductList from '../products/ProductList';
import './Catalogue.css'

const Catalogue = () => {

    
    //Access to Context
        //Destructuring States
    const {screenSize,setScreenSize,toggleFilteringFunc} = useContext(articlesContext);


    //Effecto que escucha cuando cambia el tamaño de la pantalla;
    useEffect(() => {

        function isSmallScreen() {
            return window.matchMedia('(max-width: 876px)').matches;
        }
        setScreenSize(isSmallScreen());
        

        // Funcion que se ejecuta cada que el tamaño de la pantalla cambia
        const screenResize = () => {

            //Verifica cada vez que cambia el tamaño si se cumple el max-width para visualizar el componente de una manera responsive.
            function isSmallScreen() {
                return window.matchMedia('(max-width: 876px)').matches;
            }
            //Si la pantalla es menor a 500px (celular Vertical) 
            if(isSmallScreen()) setScreenSize(true);
            else setScreenSize(false);
            
        }

        //Evento que escucha cuando cambia el tamaño de la pantalla
        window.addEventListener("resize",()=>{screenResize()});

    },[setScreenSize]);



    return (
        <>
            <div className="catalogueContainer flex flex-column">

                <div className="flex flex-justify-between">
                    <div className="catalogueTittle">
                        <span className="textSubtittle textBold textColorPrimary">Photogragy /</span> 
                        <span className="textSubtittle textLighter textColorSecondary">Premium, Pets, Food Photos</span>
                    </div>  
                    <div className="flex flex-justify-right">
                       
                        {(screenSize)?
                            <div>
                               <button onClick={toggleFilteringFunc} className="btn btn-hover" type="button"><img width="29px" height="29px" src="\assets\e-commerce\icons\sortingIcon.svg" alt="sortingButton"/></button>
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

                            {
                                (!screenSize)?
                                    <div className="catalogueFiltering">
                                            <Filtering />
                                    </div>  
                                :null
                            }

                            


                    <div className="catalogueGalery flex  flex-justify-center">
                            
                            <ProductList />

                            {/* <ProductCard /> */}
                            {/* <p>-------</p>
                            <ProductCard />
                            <p>-------</p>
                            <ProductCard /> */}
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
