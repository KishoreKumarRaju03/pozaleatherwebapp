import { useState } from 'react';
import '../style/componentStyle/instagramSectionStyle.css';
import image1 from '../asset/instagram section/image-1.jpg';
import image2 from '../asset/instagram section/image-2.jpg';
import image3 from '../asset/instagram section/image-3.jpg';
import image4 from '../asset/instagram section/image-4.jpg';
import image5 from '../asset/instagram section/image-5.jpg';
import image6 from '../asset/instagram section/image-6.jpg';

const InstagramSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const images = [image1, image2, image3, image4, image5, image6];

    return (
        <div className="instagram-container">
            <div className="instagram-section">
                <div className="instagram-section-header">
                    <span><a href="#">Instagram@PozaLeather</a></span>
                </div>
                <div className="instagram-section-content">
                    <div className="instagram-section-content-item">
                        {images.map((image, index) => (
                            <div 
                                key={index}
                                className={`item-image item-image-${index + 1}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <img src={image} alt={`Instagram post ${index + 1}`} />
                                {hoveredIndex === index && (
                                    <div className="instagram-overlay">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstagramSection;