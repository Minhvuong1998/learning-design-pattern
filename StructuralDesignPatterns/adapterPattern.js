/**
 * vai trò của Adapter pattern là giải quyết vấn đề không tương thích về giao diện giữa hai thực thể phần mềm
 * ưu điểm
 * Sử dụng cho dự án một lớp riêng mà không đụng tới những code cũ, hay còn gọi là code gốc 
 * Tăng tính minh bạch và khả năng tái sử dụng của lớp, 
 * đóng gói việc triển khai, và khả năng tái sử dụng rất cao.
 */

//  Nhược điểm 
//  Việc sử dụng quá nhiều mẫu thiết kế Adapter sẽ làm cho hệ thống trở nên rất lộn xộn 
//  và khó nắm bắt một cách tổng thể như các mấu thiết kế trước như Factory pattern. 

// tình huống sử dụng
// Trường hợp mà sử dụng nhiều nhất có lẽ là sử dụng và nâng cấp một hệ thống mới 
// và không muốn đụng vào mô hình của các thế hệ trước kia. 

// Tình huống được sử dụng tiếp theo đó là sử dụng third party, 
// nhưng developer sẽ định nghĩa lại những interface do chính dự án yêu cầu.




// old interface
 
function Shipping() {
  this.request = function(zipStart, zipEnd, weight) {
      // ...
      return "$49.75";
  }
}

// new interface

function AdvancedShipping() {
  this.login = function(credentials) { /* ... */ };
  this.setStart = function(start) { /* ... */ };
  this.setDestination = function(destination) { /* ... */ };
  this.calculate = function(weight) { return "$39.50"; };
}

// adapter interface

function ShippingAdapter(credentials) {
  var shipping = new AdvancedShipping();

  shipping.login(credentials);

  return {
      request: function(zipStart, zipEnd, weight) {
          shipping.setStart(zipStart);
          shipping.setDestination(zipEnd);
          return shipping.calculate(weight);
      }
  };
}

// log helper

var log = (function () {
  var log = "";

  return {
      add: function (msg) { log += msg + "\n"; },
      show: function () { alert(log); log = ""; }
  }
})();

function run() {
  var shipping = new Shipping();
  var credentials = {token: "30a8-6ee1"};
  var adapter = new ShippingAdapter(credentials);

  // original shipping object and interface

  var cost = shipping.request("78701", "10010", "2 lbs");
  log.add("Old cost: " + cost);

  // new shipping object with adapted interface

  cost = adapter.request("78701", "10010", "2 lbs");

  log.add("New cost: " + cost);
  log.show();
}
