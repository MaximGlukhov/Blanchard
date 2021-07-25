var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999) 999-99-99");

im.mask(selector);

new JustValidate('.section-contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: {
      minLength: 'Имя должно содержать более двух символов',
      maxLength: 'Имя не должно содержать более десяти символов',
      required: 'Напишите ваше имя'
    },
    tel: {
      required: 'Укажите контактный телефон',
      function: 'Номер указан неверно'
    },
  },
  submitHandler: function (form, values, ajax) {
    ajax({
        url: 'mail.php',
        method: 'POST',
        data: values,
        async: true,
        callback: function (response) {
            alert('Данные отправились успешно')
        },
        error: function (response) {
            alert('Ошибка отправки данных')
        }
    });
},

invalidFormCallback: function (errors) {
    console.log(errors);
},
});