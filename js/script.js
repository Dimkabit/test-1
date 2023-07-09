

 /*document.getElementById('signup-form').addEventListener('submit', function(event) {
   event.preventDefault(); // Предотвращаем отправку формы по умолчанию
 
   var form = this;
   var inputs = form.querySelectorAll('input[required]');
   var isValid = true;
 
   // Проверка правильности введенных данных
   for (var i = 0; i < inputs.length; i++) {
     var input = inputs[i];
     var value = input.value.trim();
     var errorContainer = input.nextElementSibling;
     errorContainer.textContent = ''; // Очищаем контейнер для сообщений об ошибках
 
     // Проверка на пустое поле
     if (value === '') {
       input.classList.add('error');
       isValid = false;
       errorContainer.textContent = 'Поле должно быть заполнено';
     } else {
       input.classList.remove('error');
     }
 
     // Проверка правильности email
     if (input.type === 'email' && value !== '') {
       var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailPattern.test(value)) {
         input.classList.add('error');
         isValid = false;
         errorContainer.textContent = 'Неправильный формат email';
       }
     }
 
     // Проверка правильности пароля
     if (input.type === 'password' && value !== '') {
       var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
       if (!passwordPattern.test(value)) {
         input.classList.add('error');
         isValid = false;
         errorContainer.textContent = 'Пароль должен содержать не менее 8 символов, заглавные и строчные буквы, а также цифры';
       }
     }
 
     // Проверка подтверждения пароля
     if (input.name === 'form[]' && input.type === 'password' && value !== '') {
       var confirmInput = form.querySelector('input[name="form[]"][type="password"]');
       if (value !== confirmInput.value) {
         input.classList.add('error');
         confirmInput.classList.add('error');
         isValid = false;
         errorContainer.textContent = 'Пароли не совпадают';
       } else {
         confirmInput.classList.remove('error');
       }
     }
   }
 
   // Добавление класса "error" к кнопке отправки формы
   var submitButton = form.querySelector('.button-submit');
   if (!isValid) {
     submitButton.classList.add('error');
   } else {
     submitButton.classList.remove('error');
 
     // Отправка формы
     form.submit();
   }
 });
 
 // Добавляем обработчики события изменения для полей ввода
 var inputElements = document.querySelectorAll('input[required]');
 inputElements.forEach(function(input) {
   input.addEventListener('input', function() {
     if (this.value.trim() !== '') {
       this.classList.remove('error');
       var errorContainer = this.nextElementSibling;
       errorContainer.textContent = ''; // Очищаем контейнер для сообщений об ошибках
 
       // Удаление класса "error" у кнопки отправки формы
       var submitButton = this.closest('form').querySelector('.button-submit');
       submitButton.classList.remove('error');
     }
   });
 });*/
 document.getElementById('signup-form').addEventListener('submit', function(event) {
   event.preventDefault(); // Предотвращаем отправку формы по умолчанию
 
   var form = this;
   var inputs = form.querySelectorAll('input[required]');
   var isValid = true;
 
   // Проверка правильности введенных данных
   for (var i = 0; i < inputs.length; i++) {
     var input = inputs[i];
     var value = input.value.trim();
     var errorContainer = input.nextElementSibling;
     errorContainer.textContent = ''; // Очищаем контейнер для сообщений об ошибках
 
     // Проверка на пустое поле
     if (value === '') {
       input.classList.add('error');
       isValid = false;
       errorContainer.textContent = 'Поле должно быть заполнено';
     } else {
       input.classList.remove('error');
     }
 
     // Проверка правильности email
     if (input.type === 'email' && value !== '') {
       var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailPattern.test(value)) {
         input.classList.add('error');
         isValid = false;
         errorContainer.textContent = 'Неправильный формат email';
       }
     }
 
     // Проверка правильности пароля
     if (input.type === 'password' && value !== '') {
       var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
       if (!passwordPattern.test(value)) {
         input.classList.add('error');
         isValid = false;
         errorContainer.textContent = 'Пароль должен содержать не менее 8 символов, заглавные и строчные буквы, а также цифры';
       }
     }
 
     // Проверка подтверждения пароля
     if (input.name === 'form[]' && input.type === 'password' && value !== '') {
       var confirmInput = form.querySelector('input[name="form[]"][type="password"]');
       if (value !== confirmInput.value) {
         input.classList.add('error');
         confirmInput.classList.add('error');
         isValid = false;
         errorContainer.textContent = 'Пароли не совпадают';
       } else {
         confirmInput.classList.remove('error');
       }
     }
   }
 
   // Добавление класса "error" к кнопке отправки формы
   var submitButton = form.querySelector('.button-submit');
   if (!isValid) {
     submitButton.classList.add('error');
   } else {
     submitButton.classList.remove('error');
 
     // Отправка формы
     // Здесь может быть ваш код отправки формы, например, через AJAX
 
     // После успешной отправки формы скрываем блок с формой и показываем блок с сообщением об успешной регистрации
     document.getElementById('signup-form-container').style.display = 'none';
     document.getElementById('registration-success').style.display = 'flex';
   }
 });
 
 // Добавляем обработчики события изменения для полей ввода
 var inputElements = document.querySelectorAll('input[required]');
 inputElements.forEach(function(input) {
   input.addEventListener('input', function() {
     if (this.value.trim() !== '') {
       this.classList.remove('error');
       var errorContainer = this.nextElementSibling;
       errorContainer.textContent = ''; // Очищаем контейнер для сообщений об ошибках
 
       // Удаление класса "error" у кнопки отправки формы
       var submitButton = this.closest('form').querySelector('.button-submit');
       submitButton.classList.remove('error');
     }
   });
 });


       //scroll reveal animation
       const sr = ScrollReveal({
         origin: 'top',
         distance: '160px',
         //duration: 1500,
        // delay: 400,
         //reset: true //Animation repeat
      })
      sr.reveal(` .form-name__first, .form-name__last`, {origin: 'top', duration: 3500});
      sr.reveal(` .form-name._nationality, .form-name__mail`, {origin: 'top', duration: 3000});
      sr.reveal(` .form-name-blocks, .form-name__gender`, {origin: 'top', duration: 2000});
      sr.reveal(` .form-name__pasword, .form-name__mail`, {origin: 'top', duration: 1500});
      sr.reveal(`.buttons-block__link, .button-submit`, {origin: 'bottom', duration: 2500});
