import { useEffect, useState, useMemo, useRef } from 'react';
import '../../../style/subComponentsStyle/womensBagContentStyle.css';
import NavHead from '../../navHead';
import FooterSection from '../../footerSection';

const WomensBagContent = () => {
    const [bags, setBags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortOption, setSortOption] = useState('featured');
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const dropdownRef = useRef(null);
    const filtersRef = useRef(null);
    
    // Filter states
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedLeatherTypes, setSelectedLeatherTypes] = useState([]);
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const [selectedClosures, setSelectedClosures] = useState([]);
    const [selectedPersonalizations, setSelectedPersonalizations] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 1000]);

    // Extract all unique filter options from products
    const filterOptions = useMemo(() => {
        const colors = new Set();
        const leatherTypes = new Set();
        const features = new Set();
        const closures = new Set();
        const personalizations = new Set();

        bags.forEach(bag => {
            bag.color?.forEach(c => colors.add(c));
            leatherTypes.add(bag.leatherType);
            bag.features?.forEach(f => features.add(f));
            closures.add(bag.closure);
            bag.personalization?.forEach(p => personalizations.add(p));
        });

        return {
            colors: Array.from(colors).sort(),
            leatherTypes: Array.from(leatherTypes).sort(),
            features: Array.from(features).sort(),
            closures: Array.from(closures).sort(),
            personalizations: Array.from(personalizations).sort()
        };
    }, [bags]);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsSortOpen(false);
            }
            if (filtersRef.current && !filtersRef.current.contains(event.target) && 
                !event.target.closest('.filter-toggle')) {
                setShowFilters(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const fetchBags = async () => {
            try {
                const response = await import('../../../JSON/womenBags.json');
                const data = response.default?.products || response.products || response.default || response;
                setBags(Array.isArray(data) ? data : []);
            } catch (err) {
                setError(err.message);
                console.error("Failed to load bags:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchBags();
    }, []);

    // Filter and sort the bags
    const filteredBags = useMemo(() => {
        let filtered = [...bags];
        
        // Apply filters
        if (selectedColors.length > 0) {
            filtered = filtered.filter(bag => 
                bag.color?.some(color => selectedColors.includes(color))
            );
        }
        
        if (selectedLeatherTypes.length > 0) {
            filtered = filtered.filter(bag => 
                selectedLeatherTypes.includes(bag.leatherType)
            );
        }
        
        if (selectedFeatures.length > 0) {
            filtered = filtered.filter(bag => 
                selectedFeatures.every(feature => bag.features?.includes(feature))
            );
        }
        
        if (selectedClosures.length > 0) {
            filtered = filtered.filter(bag => 
                selectedClosures.includes(bag.closure)
            );
        }
        
        if (selectedPersonalizations.length > 0) {
            filtered = filtered.filter(bag => 
                selectedPersonalizations.every(p => bag.personalization?.includes(p))
            );
        }
        
        // Filter by price range
        filtered = filtered.filter(bag => 
            bag.price >= priceRange[0] && bag.price <= priceRange[1]
        );
        
        // Sort the bags
        switch(sortOption) {
            case 'price-ascending':
                return filtered.sort((a, b) => a.price - b.price);
            case 'price-descending':
                return filtered.sort((a, b) => b.price - a.price);
            case 'featured':
            default:
                return filtered;
        }
    }, [
        bags, 
        selectedColors, 
        selectedLeatherTypes, 
        selectedFeatures, 
        selectedClosures, 
        selectedPersonalizations, 
        priceRange, 
        sortOption
    ]);

    const toggleSortDropdown = (e) => {
        e.stopPropagation();
        setIsSortOpen(!isSortOpen);
    };

    const handleSortChange = (option) => {
        setSortOption(option);
        setIsSortOpen(false);
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const toggleFilterOption = (filterType, value) => {
        const setters = {
            color: setSelectedColors,
            leatherType: setSelectedLeatherTypes,
            feature: setSelectedFeatures,
            closure: setSelectedClosures,
            personalization: setSelectedPersonalizations
        };
        
        const currentValues = {
            color: selectedColors,
            leatherType: selectedLeatherTypes,
            feature: selectedFeatures,
            closure: selectedClosures,
            personalization: selectedPersonalizations
        }[filterType];
        
        setters[filterType](
            currentValues.includes(value)
                ? currentValues.filter(v => v !== value)
                : [...currentValues, value]
        );
    };

    const clearAllFilters = () => {
        setSelectedColors([]);
        setSelectedLeatherTypes([]);
        setSelectedFeatures([]);
        setSelectedClosures([]);
        setSelectedPersonalizations([]);
        setPriceRange([0, 1000]);
    };

    const handlePriceChange = (e, index) => {
        const newPriceRange = [...priceRange];
        newPriceRange[index] = parseInt(e.target.value);
        setPriceRange(newPriceRange);
    };

    // Memoized product list
    const productList = useMemo(() => {
        return Array.isArray(filteredBags) && filteredBags.length > 0 ? (
            filteredBags.map((bag) => (
                <ProductCard key={bag.id} bag={bag} />
            ))
        ) : (
            <div className="no-products">No bags found matching your filters</div>
        );
    }, [filteredBags]);

    if (loading) return <div className="loading">Loading bags...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <>
            <div className='womens-bag-header'>
                <h1>Women's</h1>
                <p>Home / <span style={{color: '#000'}}>Women</span></p>
            </div>
            
            <div className="filters-container">
                <div className={`main-content ${showFilters ? 'filters-open' : ''}`}>
                    {/* Filter Sidebar */}
                    {showFilters && (
                        <div ref={filtersRef} className="filters-sidebar">
                            <div className="filter-header">
                                <h3>Filters</h3>
                                <button 
                                    className="clear-all-btn"
                                    onClick={clearAllFilters}
                                >
                                    Clear All
                                </button>
                            </div>
                            
                            {/* Color Filter */}
                            <FilterDropdown 
                                title="Color"
                                options={filterOptions.colors}
                                selectedOptions={selectedColors}
                                onToggle={(value) => toggleFilterOption('color', value)}
                            />
                            
                            {/* Leather Type Filter */}
                            <FilterDropdown 
                                title="Leather Type"
                                options={filterOptions.leatherTypes}
                                selectedOptions={selectedLeatherTypes}
                                onToggle={(value) => toggleFilterOption('leatherType', value)}
                            />
                            
                            {/* Features Filter */}
                            <FilterDropdown 
                                title="Features"
                                options={filterOptions.features}
                                selectedOptions={selectedFeatures}
                                onToggle={(value) => toggleFilterOption('feature', value)}
                            />
                            
                            {/* Closure Filter */}
                            <FilterDropdown 
                                title="Closure"
                                options={filterOptions.closures}
                                selectedOptions={selectedClosures}
                                onToggle={(value) => toggleFilterOption('closure', value)}
                            />
                            
                            {/* Personalization Filter */}
                            <FilterDropdown 
                                title="Personalization"
                                options={filterOptions.personalizations}
                                selectedOptions={selectedPersonalizations}
                                onToggle={(value) => toggleFilterOption('personalization', value)}
                            />
                            
                            {/* Price Range Filter */}
                            <div className="filter-section">
                                <h4 className="filter-title">Price Range</h4>
                                <div className="price-range-filter">
                                    <div className="price-inputs">
                                        <input 
                                            type="number" 
                                            min="0" 
                                            max="1000" 
                                            value={priceRange[0]}
                                            onChange={(e) => handlePriceChange(e, 0)}
                                            className="price-input"
                                        />
                                        <span>-</span>
                                        <input 
                                            type="number" 
                                            min="0" 
                                            max="1000" 
                                            value={priceRange[1]}
                                            onChange={(e) => handlePriceChange(e, 1)}
                                            className="price-input"
                                        />
                                    </div>
                                    <input 
                                        type="range" 
                                        min="0" 
                                        max="1000" 
                                        step="50" 
                                        value={priceRange[1]}
                                        onChange={(e) => handlePriceChange(e, 1)}
                                        className="price-slider"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* Products Section */}
                    <div className="products-section">
                        <div className="product-controls">
                            <button 
                                className="filter-toggle"
                                onClick={toggleFilters}
                            >
                                {showFilters ? (
                                    <>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 1H1L7 8V14L9 16V8L15 1Z" fill="currentColor"/>
                                        </svg>
                                        Hide Filters
                                    </>
                                ) : (
                                    <>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 1H1L7 8V14L9 16V8L15 1Z" fill="currentColor"/>
                                        </svg>
                                        Show Filters
                                    </>
                                )}
                            </button>
                            
                            {/* Sort Dropdown */}
                            <div className="sort-dropdown" ref={dropdownRef}>
                                <button 
                                    className="sort-button"
                                    onClick={toggleSortDropdown}
                                >
                                    <span>Sort by: </span>
                                    <span className="sort-option">
                                        {sortOption === 'featured' && 'Featured'}
                                        {sortOption === 'price-ascending' && 'Price: Low to High'}
                                        {sortOption === 'price-descending' && 'Price: High to Low'}
                                    </span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L1 4L1.7 3.3L6 7.6L10.3 3.3L11 4L6 9Z" fill="currentColor"/>
                                    </svg>
                                </button>
                                
                                {isSortOpen && (
                                    <div className="sort-options">
                                        <button 
                                            className={`sort-option ${sortOption === 'featured' ? 'active' : ''}`}
                                            onClick={() => handleSortChange('featured')}
                                        >
                                            Featured
                                        </button>
                                        <button 
                                            className={`sort-option ${sortOption === 'price-ascending' ? 'active' : ''}`}
                                            onClick={() => handleSortChange('price-ascending')}
                                        >
                                            Price: Low to High
                                        </button>
                                        <button 
                                            className={`sort-option ${sortOption === 'price-descending' ? 'active' : ''}`}
                                            onClick={() => handleSortChange('price-descending')}
                                        >
                                            Price: High to Low
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        {/* Active Filters */}
                        {(selectedColors.length > 0 || selectedLeatherTypes.length > 0 || 
                         selectedFeatures.length > 0 || selectedClosures.length > 0 || 
                         selectedPersonalizations.length > 0 || priceRange[1] < 1000) && (
                            <div className="active-filters">
                                {selectedColors.map(color => (
                                    <FilterChip 
                                        key={`color-${color}`}
                                        label={`Color: ${color}`}
                                        onRemove={() => toggleFilterOption('color', color)}
                                    />
                                ))}
                                
                                {selectedLeatherTypes.map(type => (
                                    <FilterChip 
                                        key={`leather-${type}`}
                                        label={`Leather: ${type}`}
                                        onRemove={() => toggleFilterOption('leatherType', type)}
                                    />
                                ))}
                                
                                {selectedFeatures.map(feature => (
                                    <FilterChip 
                                        key={`feature-${feature}`}
                                        label={`Feature: ${feature}`}
                                        onRemove={() => toggleFilterOption('feature', feature)}
                                    />
                                ))}
                                
                                {selectedClosures.map(closure => (
                                    <FilterChip 
                                        key={`closure-${closure}`}
                                        label={`Closure: ${closure}`}
                                        onRemove={() => toggleFilterOption('closure', closure)}
                                    />
                                ))}
                                
                                {selectedPersonalizations.map(personalization => (
                                    <FilterChip 
                                        key={`personalization-${personalization}`}
                                        label={`Personalization: ${personalization}`}
                                        onRemove={() => toggleFilterOption('personalization', personalization)}
                                    />
                                ))}
                                
                                {(priceRange[0] > 0 || priceRange[1] < 1000) && (
                                    <FilterChip 
                                        label={`Price: $${priceRange[0]} - $${priceRange[1]}`}
                                        onRemove={() => setPriceRange([0, 1000])}
                                    />
                                )}
                                
                                <button 
                                    className="clear-all-btn"
                                    onClick={clearAllFilters}
                                >
                                    Clear All
                                </button>
                            </div>
                        )}
                        
                        {/* Product Grid */}
                        <div className="product-grid">
                            {productList}
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

// Dropdown Filter Component
const FilterDropdown = ({ title, options, selectedOptions, onToggle }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className={`filter-section ${isOpen ? 'open' : ''}`}>
            <div className="filter-header" onClick={() => setIsOpen(!isOpen)}>
                <h4 className="filter-title">{title}</h4>
                <svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 12 12" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={`dropdown-icon ${isOpen ? 'open' : ''}`}
                >
                    <path d="M6 9L1 4L1.7 3.3L6 7.6L10.3 3.3L11 4L6 9Z" fill="currentColor"/>
                </svg>
            </div>
            
            {isOpen && (
                <div className="filter-options-container">
                    {options.map(option => (
                        <div key={option} className="filter-option">
                            <input
                                type="checkbox"
                                id={`${title}-${option}`}
                                checked={selectedOptions.includes(option)}
                                onChange={() => onToggle(option)}
                                className="filter-checkbox"
                            />
                            <label htmlFor={`${title}-${option}`} className="filter-label">
                                {option}
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// Filter Chip Component
const FilterChip = ({ label, onRemove }) => {
    return (
        <div className="filter-chip">
            <span>{label}</span>
            <button onClick={onRemove} className="filter-chip-remove">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1L1 9M1 1L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </button>
        </div>
    );
};

// Product Card Component
const ProductCard = ({ bag }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
        <div className="bag-card">
            <div className="image-container">
                {!imageLoaded && !imageError && (
                    <div className="image-placeholder" />
                )}
                <img 
                    src={imageError ? '/path/to/placeholder-image.jpg' : bag.image}
                    alt={bag.name}
                    className={`bag-image ${imageLoaded ? 'loaded' : ''}`}
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                />
                {bag.discountPrice && (
                    <div className="sale-badge">Sale</div>
                )}
            </div>
            <div className="bag-details">
                <h3 className="bag-name">{bag.name}</h3>
                <div className="bag-price">
                    {bag.discountPrice ? (
                        <>
                            <span className="original-price">${bag.price}</span>
                            <span className="discounted-price"> ${bag.discountPrice}</span>
                        </>
                    ) : (
                        `$${bag.price}`
                    )}
                </div>
                <div className="bag-category">{bag.category}</div>
            </div>
        </div>
    );
};

export default WomensBagContent;