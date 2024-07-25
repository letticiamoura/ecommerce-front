import { useState } from 'react';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

interface GalleryProps {
  width?: string;
  height?: string;
  radius?: string;
  showThumbs?: boolean;
  images: { src: string }[];
}

const Gallery = ({width, height, radius, showThumbs, images}: GalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleThumbClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className='relative overflow-hidden' style={{ width, height }}>
      <div className="relative flex items-center justify-center" style={{ width, height }}>
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image.src} 
            alt={`Slide ${index}`}
            className={index === currentIndex ? 'display: block' : 'display: none'}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain', 
              borderRadius: radius,
              display: index === currentIndex ? 'block' : 'none'
            }}
          />
        ))}
      </div>
      <button 
        className="disabled:opacity-50 absolute top-1/2 translate-y-[-50%] bg-none border-none cursor-pointer p-3 left-2.5" 
        onClick={handlePrev} 
        disabled={currentIndex === 0}
      >
        <img className='w-5 h-5' src={arrowLeft} alt="Previous" />
      </button>
      <button 
        className="disabled:opacity-50 absolute top-1/2 translate-y-[-50%] bg-none border-none cursor-pointer p-3 right-2.5" 
        onClick={handleNext} 
        disabled={currentIndex === images.length - 1}
      >
        <img className='w-5 h-5' src={arrowRight} alt="Next" />
      </button>
      {showThumbs && (
        <div className="flex justify-center">
          {images.map((image, index) => (
            <img 
              key={index} 
              src={image.src} 
              alt={`Thumb ${index}`}
              className={index === currentIndex ? 'border ' : ''}
              style={{ 
                width: '117px', 
                height: '95px', 
                objectFit: 'cover', 
                borderRadius: radius, 
                margin: '0 5px',
                cursor: 'pointer'
              }}
              onClick={() => handleThumbClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
