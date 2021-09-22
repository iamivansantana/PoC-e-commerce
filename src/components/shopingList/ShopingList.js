import React, { useContext } from 'react';
import articlesContext from '../../context/articlesContext/articlesContext';
import './ShopingList.css';

const ShopingList = () => {

    //Context of Articles
    const { toggleCart,cart,cleanList} = useContext(articlesContext);

    // const { cart } = useContext(articlesContext);





    return (
        <>
            <div className="containerListShoping">
                <div style={{padding:'1rem'}} className="flex flex-column flex-center">
                    <div className="closeList flex flex-justify-right flex-aling-center">
                        <button  onClick={toggleCart} className="btn btnCloseListStyles"><img  width="20px" height='20px'  src="\assets\e-commerce\icons\closeIcon.svg" alt="btnClose" /></button>
                    </div>
                    <div className="listShoping flex flex-column flex-aling-center">



                    {(cart.length <=0)
                        ? <h3 className="tittle" style={{textAlign:'center',opacity:'10%'}}>THERE ARE NOT PRODUCTS ON YOUR CART</h3>
                        : cart.map((product,index)=>(
                            <div key={ index }  className="flex shopingItemStyles flex-justify-between">
                                <div className="shopingItemDescription flex flex-column flex-justify-center" >
                                    <div className="shopingItemDescriptionTittle">{product.productName}</div>
                                    <div className="shopingItemDescriptionPrice">${product.productPrice}</div>
                                </div>
                                <div className="flex shopingItemImage">
                                    <img loading="lazy" src={product.productImg} alt="imgProduct" />
                                </div>
                            </div>
                        ))

                    }
            

                        
                        
                    </div>
                    <button onClick={()=>{cleanList()}} className="btn btnClearStyles" type="button">CLEAR</button>
                </div>
            </div>  
        </>
    )
}

export default ShopingList
