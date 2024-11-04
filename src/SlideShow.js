import React, { useState, useEffect } from 'react';
import './SlideShow.css';

const SlideShow = ({ slides }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isEnlarged, setIsEnlarged] = useState(false);

    useEffect(() => {
        // Set a timer to enlarge the slide after a few seconds
        const timer = setTimeout(() => {
            setIsEnlarged(true);
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 3000); // Adjust timing as needed

        return () => clearTimeout(timer);
    }, [activeSlide]);

    useEffect(() => {
        // Change slide after a certain interval
        const slideTimer = setInterval(() => {
            setIsEnlarged(false); // Reset enlargement before switching slides
            setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 6000); // Adjust interval for switching slides

        return () => clearInterval(slideTimer);
    }, [slides.length]);

    return (
        <div className="slideshow-container">
            {/* Background location and title */}
            <div className="background">
                <h1>{slides[activeSlide].location}</h1>
                <h2>{slides[activeSlide].title}</h2>
            </div>

            {/* Display slides */}
            <div className="slides">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide ${index === activeSlide ? (isEnlarged ? 'enlarged' : 'active') : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        {index === activeSlide && (
                            <div className="slide-content">
                                <h3>{slide.title}</h3>
                                {isEnlarged && <p>{slide.description}</p>}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Navigation controls */}
            <div className="controls">
                <button onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}>◀</button>
                <button onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}>▶</button>
            </div>
        </div>
    );
};

export default SlideShow;
