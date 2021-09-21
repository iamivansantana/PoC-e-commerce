import React from 'react';
import './Product.css';
import ProductCard from './ProductCard';
import {products} from '../../data/dataStore';


const ProductList = () => {

    // useEffect(() => {
    //     console.log(ObjetData.products);
    // }, []);
    
    return (
        <>
            <div className="containerList" >
               <div className="containerListGrid" >
                    {
                        products.map(product=>(
                            <div key={product.name} className="flex flex-aling-center flex-justify-center">
                                <ProductCard 
                                    product={product}
                                />
                            </div>

                        ))
                    }

               </div>
               <div className="flex flex-justify-center flex-aling-center paginationStyles">
                    &lt; 1 2 3 4 &gt;
                </div>
             </div>  
        </>
    )
}

export default ProductList
