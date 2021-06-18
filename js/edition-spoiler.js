window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.section-editions__category-checkbox-list__title').addEventListener('click', function() {
        document.querySelector('.section-editions__category-checkbox-list').classList.toggle('edition-spoiler-active')
    })
  })