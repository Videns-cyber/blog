//Комментарии главная страница
let commentFormM = document.querySelector('.comment-form-main');
let fullNameM = document.querySelector('.fullname');
let eMailM = document.querySelector('.email');
let commentFieldM = document.querySelector('.comment-field-main');

commentFormM.onsubmit = function (evt) {
  evt.preventDefault();
  fullNameM.value = '';
  commentFieldM.value = '';
  eMailM.value = '';
  charCounterM.textContent = '0';
};


//Обработчик событий, длина символов (Главная страница)
let charCounterM = document.querySelector('.char-counter-main');
let submitButtonM = document.querySelector('.button-main');
commentFieldM.oninput = function () {
     
    charCounterM.textContent = commentFieldM.value.length;
	console.log(commentFieldM.value.length);
    if (commentFieldM.value.length < 10 || commentFieldM.value.length > 200 ) {
    commentFieldM.classList.add('warning');
	submitButtonM.disabled = true;
  }
  
   else {
     commentFieldM.classList.remove('warning');
	 submitButtonM.disabled = false;
   }
};
