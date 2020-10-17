//Счетчик лайков
let likes = document.querySelector('.likes');
let likesNumber = document.querySelector('.likes-number');
likesNumber.textContent = "16";
let likeDark = document.querySelector('.like-dark')
let likeLight = document.querySelector('.like-light')


likes.onclick = function () {
  if (likes.classList.contains('added')) {
    likesNumber.textContent--;
	likeDark.classList.add('like-dark-invisible');
	likeLight.classList.remove('like-light-invisible');
	likeLight.classList.add('like-move');
	
  } else {
    likesNumber.textContent++;
    likeDark.classList.remove('like-dark-invisible');
	likeLight.classList.add('like-light-invisible');
	likeDark.classList.add('like-move');
	
  }
  

  likes.classList.toggle('added');
  
};
//Комментарии
let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let fullName = document.querySelector('.fullname-input');
let eMail = document.querySelector('.email-input');
let commentField = document.querySelector('.comment-field');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('user-comment');
  let newCommentFullName = document.createElement('p');
  newCommentFullName.classList.add('fullname');
  newCommentFullName.textContent = fullName.value;
  fullName.value = '';
  
  let newCommentText = document.createElement('p');
  newCommentText.classList.add('comment-text');
  newCommentText.textContent = commentField.value;
  commentField.value = '';
  eMail.value = '';
  newComment.append(newCommentFullName);
  newComment.append(newCommentText);
  commentList.append(newComment);
  charCounter.textContent = '0';
};


//Обработчик событий, длина символов (Страница статьи)
let charCounter = document.querySelector('.char-counter');
let submitButton = document.querySelector('.button');
commentField.oninput = function () {
     
    charCounter.textContent = commentField.value.length;
	console.log(commentField.value.length);
    if (commentField.value.length < 10 || commentField.value.length > 200 ) {
    commentField.classList.add('warning');
	submitButton.disabled = true;
  }
  
   else {
     commentField.classList.remove('warning');
	 submitButton.disabled = false;
   }
};




//Для фильтра из раздела все статьи
function filterFunction() {
  let articles = document.querySelectorAll('.article-block');
  let filter = document.querySelector('.themes');
  for (let article of articles) {
    if (article.dataset.category !== filter.value && filter.value !== 'all' &&  filter.value !== 'choose_a_topic') {
      article.classList.add('hidden');
	}
    else {
      article.classList.remove('hidden');
	  
    }
	 if (article.dataset.category == filter.value && filter.value !== 'all' &&  filter.value !== 'choose_a_topic') {
	  article.classList.add('after-filter-article');
	}
	else {
	  article.classList.remove('after-filter-article');
	  
    }
  }
      
};



//Попытка вывода селекта в консоль
let themes = document.querySelector('.themes');
themes.onchange = function(event) {
  console.log(themes.value);
}


