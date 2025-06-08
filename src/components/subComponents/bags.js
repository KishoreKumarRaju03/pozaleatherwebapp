import { useNavigate, Outlet } from 'react-router-dom';
import FooterSection from "../footerSection";
import NavHead from "../navHead";
import womenBag from "../../asset/womenBags/womenBag-profile-picture.avif";
import menBag from "../../asset/menBags/mensBag-profile-picture.jpg";
import '../../style/subComponentsStyle/bagsContainerStyle.css';
import { useLocation } from 'react-router-dom';

const BagsContainer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Check if we're on the base /bags path
    const isBasePath = location.pathname === '/bags';

    return (
        <>
            <NavHead />
            <div className="bags-main-container">
                {isBasePath ? (
                    <div className="Bags-section-container">
                        <div className="bags-section-content">
                            <div 
                                className="bags-section-left" 
                                onClick={() => navigate('/bags/women-bags')}
                                style={{ cursor: 'pointer' }}
                            >
                                <h1>WOMEN</h1>
                                <img src={womenBag} alt="women-bag" />
                            </div>
                            <div className="bags-section-vertical-line"></div>
                            <div 
                                className="bags-section-right" 
                                onClick={() => navigate('/bags/men-bags')}
                                style={{ cursor: 'pointer' }}
                            >
                                <h1>MEN</h1>
                                <img src={menBag} alt="men-bag" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <Outlet /> // This will render WomensBagContent or MensBagContent
                )}
            </div>
            <FooterSection />
        </>
    );
};

export default BagsContainer;