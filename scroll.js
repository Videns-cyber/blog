let smoothJumpUp = function() {
  if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
    window.scrollBy(0,-50);
    setTimeout(smoothJumpUp, 5);
  }
}

window.oncscroll = function() {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 300) {
    document.getElementById('upbutton').style.display = 'block';
  } else {
    document.getElementById('upbutton').style.display = 'none';
  }
}
