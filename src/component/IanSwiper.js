import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.min.css'
import 'swiper/css/bundle'
import '../style/movie.css'

function IanSwiper({ movie }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      //   spaceBetween={0}
      slidesPerView={3}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {movie.map((v, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="movieAll">
              <i className="fa-solid fa-bookmark"></i>
              <p className="rank_num">{i + 1}</p>
              <img src={v.img} alt={v.title} />
              <div className="py-3 ms-3">
                <h4>{v.title}</h4>
                <div className="d-flex align-items-center">
                  <i className="fa-regular fa-calendar-days me-2"></i>
                  <p className="comeOut">{v.comeOut}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default IanSwiper
