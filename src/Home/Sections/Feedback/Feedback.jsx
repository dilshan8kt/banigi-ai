
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';


import f1 from "../../../assets/feedback1.png"
import f2 from "../../../assets/feedback2.png"
import f3 from "../../../assets/feedback3.png"
import prev from "../../../assets/prev.png"
import next from "../../../assets/next.png"

const Feedback = () => {
    return (
        <>

            <div className="feedback_div" id='feedback'>

                <h2>What our <span>customers</span> say about us? tdk</h2>

                <Swiper
                    modules={[Navigation, Pagination]}

                    spaceBetween={50}
                    slidesPerView={1}
                    navigation = {{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 50,
                        },
                      }}

                    className="mySwiper"

                >
                    <SwiperSlide><img src={f1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={f2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={f3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={f1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={f2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={f3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={f1} alt="" /></SwiperSlide>

                    <div className="swiper-button-next">
                        <img src={next} alt="" />
                    </div>
                    <div className="swiper-button-prev">
                        <img src={prev} alt="" />
                    </div>

                </Swiper>

            </div>

        </>
    )
}

export default Feedback
