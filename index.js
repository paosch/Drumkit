window.addEventListener('keydown', function(event){
  const audio = document.querySelector("audio");
  if(!audio) return;
  audio.play();
});
