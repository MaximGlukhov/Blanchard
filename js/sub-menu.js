window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#nav-bottom-one').addEventListener('click', function() {
        document.querySelector('#nav-bottom-menu-one').classList.toggle('sub-menu-active')
        document.querySelector('#nav-bottom-menu-two').classList.remove('sub-menu-active')
        document.querySelector('#nav-bottom-menu-three').classList.remove('sub-menu-active')
        document.querySelector('#nav-bottom-menu-four').classList.remove('sub-menu-active')
        document.querySelector('#nav-bottom-menu-five').classList.remove('sub-menu-active')
    })
    document.querySelector('#nav-bottom-two').addEventListener('click', function() {
        document.querySelector('#nav-bottom-menu-two').classList.toggle('sub-menu-active')
        document.querySelector('#nav-bottom-menu-one').classList.remove('sub-menu-active')
        document.querySelector('#nav-bottom-menu-three').classList.remove('sub-menu-active')
        document.querySelector('#nav-bottom-menu-four').classList.remove('sub-menu-active')
        document.querySelector('#nav-bottom-menu-five').classList.remove('sub-menu-active')
    })
    document.querySelector('#nav-bottom-three').addEventListener('click', function() {
        document.querySelector('#nav-bottom-menu-three').classList.toggle('sub-menu-active')
        document.querySelector('#nav-bottom-menu-two').classList.remove('sub-menu-active')
        document.querySelector('#nav-bottom-menu-one').classList.remove('sub-menu-active')
        document.querySelector('#nav-bottom-menu-four').classList.remove('sub-menu-active')
        document.querySelector('#nav-bottom-menu-five').classList.remove('sub-menu-active')
    })
    document.querySelector('#nav-bottom-four').addEventListener('click', function() {
        document.querySelector('#nav-bottom-menu-four').classList.toggle('sub-menu-active')
        document.querySelector('#nav-bottom-menu-two').classList.remove('sub-menu-active')
        document.querySelector('#nav-bottom-menu-three').classList.remove('sub-menu-active')
        document.querySelector('#nav-bottom-menu-one').classList.remove('sub-menu-active')
        document.querySelector('#nav-bottom-menu-five').classList.remove('sub-menu-active')
    })
    document.querySelector('#nav-bottom-five').addEventListener('click', function() {
        document.querySelector('#nav-bottom-menu-five').classList.toggle('sub-menu-active')
        document.querySelector('#nav-bottom-menu-two').classList.remove('sub-menu-active')
        document.querySelector('#nav-bottom-menu-three').classList.remove('sub-menu-active')
        document.querySelector('#nav-bottom-menu-four').classList.remove('sub-menu-active')
        document.querySelector('#nav-bottom-menu-one').classList.remove('sub-menu-active')
    })
})


