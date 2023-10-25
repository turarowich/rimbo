import { useState } from 'react'
import { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Controller } from 'swiper/modules'

import { AdvertismentType } from 'components'

import 'swiper/css'
import styles from './AdvertismentTypesCarousel.module.scss'

import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow-right.svg'

const advertisments = [
  {
    name: 'IBV',
    value: 0.2,
    growth: 7.55
  },
  {
    name: 'Banner',
    value: 0.15,
    growth: 1.63
  },
  {
    name: 'VAST',
    value: 0.6,
    growth: 2.55
  },
  {
    name: 'Rewarded video',
    value: 0.8,
    growth: -3.32
  },
  {
    name: 'Native',
    value: 1,
    growth: -3.32
  },
  {
    name: 'IBV 2',
    value: 0.2,
    growth: 7.55
  },
  {
    name: 'Banner 2',
    value: 0.15,
    growth: 1.63
  },
  {
    name: 'VAST 2',
    value: 0.6,
    growth: 2.55
  },
  {
    name: 'Rewarded',
    value: 0.8,
    growth: -3.32
  },
  {
    name: 'Native 2',
    value: 1,
    growth: -3.32
  }
]

export const AdvertismentTypesCarousel = () => {
  const [swiper, setSwiper] = useState<SwiperType>()
  const [swiperSnapIdx, setSwiperSnapIdx] = useState(0)

  const swipesCount = swiper?.snapGrid?.length || 0
  const isPrevSlideAvailable = swiperSnapIdx !== 0
  const isNextSlideAvailable = swiperSnapIdx <= swipesCount - 2

  return (
    <div className={styles['advertisment-types-carousel']}>
      <Swiper
        spaceBetween={24}
        slidesPerView='auto'
        className={styles.carousel}
        modules={[Navigation, Controller]}
        allowTouchMove={true}
        onSwiper={setSwiper}
        breakpoints={{
          1315: {
            allowTouchMove: false
          }
        }}
        onSlideChange={(swiper) => {
          setSwiperSnapIdx(swiper.snapIndex)
        }}
      >
        {advertisments.map(({ name, value, growth }) => (
          <SwiperSlide key={name}>
            <AdvertismentType heading={name} value={value} growth={growth} />
          </SwiperSlide>
        ))}
      </Swiper>

      {isPrevSlideAvailable ? (
        <button
          className={styles['prev-btn']}
          onClick={() => {
            swiper?.slidePrev()
          }}
        >
          <ArrowRightIcon />
        </button>
      ) : null}

      {isNextSlideAvailable ? (
        <button
          className={styles['next-btn']}
          onClick={() => {
            swiper?.slideNext()
          }}
        >
          <ArrowRightIcon />
        </button>
      ) : null}
    </div>
  )
}
