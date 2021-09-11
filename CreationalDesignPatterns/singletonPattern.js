/**
 * ! 1.4 SINGLETON PATTERN
 * ? Pattern này chỉ cho phép có duy nhất một đối tượng được khởi tạo từ class.
 * ? Cách hoạt động của nó như sau – Nếu chưa có đối tượng nào được khởi tạo từ class trước đó,
 * ? nó sẽ khởi tạo đối tượng từ class và trả về đối tượng đó, nhưng nếu đối tượng đã được khởi
 * ? tạo rồi thì thay vì khởi tạo lần nữa, nó sẽ trả về đối tượng đã được khởi tạo trước đó.
 **/

//  Design Pattern này được dùng khi ta muốn đảm bảo chỉ có duy nhất một object được sinh ra trong toàn hệ thống.
//  Tức là chúng ta giới hạn việc khởi tạo một class đối với một object. 
//  Lần đầu tiên một object của một class implementing Singleton pattern được khởi tạo. 
//  Bất kỳ lần thử nào tiếp theo cũng sẽ chỉ trả về instance đầu tiên
// example  

// Singleton được dùng khi nào?
// Đối tượng tiêu tốn quá nhiều thời gian hoặc tài nguyên khi tạo đối tượng nhưng được sử dụng thường xuyên. 
// Hệ thống chỉ cần một đối tượng thể hiện.
// Các đối tượng cần được khởi tạo thường xuyên và sau đó bị phá hủy

class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    this._data = data;
    Database.instance = this;
    Database.exists = true;
    return this;
  }
 
  getData() {
    return this._data;
  }
 
  setData(data) {
    this._data = data;
  }
}

// usage
const mongo = new Database('mongo');
console.log(mongo.getData()); // mongo
 
const mysql = new Database('mysql');
console.log(mysql.getData()); // mongo

prototypeObject = {
	fullName: function(){
		return this.firstName + ' ' + this.lastName		
	}
};
var person = Object.create(prototypeObject);

console.log(person); // {}

// Adding properties to the person object
person.firstName = 'Hieu';
person.lastName = 'Bui';

person.fullName();

console.log(person.prototype); // Hieu Bui