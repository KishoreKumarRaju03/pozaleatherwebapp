import '../style/componentStyle/collectionSectionStyle.css';
import HomeVisual from '../asset/homepage_visual.webp';

const CollectionSection = () => {
    return (
        <>
            <div className="collection-section-container">
                <div className="collection-section">
                    <ul className='collection-section-list'>
                        <li><a href='/'>Leather Bags</a></li>
                        <li><a href='/'>Events Gifts</a></li>
                        <li><a href='/'>Manufacturing Services</a></li>
                    </ul>
                </div>
            </div>
            <div className='home-page-visual'>
                <img src={HomeVisual} style={{width: '100%'}} />
            </div>
            
        </>
    );
};

export default CollectionSection;