import { useEffect, useState, useMemo, useRef } from 'react';
import '../../../style/subComponentsStyle/mensBagContentStyle.css';
import { MenProductImages } from '../../../imagesLinkJS/mensBagImages';
import NavHead from '../../navHead';
import FooterSection from '../../footerSection';

const MensBagContent = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortOption, setSortOption] = useState('featured');
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const dropdownRef = useRef(null);
    const filtersRef = useRef(null);
    
    // Filter states
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedMaterials, setSelectedMaterials] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 500]);

    // Extract all unique filter options from products
    const filterOptions = useMemo(() => {
        const categories = new Set();
        const colors = new Set();
        const materials = new Set();

        products.forEach(product => {
            categories.add(product.category);
            product.color?.forEach(c => colors.add(c));
            materials.add(product.material);
        });

        return {
            categories: Array.from(categories).sort(),
            colors: Array.from(colors).sort(),
            materials: Array.from(materials).sort()
        };
    }, [products]);

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
        const fetchProducts = async () => {
            try {
                const response = await import('../../../JSON/menBags.json');
                const data = response.default?.products || response.products || response.default || response;
                setProducts(Array.isArray(data) ? data : []);
            } catch (err) {
                setError(err.message);
                console.error("Failed to load products:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    // Filter and sort the products
    const filteredProducts = useMemo(() => {
        let filtered = [...products];
        
        // Apply category filters
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(product => 
                selectedCategories.includes(product.category)
            );
        }
        
        // Apply color filters
        if (selectedColors.length > 0) {
            filtered = filtered.filter(product => 
                product.color?.some(color => selectedColors.includes(color))
            );
        }
        
        // Apply material filters
        if (selectedMaterials.length > 0) {
            filtered = filtered.filter(product => 
                selectedMaterials.includes(product.material)
            );
        }
        
        // Filter by price range
        filtered = filtered.filter(product => 
            product.price >= priceRange[0] && product.price <= priceRange[1]
        );
        
        // Sort the products
        switch(sortOption) {
            case 'price-ascending':
                return filtered.sort((a, b) => a.price - b.price);
            case 'price-descending':
                return filtered.sort((a, b) => b.price - a.price);
            case 'rating':
                return filtered.sort((a, b) => b.rating - a.rating);
            case 'featured':
            default:
                return filtered;
        }
    }, [products, selectedCategories, selectedColors, selectedMaterials, priceRange, sortOption]);

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
            category: setSelectedCategories,
            color: setSelectedColors,
            material: setSelectedMaterials
        };
        
        const currentValues = {
            category: selectedCategories,
            color: selectedColors,
            material: selectedMaterials
        }[filterType];
        
        setters[filterType](
            currentValues.includes(value)
                ? currentValues.filter(v => v !== value)
                : [...currentValues, value]
        );
    };

    const handlePriceChange = (e, index) => {
        const newPriceRange = [...priceRange];
        newPriceRange[index] = parseInt(e.target.value);
        setPriceRange(newPriceRange);
    };

    const clearAllFilters = () => {
        setSelectedCategories([]);
        setSelectedColors([]);
        setSelectedMaterials([]);
        setPriceRange([0, 500]);
    };

    // Memoized product list
    const productList = useMemo(() => {
        return Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))
        ) : (
            <div className="no-products">No products found matching your filters</div>
        );
    }, [filteredProducts]);

    if (loading) return <div className="loading">Loading products...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <>
            <div className='mens-bag-header'>
                <h1>Men's Accessories</h1>
                <p>Home / <span style={{color: '#000'}}>Men</span></p>
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
                            
                            {/* Category Filter */}
                            <FilterDropdown 
                                title="Category"
                                options={filterOptions.categories}
                                selectedOptions={selectedCategories}
                                onToggle={(value) => toggleFilterOption('category', value)}
                            />
                            
                            {/* Color Filter */}
                            <FilterDropdown 
                                title="Color"
                                options={filterOptions.colors}
                                selectedOptions={selectedColors}
                                onToggle={(value) => toggleFilterOption('color', value)}
                            />
                            
                            {/* Material Filter */}
                            <FilterDropdown 
                                title="Material"
                                options={filterOptions.materials}
                                selectedOptions={selectedMaterials}
                                onToggle={(value) => toggleFilterOption('material', value)}
                            />
                            
                            {/* Price Range Filter */}
                            <div className="filter-section">
                                <h4 className="filter-title">Price Range</h4>
                                <div className="price-range-filter">
                                    <div className="price-inputs">
                                        <input 
                                            type="number" 
                                            min="0" 
                                            max="500" 
                                            value={priceRange[0]}
                                            onChange={(e) => handlePriceChange(e, 0)}
                                            className="price-input"
                                            placeholder="Min"
                                        />
                                        <span>-</span>
                                        <input 
                                            type="number" 
                                            min="0" 
                                            max="500" 
                                            value={priceRange[1]}
                                            onChange={(e) => handlePriceChange(e, 1)}
                                            className="price-input"
                                            placeholder="Max"
                                        />
                                    </div>
                                    <input 
                                        type="range" 
                                        min="0" 
                                        max="500" 
                                        step="10" 
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
                                        {sortOption === 'rating' && 'Rating'}
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
                                        <button 
                                            className={`sort-option ${sortOption === 'rating' ? 'active' : ''}`}
                                            onClick={() => handleSortChange('rating')}
                                        >
                                            Rating
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        {/* Active Filters */}
                        {(selectedCategories.length > 0 || selectedColors.length > 0 || 
                         selectedMaterials.length > 0 || priceRange[1] < 500) && (
                            <div className="active-filters">
                                {selectedCategories.map(category => (
                                    <FilterChip 
                                        key={`category-${category}`}
                                        label={`Category: ${category}`}
                                        onRemove={() => toggleFilterOption('category', category)}
                                    />
                                ))}
                                
                                {selectedColors.map(color => (
                                    <FilterChip 
                                        key={`color-${color}`}
                                        label={`Color: ${color}`}
                                        onRemove={() => toggleFilterOption('color', color)}
                                    />
                                ))}
                                
                                {selectedMaterials.map(material => (
                                    <FilterChip 
                                        key={`material-${material}`}
                                        label={`Material: ${material}`}
                                        onRemove={() => toggleFilterOption('material', material)}
                                    />
                                ))}
                                
                                {(priceRange[0] > 0 || priceRange[1] < 500) && (
                                    <FilterChip 
                                        label={`Price: $${priceRange[0]} - $${priceRange[1]}`}
                                        onRemove={() => setPriceRange([0, 500])}
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
            
            {/* <FooterSection /> */}
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
const ProductCard = ({ product }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
        <div className="product-card">
            <div className="image-container">
                {!imageLoaded && !imageError && (
                    <div className="image-placeholder" />
                )}
                <img 
                    src={imageError ? '/path/to/placeholder-image.jpg' : MenProductImages[product.image]}
                    alt={product.name}
                    className={`product-image ${imageLoaded ? 'loaded' : ''}`}
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                />
                {product.discountPrice && (
                    <div className="sale-badge">Sale</div>
                )}
            </div>
            <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-category">{product.category}</div>
                <div className="product-price">
                    {product.discountPrice ? (
                        <>
                            <span className="original-price">${product.price}</span>
                            <span className="discounted-price"> ${product.discountPrice}</span>
                        </>
                    ) : (
                        `$${product.price}`
                    )}
                </div>
                <div className="product-rating">
                    {Array(5).fill().map((_, i) => (
                        <svg 
                            key={i}
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill={i < Math.floor(product.rating) ? "#FFD700" : "#DDD"}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                        </svg>
                    ))}
                    <span>({product.rating})</span>
                </div>
            </div>
        </div>
    );
};

export default MensBagContent;