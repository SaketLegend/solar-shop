import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import main from '../../assets/main.webp'
import main2 from '../../assets/stl.webp'
import main3 from '../../assets/stl2.webp'
import main4 from '../../assets/stl3.webp'
import main5 from '../../assets/stl4.webp'
 
export function SlideShowNew() {

  const images = [
    main,
    main2,
    main3,
    main4,
    main5
    // Add more image URLs as needed
  ];

  return (
    <div className="max-w-xl w-screen mx-auto">
      <Carousel 
        showArrows={true} 
        showThumbs={false} 
        infiniteLoop={true} 
        autoPlay={true} 
        interval={5000} // Change interval as needed
        stopOnHover={true} // Stop autoplay on hover
        transitionTime={500} // Change transition time as needed
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default SlideShowNew;