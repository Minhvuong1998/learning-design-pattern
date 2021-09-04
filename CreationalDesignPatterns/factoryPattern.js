/**
 * ! 1.2 FACTORY PATTERN
 * ? Khi cài đặt Pattern này, bạn sẽ phải tạo một function trả về đối tượng được khởi tạo từ một class khác. 
 * ? Thường thì các class để tạo ra các đối tượng trả về từ function này, sẽ là các class khác nhau nhưng có
 * ? nhiều điểm giống nhau. như ví dụ dưới
 **/

function Car(options) {

  // some defaults
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";
}

function Truck(options) {
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}

function VehicleFactory() {}

// default is Car
VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function (options) {
  switch (options.vehicleType) {
    case "truck":
      this.vehicleClass = Truck;
      break;
  }

  return new this.vehicleClass(options);
};

var carFactory = new VehicleFactory();

var car = carFactory.createVehicle({
  vehicleType: "car",
  color: "yellow",
  doors: 6
});
