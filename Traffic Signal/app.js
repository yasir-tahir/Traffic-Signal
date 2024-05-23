

var count = 1;

function abc(){
    var car = document.getElementById("car");
    count += 5;

    car.style.left = count + "px"
}

var ref = setInterval(abc, 20);

function stopCar() {
    clearInterval(ref)
}