///
class Person {
  name;
  age;
  address;
  tel;
  education;
  constructor(name, age, address, tel, education) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.tel = tel;
    this.education = education;
  }
  // method and other
}

const person = new Person("a", 1, "abc def", 333333, "xxxx yyyyyy");

// vấn đề code trên nhìn ổn và có dễ bảo trì về lâu dài ?
//
// giờ áp dụng this pattern để dễ đọc mã và dễ bảo trì hơn

class PersonBuilder {
  name;
  age;
  address;
  tel;
  education;

  setName(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
  }

  setAddress(address) {
    this.address = address;
  }

  setTel(tel) {
    this.tel = tel;
  }

  setEducation(education) {
    this.education = education;
  }
}

const personBuilder = new PersonBuilder()
  .setName('a há')
  .setAge(1)
  .setAddress('aaa bbbb')
  .setEducation('ebc def');


  // refer:  https://medium.com/zero-equals-false/builder-design-pattern-in-node-js-c942ac7354a9

  // khái liệm củ cải
  // builder pattern lằm trong Creational pattern mẫu thiết kế dành cho việc KHỞI TẠO ĐỐI TƯỢNG của lớp
  // vậy builder pattern được tạo để làm gì ta ??? :D ??? 
  // tạo ra để xây dựng cho một đối tương phực tạp bằng cách sử dụng các đối tượng đơn giản và sử dụng để tiếp cận từng bước.
  // và xây dựng các đối tượng đôc lập với các đối tượng khác

  // giải thích thêm vần đề
  // vấn đề đặt ra ở đây khi một đối tượng của chúng ta có thể được khởi tạo với rất nhiều những tham số truyền vào
  //  và có thể một vài trong số đó không nhất thiết phải truyền vào trong lúc khởi tạo(có thể có hoặc không).
  // Không sao cả, chúng ta có thể dễ dàng giải quyết bằng cách truyền những giá trị null vào tham số
  //  trong hàm constructor hoặc là nạp chồng nhiều hàm constructor khác với những tham số tùy ý. 
  // Cách này ban đầu nghe có vẻ ổn nhưng sẽ có những nhược điểm như sau:
  // Phải tạo rất nhiều hàm constructor trong những trường hợp khác nhau
  // Khó khăn trong việc xác định thứ tự của những tham số truyền vào

  /// => vậy Builder Pattern sẽ giải quyết vấn đề này :D