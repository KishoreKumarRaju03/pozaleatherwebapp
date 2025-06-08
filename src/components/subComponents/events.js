import React from 'react';
import '../../style/subComponentsStyle/corporateGiftsStyle.css';
import marriot from '../../asset/corporateGifts/partnerLogo/marriott.webp';
import marriotHover from '../../asset/corporateGifts/partnerLogo/marriottHover.webp';
import bacardi from '../../asset/corporateGifts/partnerLogo/bacardi.webp';
import bacardiHover from '../../asset/corporateGifts/partnerLogo/bacardiHover.webp';
import makeMyTrip from '../../asset/corporateGifts/partnerLogo/makeMyTrip.webp';
import makeMyTripHover from '../../asset/corporateGifts/partnerLogo/makeMyTripHover.webp';
import royce from '../../asset/corporateGifts/partnerLogo/royce.webp';
import royceHover from '../../asset/corporateGifts/partnerLogo/royceHover.webp';
import spotify from '../../asset/corporateGifts/partnerLogo/spotify.webp';
import spotifyHover from '../../asset/corporateGifts/partnerLogo/spotifyHover.webp';
import yesBank from '../../asset/corporateGifts/partnerLogo/yesBank.webp';
import yesBankHover from '../../asset/corporateGifts/partnerLogo/yesBankHover.webp';
import dewars from '../../asset/corporateGifts/partnerLogo/dewars.webp';
import dewarsHover from '../../asset/corporateGifts/partnerLogo/dewarsHover.webp';
import airIndia from '../../asset/corporateGifts/partnerLogo/airIndia.webp';
import airIndiaHover from '../../asset/corporateGifts/partnerLogo/airIndiaHover.webp';
import miniCooper from '../../asset/corporateGifts/partnerLogo/miniCooper.webp';
import miniCooperHover from '../../asset/corporateGifts/partnerLogo/miniCooperhover.webp';
import hero2 from '../../asset/corporateGifts/hero2.webp';
import product1 from '../../asset/corporateGifts/products/product1.png';
import product2 from '../../asset/corporateGifts/products/product2.png';
import product3 from '../../asset/corporateGifts/products/product3.png';
import NavHead from '../navHead';
import FooterSection from '../footerSection';
import image1 from '../../asset/corporateGifts/exampleimage/image1.webp';
import image2 from '../../asset/corporateGifts/exampleimage/image2.webp';
import image3 from '../../asset/corporateGifts/exampleimage/image3.webp';

