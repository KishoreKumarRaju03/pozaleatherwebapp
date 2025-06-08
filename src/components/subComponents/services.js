import { useState } from 'react';
import serviceHero from '../../asset/servicesSection/serviceHero.jpg';
import FooterSection from '../footerSection';
import NavHead from '../navHead';
import '../../style/subComponentsStyle/serviceSectionStyle.css';
import serviceLogo from '../../asset/servicesSection/serviceLogoSlide.gif';
import { ServiceProductImages  } from '../../imagesLinkJS/serviceProductImages';
import product1 from '../../asset/servicesSection/manufacturingImages/product1.jpg';
import product2 from '../../asset/servicesSection/manufacturingImages/product2.png';
import product3 from '../../asset/servicesSection/manufacturingImages/product3.avif';
import product4 from '../../asset/servicesSection/manufacturingImages/product4.avif';


const Services = () => {
    const [expandedSections, setExpandedSections] = useState({
        corporateEvents: false,
        smallBusiness: false,
        officeEvents: false,
        clothingMatches: false
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return(
        <>
            <NavHead />
            <div className="service-section-container">
                <div className="service-section">
                    <div className="service-section-header">
                        <h1>Showcase Your Brand With Custom Products</h1>
                    </div>
                    <div className="service-hero-section">
                        <div className="service-hero-img">
                            <img src={serviceHero} alt='hero-image' />
                        </div>
                        <div className='service-hero-description'>
                            <h3>Get your brand into customer's hands</h3>
                            <p>Custom branded products take your marketing to the next level. Whether you’re looking for business promotional items or simply saying thank you, we’ve made it simple to create professional corporate swag to promote your brand. For more than 18 years, we have offered a wide range of high-quality custom merchandise so there are options for anyone, from small businesses to corporate event planners.</p>
                        </div>
                    </div>
                    <div className='service-section-logo'>
                        <img src={serviceLogo} alt='service-logo' />
                    </div>
                    <div className='corporate-swag-description'>
                        <h1>Get Started with Corporate Swag</h1>
                        <p>There are two ways to start designing with your brand in mind. Browse our gallery of templates below, or start from scratch in the FYP Customizer. You can upload your art and logo to create a one of a kind product. Start below!  </p>
                    </div>
                    <div className='service-section-products'>
                        <div className='service-section-product-header'>
                            <h1>Create high-quality branded products for any event</h1>
                        </div>
                        <div className='service-product-grid'>
                            {Object.entries(ServiceProductImages).map(([key, value]) => (
                                <div key={key} className='service-product-item'>
                                    <img 
                                        src={value} 
                                        alt={`Service product ${key.split('-')[1]}`}
                                        className='service-product-image'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='service-explain'>
                        <div className='service-content'>
                            <h1 onClick={() => toggleSection('corporateEvents')}>
                                <span className="toggle-icon">
                                    {expandedSections.corporateEvents ? '−' : '+'}
                                </span>
                                CORPORATE EVENTS
                            </h1>
                            {expandedSections.corporateEvents && (
                                <p>Use custom branded products to put your best business foot forward and stand out from your competition. We've found matches, napkins and cups are the most popular branded products amongst our corporate customers. Showcase your brand at your next corporate event, whether you're planning your business grand opening, hosting the corporate retreat or hoping to top the charts as this year's head of the party planning committee.</p>
                            )}
                        </div>
                        
                        <div className='service-content'>
                            <h1 onClick={() => toggleSection('smallBusiness')}>
                                <span className="toggle-icon">
                                    {expandedSections.smallBusiness ? '−' : '+'}
                                </span>
                                SMALL BUSINESS BRANDING
                            </h1>
                            {expandedSections.smallBusiness && (
                                <p>Small businesses often choose branded products to align with their specialty. For candle companies, branded matchboxes are an excellent choice, and for distilleries, personalized coasters reflect the brand's purpose. Coffee shops may choose custom branded bags and cups, and service-oriented companies may choose branded face masks for customers. These are items that need to be seamlessly on-brand with all of your other marketing efforts and in sync with your brand guidelines. Create the perfect key business branded items with For Your Party. Upload your logo, artwork or information easily to have entirely unique products!</p>
                            )}
                        </div>
                        
                        <div className='service-content'>
                            <h1 onClick={() => toggleSection('officeEvents')}>
                                <span className="toggle-icon">
                                    {expandedSections.officeEvents ? '−' : '+'}
                                </span>
                                OFFICE EVENTS
                            </h1>
                            {expandedSections.officeEvents && (
                                <p>When throwing an office Events, whether an anniversary or holiday party, branded products fit right in to bring employees together. From custom logo napkins for business grand openings to cups with your company's logo printed on them for a quarterly meeting, you can't go wrong with branded thank yous. Having your logo, slogan or business mission statement printed on napkins, coasters, plates and decals will give your company the step up it needs. Staff, clients and stakeholders alike will appreciate the professional flair.</p>
                            )}
                        </div>
                        
                        <div className='service-content'>
                            <h1 onClick={() => toggleSection('clothingMatches')}>
                                <span className="toggle-icon">
                                    {expandedSections.clothingMatches ? '−' : '+'}
                                </span>
                                CLOTHING MATCHES
                            </h1>
                            {expandedSections.clothingMatches && (
                                <p>Maybe you're opening your dream clothing boutique that you've been working hard on putting together. Celebrate the grand opening by sharing your new brand in every detail at your launch event. Serve cocktails and appetizers accented by your company logo on cocktail napkins. Tout your new look on custom printed cups with the company logo and even branded disposable guest hand towels in the restrooms. 

                                Order extra to keep on hand in the shop as a great idea for enhancing the customer experience! Welcome customers with infused water and your company cocktail napkins and decorate the restrooms with your branded hand towels. These simple branding tactics are a great way to make your mark with customers!</p>
                            )}
                        </div>
                    </div>
                    <div className='manufacturing-methods'>
                        <div className='manufacturingisection'>
                            <div className='manufacturing-header'>
                                <h1>OUR MANUFACTURING METHODS:</h1>
                            </div>
                            <div className='manufacturing-product-section'>
                                <div className='manufacturing-product-1'>
                                    <img src={product1} alt='product-image' />
                                    <h1>Foil Making</h1>
                                    <p>Our most popular choice for printing! Foil stamping is a specialty printing process that uses heat, pressure, metal dies and foil. The foil comes in rolls with a wide assortment of colors and finishes. Metallic foil is most commonly seen today – particularly gold, silver, and copper metallic foils – but foil rolls are also available in solid colors in both satin and matte finishes. For Your Party offers artisan Foil Stamping on all of our napkin, coaster and paper products.</p>
                                </div>
                                <div className='manufacturing-product-2'>
                                    <img src={product2} alt='product-image' />
                                    <h1>Screen Printing</h1>
                                    <p>Screen printing is a method in which ink is applied directly to the surface to be printed through a design screen. The image to be printed is photographically transferred to a very fine fabric (the screen) such that the non-printing areas are blocked off and the fabric serves as a stencil. The ink is wiped across the screen to pass through the unblocked pores and reach the substrate. For Your Party uses screen printing on our various cups and can coolers. </p>
                                </div>
                            </div>
                            <div className='manufacturing-product-section-2'>
                                <div className='manufacturing-product-1'>
                                    <img src={product2} alt='product-image' style={{margin: '75px 0px 0px 0px'}} />
                                    <h1>Digital Making</h1>
                                    <p>Our Digital Full color printing option is a 4 color digital process that is available on a variety of products. This printing process allows us to use your photographs or multi-color artwork to personalize our products.  For Your Party offers digital full color/photo printing on napkins, guest towels, party bags, coasters, matchboxes, and is also a popular option for invitations! Just use the "upload photo" tab in our customizer to easily add your full color artwork when designing.</p>
                                </div>
                                <div className='manufacturing-product-2'>
                                    <img src={product4} alt='product-image' />
                                    <h1>EMbossing</h1>
                                    <p>The blind embossing printing process involves using two metal plates that fit together on the front and back of a product and when pressed leaves a beautiful, subtle design and tactile quality to the paper. For Your Party offers Embossing on our napkins.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection />


        </>
    );
};

export default Services;    
