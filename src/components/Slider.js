import { FreeMode ,Pagination} from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from 'swiper/react';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        // spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 20,
            }

        }}
      >
        <SwiperSlide>
            <img src="https://www.seekpng.com/png/detail/257-2573844_com-wedding-services-reviews-reviews-wedding-wire-badge.png" width={189}></img>
        </SwiperSlide>
        <SwiperSlide><img src="https://qph.cf2.quoracdn.net/main-qimg-2b92061a6b65e7a95eedb739c92dd362" width={189}>
        </img></SwiperSlide>
        <SwiperSlide>
            <img src="https://techcrunch.com/wp-content/uploads/2012/06/eventbrite-logo.gif" width={189}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://searchlogovector.com/wp-content/uploads/2020/05/peoples-jewellers-logo-vector.png" width={189}>
        </img></SwiperSlide>
        <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-rpeVx4mTQrkMLXNUSEpgyxLbGxg5J56wYw&usqp=CAU" width={189}>
        </img></SwiperSlide>
      </Swiper>
    </>
  );
}
