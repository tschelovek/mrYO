document.addEventListener('DOMContentLoaded', () => {
  /**
   *
   * @type {Swiper} Инициализация слайдера
   */
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
    // autoHeight: true
  })

  /**
   *
   * Бургер меню
   */
  document.getElementById('burgerButton')?.addEventListener('click', e => {
    e.preventDefault();
    e.currentTarget.classList.toggle('active');
    document.querySelector('.header__navigation__list')?.classList.toggle('active');
  })

  /**
   * Скукоживатель шапки при прокрутке
   */
  window.addEventListener('scroll', () => {
    const header = document.body.querySelector('header');
    if(window.scrollY > 0) {
      !header.classList.contains('shrink') ? header.classList.add('shrink') : null
    } else {
      header.classList.remove('shrink')
    }
  })
  //*На случай перезагрузки страницы проверяем положение и если надо вешаем скукоживатель на шапку
  if (window.scrollY > 0) document.body.querySelector('header')?.classList.add('shrink')
})
