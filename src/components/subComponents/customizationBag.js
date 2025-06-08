// CustomizationBag.js
import React, { useState } from 'react';
import '../../style/subComponentsStyle/customizationBagStyle.css';
import img1 from '../../asset/corporateGifts/exampleimage/image2.webp';
import img2 from '../../asset/instagram section/image-4.jpg';
import img3 from '../../asset/collection-item/handbag-item-2-hover.webp';
import NavHead from '../navHead';
import FooterSection from '../footerSection';

const CustomizationBag = () => {
  const [activeTab, setActiveTab] = useState('leather');
  const [selectedOptions, setSelectedOptions] = useState({
    leather: null,
    lining: null,
    accessories: null,
    color: null
  });

  // Sample data for options
  const options = {
    leather: [
      { id: 1, name: 'Full Grain Leather', image: img1 },
      { id: 2, name: 'Top Grain Leather', image: img1 },
      { id: 3, name: 'Genuine Leather', image: img1 },
    ],
    lining: [
      { id: 1, name: 'Silk Lining', image: img2 },
      { id: 2, name: 'Cotton Lining', image: img2 },
      { id: 3, name: 'Satin Lining', image: img2 },
    ],
    accessories: [
      { id: 1, name: 'Gold Hardware', image: img3 },
      { id: 2, name: 'Silver Hardware', image: img3 },
      { id: 3, name: 'Matte Black Hardware', image: img3 },
    ],
    color: [
      { id: 1, name: 'Black', colorCode: '#000000' },
      { id: 2, name: 'Brown', colorCode: '#8B4513' },
      { id: 3, name: 'Burgundy', colorCode: '#800020' },
    ]
  };

  const handleOptionSelect = (category, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [category]: option
    });
  };

  return (
    <>
    <NavHead />
    <div className="customization-container">
      <div className="customization-sidebar">
        <h2>Customize Your Bag</h2>
        <ul className="customization-menu">
          <li 
            className={`menu-item ${activeTab === 'leather' ? 'active' : ''}`}
            onClick={() => setActiveTab('leather')}
          >
            Leather Material
          </li>
          <li 
            className={`menu-item ${activeTab === 'lining' ? 'active' : ''}`}
            onClick={() => setActiveTab('lining')}
          >
            Lining Material
          </li>
          <li 
            className={`menu-item ${activeTab === 'accessories' ? 'active' : ''}`}
            onClick={() => setActiveTab('accessories')}
          >
            Accessories
          </li>
          <li 
            className={`menu-item ${activeTab === 'color' ? 'active' : ''}`}
            onClick={() => setActiveTab('color')}
          >
            Color
          </li>
        </ul>
      </div>

      <div className="customization-options">
        <h3>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Options</h3>
        <div className="options-grid">
          {options[activeTab].map(option => (
            <div 
              key={option.id}
              className={`option-card ${selectedOptions[activeTab]?.id === option.id ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(activeTab, option)}
            >
              {activeTab === 'color' ? (
                <div className="color-option" style={{ backgroundColor: option.colorCode }}></div>
              ) : (
                <img src={option.image} alt={option.name} className="option-image" />
              )}
              <p>{option.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="customization-preview">
        <h3>Your Custom Bag</h3>
        <div className="bag-preview">
          <div className="bag-base">
            {/* Main bag body that changes based on leather/color selection */}
            <div 
              className="bag-body"
              style={{ 
                backgroundColor: selectedOptions.color?.colorCode || '#f5f5f5',
                backgroundImage: selectedOptions.leather ? `url(${selectedOptions.leather.image})` : 'none',
                backgroundSize: 'cover'
              }}
            >
              {/* Bag flap that shows lining material when opened */}
              <div 
                className="bag-flap"
                style={{ 
                  backgroundColor: selectedOptions.lining ? '#f5f5f5' : 'transparent',
                  backgroundImage: selectedOptions.lining ? `url(${selectedOptions.lining.image})` : 'none',
                  backgroundSize: 'cover'
                }}
              ></div>
              
              {/* Bag handles */}
              <div className="bag-handles">
                <div 
                  className="bag-handle left"
                  style={{ 
                    backgroundColor: selectedOptions.color?.colorCode || '#333',
                    backgroundImage: selectedOptions.leather ? `url(${selectedOptions.leather.image})` : 'none',
                    backgroundSize: 'cover'
                  }}
                ></div>
                <div 
                  className="bag-handle right"
                  style={{ 
                    backgroundColor: selectedOptions.color?.colorCode || '#333',
                    backgroundImage: selectedOptions.leather ? `url(${selectedOptions.leather.image})` : 'none',
                    backgroundSize: 'cover'
                  }}
                ></div>
              </div>
              
              {/* Bag hardware (buckles, zippers, etc.) */}
              {selectedOptions.accessories && (
                <div className="bag-hardware">
                  <div 
                    className="hardware-piece front-buckle"
                    style={{ 
                      backgroundColor: selectedOptions.accessories.name.includes('Gold') ? '#D4AF37' :
                                    selectedOptions.accessories.name.includes('Silver') ? '#C0C0C0' : '#333'
                    }}
                  ></div>
                  <div 
                    className="hardware-piece side-zipper"
                    style={{ 
                      backgroundColor: selectedOptions.accessories.name.includes('Gold') ? '#D4AF37' :
                                    selectedOptions.accessories.name.includes('Silver') ? '#C0C0C0' : '#333'
                    }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="selected-options-summary">
          <h4>Selected Options:</h4>
          <ul>
            {Object.entries(selectedOptions).map(([key, value]) => (
              value && <li key={key}>{key}: {value.name}</li>
            ))}
          </ul>
        </div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
    <FooterSection />
    </>
  );
};

export default CustomizationBag;