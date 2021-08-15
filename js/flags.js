document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs-flag').forEach(function(flagBtn) {
      flagBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path
        document.querySelectorAll('.lang').forEach(function(tabContent) {
          $( function() {
            $('.section-catalog__list-accordeon').accordion("refresh");
          });
          tabContent.classList.remove('lang-active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('lang-active');

        document.querySelectorAll('.tabs-flag').forEach(function(flag) {
          flag.classList.remove('tabs-flag-active')
        });
        flagBtn.classList.add('tabs-flag-active');
      })
    })
  })



