Let progress = document.getElementById('progressbar');
  Let totalHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function(){
    Let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
  }