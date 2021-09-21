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
                        <img src={`https://pixabay.com/get/g373c44dce4c23c64baaa10f3ed22c789f4a1d99826b009086be2c9de2664cdb2bb33e1976e58c227fb1420e34f32035188a0787d801f8376648a90f5011f9f96_1280.jpg`} alt="PhotoOfTheDay"/>
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
                                <div className="coverAlsoBuyIMGS"><img src={`https://pixabay.com/get/g24fc55f89148e01e030eef2478c0d8b277738eb656c6d09c8b081a7df83c528ad80e945cd5d35925438855946e7b5e0e098495fb6c03e051f13b2b18092dadae_1280.jpg`} alt="PeopleAlsoBuy1"/></div>
                                <div className="coverAlsoBuyIMGS"><img src={`https://images.pexels.com/photos/3559235/pexels-photo-3559235.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`} alt="PeopleAlsoBuy2"/></div>
                                <div className="coverAlsoBuyIMGS"><img src={`https://pixabay.com/get/gb44b4d163e7218b4a308a0fc1f66eaa3152a4ab312f71efebbc95c7550ad81796c2f69330b930eab83bcb7c427b1ff75fa4408e80acd26f8fd24b5c0a7e90dd9_1280.jpg`} alt="PeopleAlsoBuy3"/></div>
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
