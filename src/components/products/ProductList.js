import React from 'react';
import './Product.css';
import ProductCard from './ProductCard';


const ProductList = () => {
    return (
        <>
            <div className="containerList" >
               <div className="containerListGrid" >
                    <div className="flex flex-aling-center flex-justify-center">
                        <ProductCard />
                    </div>
                    <div className="flex flex-aling-center flex-justify-center">
                        <ProductCard />
                    </div>
                    <div className="flex flex-aling-center flex-justify-center">
                        <ProductCard />
                    </div>
                    <div className="flex flex-aling-center flex-justify-center">
                        <ProductCard />
                    </div>
                    <div className="flex flex-aling-center flex-justify-center">
                        <ProductCard />
                    </div>
                    <div className="flex flex-aling-center flex-justify-center">
                        <ProductCard />
                    </div>
               </div>
               <div className="flex flex-justify-center flex-aling-center paginationStyles">
                    &lt; 1 2 3 4 &gt;
                </div>
             </div>  
        </>
    )
}

export default ProductList
