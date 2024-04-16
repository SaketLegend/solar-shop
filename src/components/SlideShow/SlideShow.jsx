import React, { useEffect, useState } from 'react';
import main from '../../assets/main.webp';
import main2 from '../../assets/stl.webp';
import main3 from '../../assets/stl3.webp';
import main4 from '../../assets/stl5.webp';
import main5 from '../../assets/ph3.webp';

const SlideShow = () => {
    const images = [main, main2, main3, main4, main5];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
      <div className='relative w-[600px] xs:w-full flex items-center justify-center mr-20'>
      {images.map((item, index) => (
          <img
              key={index}
              src={item}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              alt={`Slide ${index}`}
              style={{ zIndex: index === currentSlide ? 1 : 0 }} // Ensure current image is above others
          />
      ))}
  </div>
    );
};

export default SlideShow;
