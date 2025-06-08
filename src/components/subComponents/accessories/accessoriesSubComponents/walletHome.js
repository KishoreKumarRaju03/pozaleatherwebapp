import React from 'react';
import '../../../../style/subComponentsStyle/walletHomeStyle.css'; 


const WalletHome = () => {
    
    const wallets = [
        {
            image: '/images/wallets/classic-brown.jpg',
            name: 'Classic Brown Wallet',
            description: 'Genuine leather wallet with multiple card slots and cash compartment'
        },
        {
            image: '/images/wallets/slim-black.jpg',
            name: 'Slim Black Wallet',
            description: 'Minimalist design with RFID protection and 4 card slots'
        },
        {
            image: '/images/wallets/premium-tan.jpg',
            name: 'Premium Tan Wallet',
            description: 'Handcrafted full-grain leather with distressed finish'
        },
        {
            image: '/images/wallets/travel-wallet.jpg',
            name: 'Travel Wallet',
            description: 'Passport holder with multiple compartments for travel essentials'
        },
        {
            image: '/images/wallets/bifold-cognac.jpg',
            name: 'Bifold Cognac',
            description: 'Traditional bifold design with coin pocket and ID window'
        },
        {
            image: '/images/wallets/money-clip.jpg',
            name: 'Money Clip Wallet',
            description: 'Slim metal money clip with leather card holder'
        },
        {
            image: '/images/wallets/zipper-wallet.jpg',
            name: 'Zipper Wallet',
            description: 'Secure zippered closure with multiple internal pockets'
        },
        {
            image: '/images/wallets/eco-vegan.jpg',
            name: 'Eco Vegan Wallet',
            description: 'Sustainable plant-based materials with recycled lining'
        },
        {
            image: '/images/wallets/trifold-gray.jpg',
            name: 'Trifold Gray',
            description: 'Compact trifold design with quick-access card slot'
        },
        {
            image: '/images/wallets/luxury-gold.jpg',
            name: 'Luxury Gold Trim',
            description: 'Premium leather with gold foil accents and monogramming'
        },
        {
            image: '/images/wallets/outdoor-nylon.jpg',
            name: 'Outdoor Nylon',
            description: 'Water-resistant nylon with secure zipper closure'
        },
        {
            image: '/images/wallets/vintage-cowhide.jpg',
            name: 'Vintage Cowhide',
            description: 'Naturally textured leather with unique markings'
        },
        {
            image: '/images/wallets/executive-black.jpg',
            name: 'Executive Black',
            description: 'Professional style with business card holder'
        },
        {
            image: '/images/wallets/compact-cardholder.jpg',
            name: 'Compact Cardholder',
            description: 'Ultra-slim design holds 2-4 essential cards'
        },
        {
            image: '/images/wallets/italian-stitched.jpg',
            name: 'Italian Stitched',
            description: 'Hand-stitched edges with contrast threading'
        },
        {
            image: '/images/wallets/checkbook-wallet.jpg',
            name: 'Checkbook Wallet',
            description: 'Large format with checkbook slot and pen holder'
        },
        {
            image: '/images/wallets/safari-print.jpg',
            name: 'Safari Print',
            description: 'Exotic animal print pattern with secure snap closure'
        },
        {
            image: '/images/wallets/tech-smart.jpg',
            name: 'Tech Smart Wallet',
            description: 'Built-in tracking chip and wireless charging compatible'
        },
        {
            image: '/images/wallets/artist-series.jpg',
            name: 'Artist Series',
            description: 'Limited edition with hand-painted artwork'
        },
        {
            image: '/images/wallets/custom-monogram.jpg',
            name: 'Custom Monogram',
            description: 'Personalized with your initials in gold foil'
        }
    ];

    return (
        <div className="wallet-home-container">
            <div className="wallet-home-content">
                {wallets.map((wallet, index) => (
                    <div key={index} className="wallet-item">
                        <img 
                            src={wallet.image} 
                            alt={wallet.name}
                            className="wallet-image"
                        />
                        <h3 className="wallet-name">{wallet.name}</h3>
                        <p className="wallet-description">{wallet.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WalletHome;