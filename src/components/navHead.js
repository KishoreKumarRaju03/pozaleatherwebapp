import { useEffect, useState } from 'react';
import '../style/componentStyle/navHeadStyle.css';
import { Link, useNavigate } from 'react-router-dom';

const NavHead = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [showAccessoriesDropdown, setShowAccessoriesDropdown] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Check authentication status on component mount
        const checkAuth = () => {
            const currentUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
            if (currentUser) {
                const user = JSON.parse(currentUser);
                setIsLoggedIn(true);
                setUserName(user.firstName); // Set the first name from user data
            } else {
                setIsLoggedIn(false);
                setUserName('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        checkAuth();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSignOut = () => {
        // Remove user data from storage
        localStorage.removeItem('currentUser');
        sessionStorage.removeItem('currentUser');
        // Update state
        setIsLoggedIn(false);
        setUserName('');
        // Redirect to home page
        navigate('/');
    };

    const toggleAccessoriesDropdown = (show) => {
        setShowAccessoriesDropdown(show);
    };

    return (
        <div className={`nav-header-container ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-header-container-desktop">
                <div className="nav-logo-container">
                    <div className={`nav-logo ${isScrolled ? 'scrolled' : ''}`}>
                        <div className={`nav-logo-content ${isScrolled ? 'scrolled' : ''}`}>
                            <a href='/' className='logo-anchor'>
                            <svg width="100%" height="100%" viewBox="0 0 1416 284" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 60H300C350 60 380 85 380 120V170C380 205 350 220 300 220H100V900Z" 
                                    stroke="currentColor" 
                                    strokeWidth="15" 
                                    strokeLinecap="round"
                                    strokeLinejoin="round" 
                                    fill="none"/>

                                <path d="M450 120C450 70 480 40 530 40C580 40 610 70 610 120V170C610 220 580 250 530 250C480 250 450 220 450 170V120Z" 
                                    stroke="currentColor" 
                                    strokeWidth="15" 
                                    strokeLinecap="round"
                                    strokeLinejoin="round" 
                                    fill="none"
                                    transform="translate(0, 20)"/>

                                <path d="M750 80H1150L750 265H1150" 
                                    stroke="currentColor" 
                                    strokeWidth="12" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                    transform="translate(-65, 0)"/>

                                <path d="M1300 300V120C1300 70 1320 40 1350 40C1380 40 1400 70 1400 120V320M1250 220H1450" 
                                    stroke="currentColor" 
                                    strokeWidth="12" 
                                    fill="none"
                                    transform="translate(-90, 15)"/>
                            </svg>
                            </a>
                        </div>
                    </div>
                    <div className='nav-header-menus-container'>
                        <div className='nav-header-menu'>
                            <div className='nav-header-left'>
                                <div className='nav-header-menu-item'>
                                    {/* <Link to="/news"><span>News</span></Link> */}
                                    <Link to="/bags"><span>Bags</span></Link>
                                    <Link to="/events"><span>Events</span></Link>
                                    <Link to="/services"><span>Services</span></Link>
                                    <Link to="/create-your-own"><span>customize</span></Link>
                                    <Link to='/contact-us'><span>Contact Us</span></Link>
                                    <Link to='/user-interaction'><span>User Interaction</span></Link>
                                    <div 
                                        className="accessories-dropdown-container"
                                        onMouseEnter={() => toggleAccessoriesDropdown(true)}
                                        onMouseLeave={() => toggleAccessoriesDropdown(false)}
                                    >
                                        <Link to="/accessories" className="accessories-main-link">
                                            <span>Accessories</span>
                                        </Link>
                                        {showAccessoriesDropdown && (
                                            <div className="accessories-dropdown-menu">
                                                <Link to="/accessories/wallets"><span>Wallets</span></Link>
                                                <Link to="/accessories/card-holders-purses"><span>Card holders & purse</span></Link>
                                                <Link to="/accessories/micro-bags"><span>Micro bags</span></Link>
                                                <Link to="/accessories/belts"><span>Belts</span></Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='nav-header-right'>
                                <div className='nav-header-menu-item'>
                                    <Link to="/" className="home-link">
                                    <span>Home</span>
                                    </Link>
                                    {isLoggedIn && (
                                    <div className="user-greeting">
                                        Welcome, {userName}
                                    </div>
                                    )}
                                    {!isLoggedIn ? (
                                    <>
                                        <Link to="/signin"><span>Sign In</span></Link>
                                        <Link to="/signup"><span>Sign Up</span></Link>
                                    </>
                                    ) : (
                                    <button onClick={handleSignOut} className="sign-out-button">
                                        Sign Out
                                    </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='nav-line'></div>
                </div>
            </div>
        </div>
    );
};

export default NavHead;

// // ... (previous imports remain the same)

// const NavHead = () => {
//     // ... (previous state declarations remain the same)

//     return (
//         <div className={`nav-header-container ${isScrolled ? 'scrolled' : ''}`}>
//             {/* ... (previous JSX remains the same until the accessories dropdown) */}
//             <div 
//                 className="accessories-dropdown-container"
//                 onMouseEnter={() => toggleAccessoriesDropdown(true)}
//                 onMouseLeave={() => toggleAccessoriesDropdown(false)}
//             >
//                 <Link to="/accessories" className="accessories-main-link">
//                     <span>Accessories</span>
//                 </Link>
//                 {showAccessoriesDropdown && (
//                     <div className="accessories-dropdown-menu">
//                         <Link to="/accessories/wallets"><span>Wallets</span></Link>
//                         <Link to="/accessories/card-holders-purses"><span>Card holders & purse</span></Link>
//                         <Link to="/accessories/micro-bags"><span>Micro bags</span></Link>
//                         <Link to="/accessories/pouch"><span>Pouch</span></Link>
//                         <Link to="/accessories/belts"><span>Belts</span></Link>
//                         <Link to="/accessories/keyrings-jewellery-bags"><span>Keyrings & jewellery bags</span></Link>
//                     </div>
//                 )}
//             </div>
//             {/* ... (rest of the JSX remains the same) */}
//         </div>
//     );
// };

// export default NavHead;