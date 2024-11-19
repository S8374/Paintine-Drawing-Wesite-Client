import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Slider.css';

const Slider = () => {
    return (
        <div className="slider-container">
            <Swiper
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1000}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://media.istockphoto.com/id/1456622135/photo/beautiful-happy-boy-with-painted-hands.jpg?s=612x612&w=0&k=20&c=gf_EH2YxmY4_PKveJ3rEObSIXMM2K3hyDNduCt-3pOc=" alt="Slide 1" />
                    <div className="slide-text">
                        <section className="showcase flex justify-start text-center">
                           
                            <div className="text">
                                
                                <h3 className='font3 '>Painting and Drawing</h3>
                                <p className='font2'>We inspire that to do perfect work</p>
                                <a href="#">Explore</a>
                            </div>

                        </section>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.istockphoto.com/id/1435839681/photo/family-enjoys-art.jpg?s=612x612&w=0&k=20&c=e1HWbx1CMnipzZs92r3sj2r-WVhD0fcoLzqOkonRM9Y=" alt="Slide 2" />

                    <div className="slide-text">
                    <section className="showcase flex justify-start text-center">
                           
                           <div className="text">
                             
                               <h3 className='font3 ' >Early Education</h3>
                               <p className='font2'>With a focus on a child</p>
                               <a href="#">Explore</a>
                           </div>

                       </section>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.istockphoto.com/id/1494722765/photo/a-talented-young-asian-queer-artist-focuses-on-painting-his-picture-on-a-canvas-easel.jpg?s=612x612&w=0&k=20&c=ThpagYEx22Pf38IZoZl6C06YCjAmjXCnVFOt5V8fCwQ=" alt="Slide 3" />
                    <div className="slide-text">
                    <section className="showcase flex justify-start text-center">
                           
                           <div className="text">
                             
                               <h3 className='font3 '>Join Our JOURNEY</h3>
                               <p className='font2' >to discover th world knowladge</p>
                               <a href="#">Explore</a>
                           </div>

                       </section>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;
