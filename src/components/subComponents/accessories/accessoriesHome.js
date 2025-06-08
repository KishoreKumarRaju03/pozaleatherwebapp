import { useParams, useNavigate } from 'react-router-dom';
import '../../../style/subComponentsStyle/accessoriesHomeStyle.css';
import WalletHome from './accessoriesSubComponents/walletHome';
import CardHolderHome from './accessoriesSubComponents/cardHolderHome';
import MicroBagsHome from './accessoriesSubComponents/microBagsHome';
import BeltsHome from './accessoriesSubComponents/beltsHome';
import { useEffect } from 'react';
import NavHead from '../../navHead';
import FooterSection from '../../footerSection';

const AccessoriesHome = () => {
    const { category = 'wallets' } = useParams(); 
    const navigate = useNavigate();


    useEffect(() => {
        const validCategories = ['wallets', 'card-holders-purses', 'micro-bags', 'belts'];
        if (!validCategories.includes(category)) {
            navigate('/accessories/wallets', { replace: true });
        }
    }, [category, navigate]);

    const handleCategoryChange = (newCategory) => {
        navigate(`/accessories/${newCategory}`);
    };

    const renderContent = () => {
        switch(category) {
            case 'wallets': 
                return <WalletHome key="wallets" />;
            case 'card-holders-purses':
                return <CardHolderHome key="card-holders" />;
            case 'micro-bags':
                return <MicroBagsHome key="micro-bags" />;
            case 'belts':
                return <BeltsHome key="belts" />;
            default:
                return null; 
        }
    };

    return (
        <>
        <NavHead />
            <div className="accessories-home-container">
                <h1 className="accessories-title">Accessories</h1>
                
                <div className="accessories-categories-nav">
                    <button 
                        className={`accessory-category ${category === 'wallets' ? 'active' : ''}`}
                        onClick={() => handleCategoryChange('wallets')}
                    >
                        Wallets
                    </button>
                    
                    <button 
                        className={`accessory-category ${category === 'card-holders-purses' ? 'active' : ''}`}
                        onClick={() => handleCategoryChange('card-holders-purses')}
                    >
                        Card holders & purse
                    </button>
                    
                    <button 
                        className={`accessory-category ${category === 'micro-bags' ? 'active' : ''}`}
                        onClick={() => handleCategoryChange('micro-bags')}
                    >
                        Micro bags
                    </button>
                    
                    <button 
                        className={`accessory-category ${category === 'belts' ? 'active' : ''}`}
                        onClick={() => handleCategoryChange('belts')}
                    >
                        Belts
                    </button>
                </div>

                <div className="accessories-content">
                    {renderContent()}
                </div>
            </div>
        <FooterSection />
        </>
    );
};

export default AccessoriesHome;