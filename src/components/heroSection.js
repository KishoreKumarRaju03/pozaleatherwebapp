import React from 'react';
import makingVideo from '../asset/MAKING A HANDMADE LEATHER SATCHEL.mp4';
import '../style/componentStyle/heroStyle.css';

const HeroSection = () => {
    return(
        <>
            <div className="hero-container">
                <div className="hero-section">
                    <video
                            autoPlay
                            muted
                            loop
                            className="hero-video"
                        >
                            <source src={makingVideo} type="video/mp4"></source>
                            Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </>
    );
};

export default HeroSection; 