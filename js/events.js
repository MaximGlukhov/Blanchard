window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.section-events__btn').addEventListener('click', function() {
        document.querySelector('.section-events__item:nth-child(n+4)').classList.toggle('events-active')
        document.querySelector('.section-events__item:nth-child(n+5)').classList.toggle('events-active')
        document.querySelector('.section-events__item:nth-child(n+6)').classList.toggle('events-active')
        document.querySelector('.section-events__item:nth-child(n+3)').classList.toggle('events-active')
        document.querySelector('.section-events__btn').classList.toggle('section-events__btn-none')
    })
  })