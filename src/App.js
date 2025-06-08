import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './containers/home';
import SignIn from './components/subComponents/signIn';
import SignUp from './components/subComponents/signUp';
import BagsContainer from './components/subComponents/bags';
import WomensBagContent from './components/subComponents/bagsComponent/womensBagComponent';
import MensBagContent from './components/subComponents/bagsComponent/mensBagComponent';
import LeatherBagCustomizer from './components/subComponents/customizationBag';
import CorporateGifts from './components/subComponents/events';
import Services from './components/subComponents/services';
import ContactUs from './components/subComponents/contactUs';
import UserInteraction from './components/subComponents/userInteraction';
import AccessoriesHome from './components/subComponents/accessories/accessoriesHome';
import WalletHome from './components/subComponents/accessories/accessoriesSubComponents/walletHome';
import MicroBagsHome from './components/subComponents/accessories/accessoriesSubComponents/microBagsHome';
import CardHolderHome from './components/subComponents/accessories/accessoriesSubComponents/cardHolderHome';
import BeltsHome from './components/subComponents/accessories/accessoriesSubComponents/beltsHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bags" element={<BagsContainer />}>
          <Route path="women-bags" element={<WomensBagContent />} />
          <Route path="men-bags" element={<MensBagContent />} />
        </Route>
        <Route path="/create-your-own" element={<LeatherBagCustomizer />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path="/user-interaction" element={<UserInteraction />} />
        <Route path="/events" element={<CorporateGifts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
        
          <Route path="/accessories">
            <Route index element={<Navigate to="wallets" replace />} />
            <Route path=":category" element={<AccessoriesHome />} />
          </Route>

      </Routes>
    </Router>
  );
}

export default App;