const CorporateGifts = () => {
  return (
    <>
        <NavHead />
        <div className='corporate-gift-heading'>
            <p>CORPORATE GIFTS</p>
        </div>
        <div className="corporate-gifts-container">
        {/* Video Section */}
        <div className="napadori-videos">
            <video autoPlay muted loop>
            <source src="https://cdn.shopify.com/videos/c/o/v/b6616a9b0a4c4887911714e5dec4f3f6.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>

        {/* Corporate List Section */}
        <div className="corporate-list">
            <div className="corporate-list-block">
            <div className="corporate-list-img">
                <img src={image1} alt="Customised Gifts" />
            </div>
            <p>CUSTOMISED GIFTS</p>
            </div>  
            <div className="corporate-list-block">
            <div className="corporate-list-img">
                <img src={image2} alt="Bespoke Packaging" />
            </div>
            <p>BESPOKE PACKAGING</p>
            </div>
            <div className="corporate-list-block">
            <div className="corporate-list-img">
                <img src={image3} alt="Occasional Gifts" />
            </div>
            <p>OCCASIONAL GIFTS</p>
            </div>
        </div>

        <div className="napadori-bestseller-sec">
            <div className="napadori-bestseller-cont">
            <p>OUR VALUED CORPORATE PARTNERS</p>
            </div>
        </div>


        <div className="brand--logo-icon">
            <div className="brand-list">
            <div className="main-brand-logo">
                <div className="brand-logo-img">
                <img src={marriot} alt="Brand" />
                </div>
                <div className="brand-logo-imghover">
                <div className="brand-logo-hover">
                    <img src={marriotHover} alt="Brand Hover" />
                </div>
                </div>
            </div>
            <div className="main-brand-logo">
                <div className="brand-logo-img">
                <img src={bacardi} alt="Brand" />
                </div>
                <div className="brand-logo-imghover">
                <div className="brand-logo-hover">
                    <img src={bacardiHover} alt="Brand Hover" />
                </div>
                </div>
            </div>
            <div className="main-brand-logo">
                <div className="brand-logo-img">
                <img src={makeMyTrip} alt="Brand" />
                </div>
                <div className="brand-logo-imghover">
                <div className="brand-logo-hover">
                    <img src={makeMyTripHover} alt="Brand Hover" />
                </div>
                </div>
            </div>
            <div className="main-brand-logo">
                <div className="brand-logo-img">
                <img src={royce} alt="Brand" />
                </div>
                <div className="brand-logo-imghover">
                <div className="brand-logo-hover">
                    <img src={royceHover} alt="Brand Hover" />
                </div>
                </div>
            </div>
            <div className="main-brand-logo">
                <div className="brand-logo-img">
                <img src={spotify} alt="Brand" />
                </div>
                <div className="brand-logo-imghover">
                <div className="brand-logo-hover">
                    <img src={spotifyHover} alt="Brand Hover" />
                </div>
                </div>
            </div>
            <div className="main-brand-logo">
                <div className="brand-logo-img">
                <img src={yesBank} alt="Brand" />
                </div>
                <div className="brand-logo-imghover">
                <div className="brand-logo-hover">
                    <img src={yesBankHover} alt="Brand Hover" />
                </div>
                </div>
            </div>
            <div className="main-brand-logo">
                <div className="brand-logo-img">
                <img src={dewars} alt="Brand" />
                </div>
                <div className="brand-logo-imghover">
                <div className="brand-logo-hover">
                    <img src={dewarsHover} alt="Brand Hover" />
                </div>
                </div>
            </div>
            <div className="main-brand-logo">
                <div className="brand-logo-img">
                <img src={airIndia} alt="Brand" />
                </div>
                <div className="brand-logo-imghover">
                <div className="brand-logo-hover">
                    <img src={airIndiaHover} alt="Brand Hover" />
                </div>
                </div>
            </div>
            <div className="main-brand-logo">
                <div className="brand-logo-img">
                <img src={miniCooper} alt="Brand" />
                </div>
                <div className="brand-logo-imghover">
                <div className="brand-logo-hover">
                    <img src={miniCooperHover} alt="Brand Hover" />
                </div>
                </div>
            </div>

            </div>
        </div>


        <div className="brand-image-sec">
            <div className="brand-img-item">
            <img src={hero2} alt="Corporate Gifts" />
            </div>
        </div>

        <div className="napadori-bestseller-sec">
            <div className="napadori-bestseller-cont">
            <p>BEST SELLERS</p>
            </div>
            <div className="napadori-bestseller-item">
            <div className="napadori-bestseller-icon">
                <div className="napadori-bestseller-img">
                <a href="/products/the-hitchhiker">
                    <img src={product1} alt="The Hitchhiker" />
                </a>
                <div className="napadori-bestdeller-cont">
                    <p><a href="/products/the-hitchhiker">The Hitchhiker</a></p>
                </div>
                </div>
                <div className="napadori-bestseller-img">
                <a href="/products/the-hitchhiker">
                    <img src={product2} alt="The Hitchhiker" />
                </a>
                <div className="napadori-bestdeller-cont">
                    <p><a href="/products/the-hitchhiker">Hand Bag</a></p>
                </div>
                </div>
                <div className="napadori-bestseller-img">
                <a href="/products/the-hitchhiker">
                    <img src={product3} alt="The Hitchhiker" />
                </a>
                <div className="napadori-bestdeller-cont">
                    <p><a href="/products/the-hitchhiker">The Daily Duffel</a></p>
                </div>
                </div>
            </div>
            </div>
        </div>


        <div className="custom-form-corporate">
            <div className="form-container">
            <h3>GET IN TOUCH WITH US</h3>
            <form>
                <div className="form-row">
                <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" />
                </div>
                </div>
                <div className="form-row">
                <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" />
                </div>
                </div>
                <div className="form-row">
                <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" name="company" />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" name="country" />
                </div>
                </div>
                <div className="form-row">
                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <div className="quantity-selector">
                    <button type="button" className="quantity-btn minus">-</button>
                    <input type="number" id="quantity" name="quantity" min="0" defaultValue="0" />
                    <button type="button" className="quantity-btn plus">+</button>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category/Product</label>
                    <input type="text" id="category" name="category" />
                </div>
                </div>
                <div className="form-group full-width">
                <label htmlFor="message">Add a message (optional)</label>
                <textarea id="message" name="message" rows="3"></textarea>
                </div>
                <button type="submit" className="submit-btn">Send</button>
            </form>
            </div>
        </div>


        <div className="note-for-gift">
            <p>
            We will be happy to assist you with your queries feel free to get in touch with us at <a href="mailto:hellogcc@nappadori.com">hellogcc@nappadori.com</a><br />
            Connect with us: <a href="tel:+971585982090">+971 58 598 2090</a><br />
            Address: Unit E40, Alserkal Avenue - 3 St - Al Quoz 1 - Dubai - United Arab Emirates 083115
            </p>
            <p>You can request for our corporate catalogue which will give you an insight of the product range and prices</p>
        </div>

        <span className="cornericon top-left">
            <svg viewBox="0 0 38.82 38.82">
            <path fill="#c8a770" d="M40.9,7.7H2.08V46.52H5.16s-1-5.48,1.68-7.16,6.45-5.6,7.29-12.89,9.8-7.85,14-8,4.12-6.75,9.11-7.56a8.17,8.17,0,0,1,3.65,0Z" transform="translate(-2.08 -7.7)" />
            </svg>
        </span>
        <span className="cornericon top-right">
            <svg viewBox="0 0 48.5 51">
            <path fill="#C8A770" d="M0,0l48.6,0v51h-2.1c0,0-0.4-5.5-3.9-9.4c-3.5-3.9-7.5-6.4-7.2-13.6s-7.5-12.2-18.4-14.3 c-5.4-1.1-6.8-8.5-11-9.2s-6,0-6,0V0z" />
            </svg>
        </span>
        <span className="cornericon bottom-left">
            <svg viewBox="0 0 48.5 51">
            <path fill="#C8A770" d="M48.5,51H0L0,0L2,0c0,0,0.4,5.5,3.9,9.4s7.5,6.4,7.2,13.6s7.5,12.2,18.4,14.3c5.4,1.1,6.8,8.5,11,9.2s6,0,6,0 V51z" />
            </svg>
        </span>
        <span className="cornericon bottom-right">
            <svg viewBox="0 0 48.5 51">
            <path fill="#C8A770" d="M0,51h48.6V0l-2.1,0c0,0-0.4,5.5-3.9,9.4c-3.5,3.9-7.5,6.4-7.2,13.6s-7.5,12.2-18.4,14.3 c-5.4,1.1-6.8,8.5-11,9.2s-6,0-6,0V51z" />
            </svg>
        </span>
        </div>
        <FooterSection />
    </>
  );
};

export default CorporateGifts;