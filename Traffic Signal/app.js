``
var count = 1;
var ref;

function abc() {
  var car = document.getElementById("car");
  count += 5;
  

  if (count > window.innerWidth - car.offsetWidth) {
    count = 0; 
  }

  car.style.left = count + "px";
}

function startCar() {
  if (!ref) {
    ref = setInterval(abc, 20);
  }
}

function stopCar() {
  clearInterval(ref);
  ref = null; 
}


startCar();
