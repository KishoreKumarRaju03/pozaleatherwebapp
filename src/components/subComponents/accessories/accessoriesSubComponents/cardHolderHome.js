import React from 'react';
import '../../../../style/subComponentsStyle/cardHolderHomeStyle.css'; 

const CardHolderHome = () => {
    
    const cardHolder = [
        {
            image: '/images/micro-bags/mini-crossbody.jpg',
            name: 'Mini Crossbody',
            description: 'Compact crossbody bag with adjustable strap and front pocket'
        },
        {
            image: '/images/micro-bags/evening-clutch.jpg',
            name: 'Evening Clutch',
            description: 'Sparkly sequin clutch perfect for special occasions'
        },
        {
            image: '/images/micro-bags/belt-bag.jpg',
            name: 'Belt Bag',
            description: 'Hands-free waist bag with multiple compartments'
        },
        {
            image: '/images/micro-bags/leather-pouch.jpg',
            name: 'Leather Pouch',
            description: 'Soft leather pouch with magnetic snap closure'
        },
        {
            image: '/images/micro-bags/beaded-mini.jpg',
            name: 'Beaded Mini',
            description: 'Hand-beaded micro bag with delicate embroidery'
        },
        {
            image: '/images/micro-bags/chain-shoulder.jpg',
            name: 'Chain Shoulder',
            description: 'Mini bag with metal chain strap and logo plaque'
        },
        {
            image: '/images/micro-bags/clear-vinyl.jpg',
            name: 'Clear Vinyl',
            description: 'Trendy see-through bag with colorful lining'
        },
        {
            image: '/images/micro-bags/knit-mini.jpg',
            name: 'Knit Mini',
            description: 'Crocheted micro bag with leather accents'
        },
        {
            image: '/images/micro-bags/structured-box.jpg',
            name: 'Structured Box',
            description: 'Geometric mini bag with rigid frame'
        },
        {
            image: '/images/micro-bags/convertible-micro.jpg',
            name: 'Convertible Micro',
            description: 'Transforms from clutch to crossbody with included strap'
        },
        {
            image: '/images/micro-bags/logo-monogram.jpg',
            name: 'Logo Monogram',
            description: 'Signature print micro bag with detachable strap'
        },
        {
            image: '/images/micro-bags/quilted-mini.jpg',
            name: 'Quilted Mini',
            description: 'Diamond-stitched design with chain detail'
        },
        {
            image: '/images/micro-bags/animal-print.jpg',
            name: 'Animal Print',
            description: 'Faux fur micro bag with playful print'
        },
        {
            image: '/images/micro-bags/denim-mini.jpg',
            name: 'Denim Mini',
            description: 'Washed denim with contrast stitching and tassel'
        },
        {
            image: '/images/micro-bags/embellished-clutch.jpg',
            name: 'Embellished Clutch',
            description: 'Evening bag with crystal and pearl details'
        },
        {
            image: '/images/micro-bags/canvas-mini.jpg',
            name: 'Canvas Mini',
            description: 'Lightweight canvas with leather trim'
        },
        {
            image: '/images/micro-bags/metal-frame.jpg',
            name: 'Metal Frame',
            description: 'Structured mini with polished metal frame'
        },
        {
            image: '/images/micro-bags/printed-silk.jpg',
            name: 'Printed Silk',
            description: 'Luxury silk with artistic print and tassel zipper'
        },
        {
            image: '/images/micro-bags/ruched-mini.jpg',
            name: 'Ruched Mini',
            description: 'Textured fabric with gathered detailing'
        },
        {
            image: '/images/micro-bags/convertible-backpack.jpg',
            name: 'Micro Backpack',
            description: 'Tiny backpack that converts to shoulder bag'
        }
    ];
    return(
        <>
            <div className="cardHolder-home-container">
                <div className="cardHolder-home-content">
                    {cardHolder.map((bag, index) => (
                        <div key={index} className="cardHolder-item">
                            <img 
                                src={bag.image} 
                                alt={bag.name}
                                className="cardHolder-image"
                            />
                            <h3 className="cardHolder-name">{bag.name}</h3>
                            <p className="cardHolder-description">{bag.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CardHolderHome;