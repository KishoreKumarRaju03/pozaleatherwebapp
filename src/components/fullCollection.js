import { useState } from 'react';
import '../style/componentStyle/fullCollectionStyle.css';
import handbag1 from '../asset/collection-item/handbag-item-1.webp';
import handbag2 from '../asset/collection-item/handbag-item-2.webp';
import handbag3 from '../asset/collection-item/handbag-item-3.webp';
import handbag1Hover from '../asset/collection-item/handbag-item-1-hover.webp';
import handbag2Hover from '../asset/collection-item/handbag-item-2-hover.webp';
import handbag3Hover from '../asset/collection-item/handbag-item-3-hover.webp';
import productImage1 from '../asset/collection-produt/product-image-1.webp';
import productImage2 from '../asset/collection-produt/product-image-2.webp';
import productImage3 from '../asset/collection-produt/product-image-3.webp';
import productImage4 from '../asset/collection-produt/product-image-4.webp';
import product1 from '../asset/collection-produt/product-1.webp';
import product2 from '../asset/collection-produt/product-2.webp';
import product3 from '../asset/collection-produt/product-3.webp';
import product4 from '../asset/collection-produt/product-4.webp';


const FullCollection = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const products = [
        { id: 1, defaultImg: productImage1, hoverImg: product1 },
        { id: 2, defaultImg: productImage2, hoverImg: product2 },
        { id: 3, defaultImg: productImage3, hoverImg: product3 },
        { id: 4, defaultImg: productImage4, hoverImg: product4 },
    ];

    const handleMouseEnter = (itemId) => {
        setHoveredItem(itemId);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const getImageSrc = (itemId) => {
        switch (itemId) {
            case 1:
                return hoveredItem === 1 ? handbag1Hover : handbag1;
            case 2:
                return hoveredItem === 2 ? handbag2Hover : handbag2;
            case 3:
                return hoveredItem === 3 ? handbag3Hover : handbag3;
            default:
                return handbag1;
        }
    };
    return(
        <>
            <div className="full-collection-container">
                <div className="full-collection">
                    <div className="full-collection-upper">
                        <div className="full-collection-header">
                            <h4>POZA</h4>
                            <span><a href="/">SEE FULL COLLECTION</a></span>
                        </div>
                        <div className="full-collection-sample">
                            <div className="full-collection-sample-items">
                                {[1, 2, 3].map((itemId) => (
                                    <div
                                        key={itemId}
                                        className={`full-collection-sample-item-${itemId}`}
                                        onMouseEnter={() => handleMouseEnter(itemId)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <img 
                                            src={getImageSrc(itemId)} 
                                            alt={`Handbag ${itemId}`} 
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='full-collection-bottom'>
                        <div className='full-collection-bottom-content'>
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className={`full-collection-product-${product.id}`}
                                    onMouseEnter={() => setHoveredProduct(product.id)}
                                    onMouseLeave={() => setHoveredProduct(null)}
                                >
                                    <img
                                        src={hoveredProduct === product.id ? product.hoverImg : product.defaultImg}
                                        alt={`Product ${product.id}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FullCollection;