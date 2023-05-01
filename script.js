function tocar1(element) {


  var somq = document.getElementById("s_keyq");
  somq.currentTime = 0;
  somq.play();
  element.classList.add('active');

  // Define um temporizador para remover a classe .active após a transição CSS
  setTimeout(function () {
    element.classList.remove('active');
  }, 200);

}

function tocar2(element) {

  document.addEventListener("keydown", function (event) {
    if (event.code === "KeyW") {
      tocar2(element);
    }
  });


  var somq = document.getElementById("s_keyw");
  somq.currentTime = 0;
  somq.play();
  element.classList.add('active');

  setTimeout(function () {
    element.classList.remove('active');
  }, 200);
}

function tocar3(element) {
  document.addEventListener("keydown", function (event) {
    if (event.code === "KeyE") {
      tocar3(element);
    }
  });
  var somq = document.getElementById("s_keye");
  somq.currentTime = 0;
  somq.play();
  element.classList.add('active');

  setTimeout(function () {
    element.classList.remove('active');
  }, 200);
}

function tocar4(element) {
  document.addEventListener("keydown", function (event) {
    if (event.code === "KeyA") {
      tocar4(element);
    }
  });
  var somq = document.getElementById("s_keya");
  somq.currentTime = 0;
  somq.play();
  element.classList.add('active');

  setTimeout(function () {
    element.classList.remove('active');
  }, 200);
}

function tocar5(element) {
  document.addEventListener("keydown", function (event) {
    if (event.code === "KeyS") {
      tocar5(element);
    }
  });
  var somq = document.getElementById("s_keys");
  somq.currentTime = 0;
  somq.play();
  element.classList.add('active');

  setTimeout(function () {
    element.classList.remove('active');
  }, 200);
}

function tocar6(element) {
  document.addEventListener("keydown", function (event) {
    if (event.code === "KeyD") {
      tocar6(element);
    }
  });
  var somq = document.getElementById("s_keyd");
  somq.currentTime = 0;
  somq.play();
  element.classList.add('active');

  setTimeout(function () {
    element.classList.remove('active');
  }, 200);
}

function tocar7(element) {
  document.addEventListener("keydown", function (event) {
    if (event.code === "KeyZ") {
      tocar7(element);
    }
  });
  var somq = document.getElementById("s_keyz");
  somq.currentTime = 0;
  somq.play();
  element.classList.add('active');

  setTimeout(function () {
    element.classList.remove('active');
  }, 200);
}

function tocar8(element) {
  document.addEventListener("keydown", function (event) {
    if (event.code === "KeyX") {
      tocar8(element);
    }
  });
  var somq = document.getElementById("s_keyx");
  somq.currentTime = 0;
  somq.play();
  element.classList.add('active');

  setTimeout(function () {
    element.classList.remove('active');
  }, 200);
}

function tocar9(element) {
  document.addEventListener("keydown", function (event) {
    if (event.code === "KeyC") {
      tocar9(element);
    }
  });
  var somq = document.getElementById("s_keyc");
  somq.currentTime = 0;
  somq.play();
  element.classList.add('active');

  setTimeout(function () {
    element.classList.remove('active');
  }, 200);
}


function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`)

  if (audioElement) {
    audioElement.play()
  }
}

document.querySelector('.composer button').addEventListener('click', () => {
  let song = document.querySelector('#input').value;


  if (song !== '') {
    let songArray = song.split('');
    playComposition(songArray)
  }
});

function playComposition(songArray) {

  let wait = 0;

  for (let songItem of songArray) {

    setTimeout(() => {
      playSound(`key${songItem}`)
    }, wait);
    
    wait += 250;


  }
}




