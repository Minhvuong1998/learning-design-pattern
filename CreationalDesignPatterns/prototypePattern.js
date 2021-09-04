
/**
 * ! 1.3 PROTOTYPE PATTERN
 * ? Pattern này sẽ sử dụng một một đối tượng khác như một “khung xương” để khởi tạo nên một đối tượng mới.
 **/

// bài toán đặt ra
// 1 lớp animal

function Animal (name) {
  this.name = name;
  this.getName = function() {
    return this.name;
  }
}

const cat = new Animal('cat');
const dog = new Animal('dog');
// như trên thì Animal dog and cat dc tạo ra và chúng chia sẻ contructor với nhau
console.log(cat.contructor === dog.contructor); // true
// nhưng mỗi cat và dog lại có getName riêng biệt nhưng phương thức getName lai giống hệt nhau
// điều này khá lãng phí bộ nhớ
// kiểm tra như sau 
console.log(cat.getName === dog.getName); // false

// chính vì vậy ta phải cần cái gì đó giống như contructor đó chính là prototype
// UNDER is solution
Animal.prototype.getNameSame = function() {
  return this.name;
}

console.log(cat.getNameSame === dog.getNameSame);


// the end.