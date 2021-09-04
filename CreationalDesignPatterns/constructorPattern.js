/**
 * ! 1.1 CONSTRUCTOR PATTERN
 **/
/**
 * ? constructor vốn là một hàm đặc biệt được sử dụng để tạo ra một đối tượng mới từ một class. 
 * ? Tuy nhiên đối với javascript, thì có thể tạo ra một đối tượng mới mà không nhất thiết 
 * ? cần phải khởi tạo từ một function hay một class nào cả
 **/

/**
 * TODO: cách khởi tạo chuyền thống 
 **/
 function Animal(name, age) {
  // gán các thuộc tính cho đối tượng
  this.name = name;
  this.age = age;
  // khai báo phương thức cho đối tượng
  // this.getNameAge = function () {
  //   return this.name + '=======' + this.age;
  // }
}
/**
 * TODO: sử dụng cú pháp es6
 **/
class ContructorPatternES6 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getNameAge() {
    return this.name + '=======' + this.age;
  }
}
// Tạo một đối tượng mới từ lớp ContructorPatternES6 ở trên
const person = new ContructorPatternES6('jack', 100);

// nhược điểm 2 cách viết trên khó kế thừa phương thức getNameAge sẽ phải định nghĩa lại đối với mỗi đối tượng. 
// để khắc phục nhươc điểm trên  sử dụng Prototypes
Animal.prototype.getNameAge = function() {
  return this.name + '=======' + this.age;
}
// sử dụng 
const dog = new Animal("Dog", 1);
const bird = new Animal("Bird", 2);
console.log(dog.getNameAge());
console.log(bird.getNameAge());