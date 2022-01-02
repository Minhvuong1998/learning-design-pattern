// khái liệm
//   proxy pattern lằm trong nhóm structural pattern
//  nó sinh ra để tạo ra một đối tượng ủy quyền hay đại diện cho đối tượng khác .
// tất cả các truy cập sẽ được chuyển đến đối tượng trung gian (class proxy pattern)
// Thực ra không phải bất cứ class hay object nào cũng cần phải có Proxy
// chỉ có những class hoặc object đặc biệt mà chúng ta phải ủy quyền khi:
// Muốn bảo vệ quyền truy xuất vào các phương thức của object.
// Muốn bổ sung trước khi thực hiện phương thức của object.
// Muốn tạo object với chức năng được nâng cao hơn theo yêu cầu....v...vvvv...

class Car {
  drive() {
    return 'lái xe';
  }
}

class CarProxy {
  driver;
  constructor(driver) {
    this.driver = driver;
  }

  drive() {
    return this.driver.age < 18 ? "chưa đủ tuổi lái xe" : new Car().drive();
  }
}

class Driver {
  age;
  constructor(age) {
    this.age = age;
  }
}

/// ví dụ trên khi người lái xe muốn lái xe thì request sẽ vào class proxy (trung gian) để thưc hiện xem 
// người lái đủ tuổi để lái xe hay không
// nếu đủ tuổi thì sẽ cấp xe ngược lại sẽ thông báo.
// => Protection proxy

// proxy pattern sẽ tạo 1 đại diện cho đối tượng khác để kiểm tra và thực hiện logic theo yêu cầu 