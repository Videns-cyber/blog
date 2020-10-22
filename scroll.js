let smoothJumpUp = function() {
  if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
    window.scrollBy(0,-50);
    setTimeout(smoothJumpUp, 10);
  }
}

window.oncscroll = function() {
  let scrolled = window.pageYOffset;
  if (scrolled > 400) {
    document.getElementById('upbutton').style.display = 'none';
  } else {
    document.getElementById('upbutton').style.display = 'none';
  }
}
