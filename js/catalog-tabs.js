document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path 
          document.querySelectorAll('.tab-content').forEach(function(tabContent) {
            tabContent.classList.remove('tab-content-active')
          })
          document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active') 

          document.querySelectorAll('.tabs__btn').forEach(function(btn) {
            btn.classList.remove('tabs__btn__active')
          })
          tabsBtn.classList.add('tabs__btn__active')
        })
      })
    })

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.bel-tabs__btn').forEach(function(BeltabsBtn) {
        BeltabsBtn.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path 
          document.querySelectorAll('.bel-tab-content').forEach(function(tabContent) {
            tabContent.classList.remove('bel-tab-content-active')
          })
          document.querySelector(`[data-target="${path}"]`).classList.add('bel-tab-content-active') 

          document.querySelectorAll('.bel-tabs__btn').forEach(function(btn) {
            btn.classList.remove('bel-tabs__btn__active')
          })
          BeltabsBtn.classList.add('bel-tabs__btn__active')
        })
      })
    })

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.ita-tabs__btn').forEach(function(itatabsBtn) {
        itatabsBtn.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path 
          document.querySelectorAll('.ita-tab-content').forEach(function(tabContent) {
            tabContent.classList.remove('ita-tab-content-active')
          })
          document.querySelector(`[data-target="${path}"]`).classList.add('ita-tab-content-active') 

          document.querySelectorAll('.ita-tabs__btn').forEach(function(btn) {
            btn.classList.remove('ita-tabs__btn__active')
          })
          itatabsBtn.classList.add('ita-tabs__btn__active')
        })
      })
    })

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.ger-tabs__btn').forEach(function(gertabsBtn) {
        gertabsBtn.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path 
          document.querySelectorAll('.ger-tab-content').forEach(function(tabContent) {
            tabContent.classList.remove('ger-tab-content-active')
          })
          document.querySelector(`[data-target="${path}"]`).classList.add('ger-tab-content-active') 

          document.querySelectorAll('.ger-tabs__btn').forEach(function(btn) {
            btn.classList.remove('ger-tabs__btn__active')
          })
          gertabsBtn.classList.add('ger-tabs__btn__active')
        })
      })
    })
    
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.fra-tabs__btn').forEach(function(fratabsBtn) {
        fratabsBtn.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path 
          document.querySelectorAll('.fra-tab-content').forEach(function(tabContent) {
            tabContent.classList.remove('fra-tab-content-active')
          })
          document.querySelector(`[data-target="${path}"]`).classList.add('fra-tab-content-active') 

          document.querySelectorAll('.fra-tabs__btn').forEach(function(btn) {
            btn.classList.remove('fra-tabs__btn__active')
          })
          gertabsBtn.classList.add('fra-tabs__btn__active')
        })
      })
    })

  