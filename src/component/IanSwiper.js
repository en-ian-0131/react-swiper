import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// import 'swiper/swiper-bundle.min.css'
import 'swiper/css/bundle'
import '../css/movie.css'

function IanSwiper({ movie }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
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
              <p className="img_p">{v.title}</p>
              <img src={v.img} alt="" />
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default IanSwiper
