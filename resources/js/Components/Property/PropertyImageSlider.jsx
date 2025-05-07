import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function PropertyImageSlider({ images = [] }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideClick = (index) => {
    setActiveSlide(index);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  const handleArrowClick = (direction) => {
    let newIndex = activeSlide;
    if (direction === 'left') {
      newIndex = activeSlide > 0 ? activeSlide - 1 : images.length - 1;
    }
    if (direction === 'right') {
      newIndex = activeSlide < images.length - 1 ? activeSlide + 1 : 0;
    }
    handleSlideClick(newIndex);
  };

  if (!images.length) return null;

  return (
    <div className="relative pt-10">
      {/* Main Image */}
      <div className="relative w-full overflow-hidden rounded-none shadow-lg h-96">
        <img
          src={images[activeSlide].url}
          alt={`Image ${activeSlide + 1}`}
          className="object-cover w-full h-full"
        />
        <div className="absolute flex gap-2 bottom-4 left-4">
          <button
            className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
            onClick={() => handleArrowClick('left')}
          >
            <ArrowLeft size={20} />
          </button>
          <button
            className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
            onClick={() => handleArrowClick('right')}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-4">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>
              <div
                className={`cursor-pointer overflow-hidden rounded-none border ${index === activeSlide ? 'border-orange-500' : 'border-transparent'}`}
              >
                <img
                  src={image.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="object-cover w-full h-28"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
