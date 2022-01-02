// decorator pattern được sử dụng để mở rộng chức năng của object | class mà không thay đổi class hoặc contructor hiện có.
function Car() {
  this.name = 'car main';

  this.color = "red";
}

const objCar = {
  name: 'hi',
  color: 'white',
  car: 'car'
}


function decoratorCar(carClass) {
  carClass.setColor = function (color) {
    this.color = color;
  }
}

function main() {
  const car = new Car();
  decoratorCar(car);

  console.log(car);
}

main();