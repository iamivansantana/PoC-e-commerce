import React, { useContext } from 'react';
import articlesContext from '../../context/articlesContext/articlesContext';
import ShopingList from '../shopingList/ShopingList';
import './NavBar.css'

const NavBar = () => {

    const {shopingState,toggleCart,cart} = useContext(articlesContext);

    let total = cart.length;
    // const total = cart.length();
    

    return (
        <>
            <div className="flex flex-justify-between flex-aling-center navbarStyle">
                <div className="icon">
                    <img className="bejamsStyles" src="\assets\e-commerce\icons\BejamasIcon.svg" alt="BejamasIcon"/>
                </div>
                <div className="icon">
                    <button onClick={toggleCart} type="button" className="btn">
                        <img className="shopingCartIconStyles" src="\assets\e-commerce\icons\shopping-cart.svg" alt="shopping-cartIcon" />
                        <span className='mark-cart'>{total}</span>
                    </button>
                </div>
                
                {(shopingState)?<ShopingList />:null}

                
                
                
            </div>  
        </>
    )
}

export default NavBar
