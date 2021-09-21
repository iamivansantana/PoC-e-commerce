import React, { useContext} from 'react';
import './Product.css';
import ProductCard from './ProductCard';
import articlesContext from '../../context/articlesContext/articlesContext';


const ProductList = () => {
    
    

    //access to the context to get the data to be displayed  
    const {displayListArr,btnNext,btnPrevious} = useContext(articlesContext);
    
    
    return (
        <>
            <div className="containerList" >
               <div className="containerListGrid" >
                    {
                        displayListArr.map(product=>(
                            <div key={product.name} className="flex flex-aling-center flex-justify-center">
                                <ProductCard 
                                    product={product}
                                />
                            </div>

                        ))
                    }

               </div>
               <div className="flex flex-justify-center flex-aling-center paginationStyles">
                    <button onClick={btnPrevious} type="button" className="btn btn-hover textTittle textBold">&lt;</button>
                    <div className="pagenumbers" id="pagination">  </div>
                    <button onClick={btnNext} className="btn btn-hover textTittle textBold">&gt;</button>
                </div>
             </div>  
        </>
    )
}

export default ProductList
