import React from 'react';
import './CoverPage.css';

const CoverPage = () => {
    return (
        <>
            <div className="containerCoverPage">
                <div className="displayGrid">
                    <div className="coverTittle">Samurai King Resting<span className="coverPrice">$100.00</span></div>
                    <div className="coverBtnAdd">
                        <button className="btn btnAddStyles"  type="button">ADD TO CART</button> 
                    </div>
                    <div className="coverImgPrimary">
                        <div className="coverBadge">Photo of the day</div>
                        {/* <img src={`https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`} alt="PhotoOfTheDay"/> */}
                        <img src={`https://images.pexels.com/photos/10922/pexels-photo-10922.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`} alt="PhotoOfTheDay"/>
                    </div>
                    <div className="coverDesc">
                        <div className="coverDescTittle">About the Samurai King Resting</div>
                        <div className="coverDescCategory">Pets</div>
                        <div className="coverDescDescription">So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock. </div>
                    </div>
                    <div className="coverAlsoBuy">
                        <div className="coverAlsoBuyContainter">
                            <div className="coverAlsoBuyContainterTittle">People also buy</div>
                            <div className="coverAlsoBuyContainterImages">
                                <div className="coverAlsoBuyIMGS"><img src={`https://images.pexels.com/photos/9184517/pexels-photo-9184517.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`} alt="PeopleAlsoBuy1"/></div>
                                <div className="coverAlsoBuyIMGS"><img src={`https://images.pexels.com/photos/3559235/pexels-photo-3559235.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`} alt="PeopleAlsoBuy2"/></div>
                                <div className="coverAlsoBuyIMGS"><img src={`https://images.pexels.com/photos/2078772/pexels-photo-2078772.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`} alt="PeopleAlsoBuy3"/></div>
                            </div>
                        </div>
                        <div className="coverAlsoBuyContainter" style={{marginTop:'1rem'}}>
                            <div className="coverAlsoBuyContainterTittle">Details</div>
                            <div className="coverAlsoBuyContainterImages">Size: 1020 x 1020 pixel</div>
                            <div className="coverAlsoBuyContainterImages">Size: 15 mb</div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default CoverPage
