// import Swiper, {Pagination} from 'swiper';

const swiper = new Swiper('#slider_hero', {
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
  // effect: 'coverflow'
})
