window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btn-search-home').addEventListener('click', function() {
        document.querySelector('#text').classList.toggle('active-text')
        document.querySelector('#btn-search-home').classList.toggle('btn-none')
    })
  })

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btn-search').addEventListener('click', function() {
        document.querySelector('#text').classList.toggle('active-text')
        document.querySelector('#btn-search-home').classList.remove('btn-none')
    })
  })

  window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btn-closed').addEventListener('click', function() {
        document.querySelector('#text').classList.remove('active-text')
    })
  })

