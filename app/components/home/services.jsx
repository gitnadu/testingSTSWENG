import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
SwiperCore.use([Navigation]);
export default function OurServices() {
  const services = [
    { name: 'Centralized Reticulation', url: '/services/centralized-reticulation' },
    { name: 'Termite Proofing', url: '/services/termite-proofing' },
    { name: 'Rat Eradication', url: '/services/rat-eradication' },
    { name: 'Hygienic Pest Control', url: '/services/hygienic-pest-control' },
    { name: 'Service A', url: '/services/service-a' },
    { name: 'Service B', url: '/services/service-b' },
    { name: 'Service C', url: '/services/service-c' },
    { name: 'Service D', url: '/services/service-d' },
  ];
  const [swiperRef, setSwiperRef] = useState(null);
  const handleNext = () => {
    if (swiperRef) swiperRef.slideNext();
  };
  const handlePrev = () => {
    if (swiperRef) swiperRef.slidePrev();
  };
  return (
    <div className="bg-white relative py-5 px-16 flex flex-col w-full"> 
      <h2 className="text-6xl font-semibold mb-8 text-dark-green-A italic">Our Services</h2>
      <div className="flex justify-center items-center w-full px-16">
        <button 
          onClick={handlePrev} 
          className="absolute left-10 text-xl text-light-green font-bold hover:dark-green z-10 px-4">
          <Image
            className='w-full h-[66px]'
            src="/Home/Left.png"
            alt="MultiPest"
            width={66}
            height={74}
          />
        </button>
        <Swiper onSwiper={setSwiperRef} slidesPerView={4} spaceBetween={5} centeredSlides={false} loop={true} className="absolute left-3 right-3">
            {services.map((service, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center">
                  <a href={service.url} className="bg-normal-green text-flesh italic text-xl rounded-xl shadow-md flex justify-center items-center w-[295px] h-[167px]">
                    {service.name}
                  </a>
                </SwiperSlide>
            ))}
        </Swiper>
        <button 
          onClick={handleNext} 
          className="absolute right-10 text-xl text-light-green font-bold hover:text-dark-green z-10 px-4">
          <Image
            className='w-full h-[66px]'
            src="/Home/Right.png"
            alt="MultiPest"
            width={66}
            height={74}
          />
        </button>
      </div>
    </div>
  );
}
