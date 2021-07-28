window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.section-editions__category-checkbox-list__title').addEventListener('click', function () {
        document.querySelectorAll(".section-editions__category__label").forEach(item => {
            item.parentElement.classList.toggle('edition-spoiler-active');
            if (item.querySelector(".section-editions__category-checbox__input").checked) {
                item.parentElement.classList.add('edition-spoiler-active');
            }
        })
    })


    document.querySelectorAll(".section-editions__category__label").forEach(el => {
        el.addEventListener("click", function () {
            let checkbox = this.querySelector(".section-editions__category-checbox__input");
            if (checkbox.checked) {
                this.classList.remove("edition-spoiler-active");
            }
        })
    })
})
