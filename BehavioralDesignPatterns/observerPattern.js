// observer pattern  là một design pattern nơi mà một object có nhiệm vụ duy trì một danh sách các object dựa vào nó.
// nó tụ động thông báo đến các object khi có bất kì thay đổi nào vè trạng thái


class Subject {
  constructor() {
    this.observers = []
  }
  // Dùng để đăng ký
  subscribe(func) {
    this.observers.push(func)
  }
  // Dùng để hủy đăng ký
  unsubscribe(func) {
    this.observers = this.observers.filter((subscriber) => subscriber !== func)
  }
  // Gửi 1 thông báo đến mọi data 
  fire(data) {
    this.observers.forEach((observer) => observer(data))
  }
}

const $gun = new Subject()
const func = (value) => {
  console.log(value, 'notification')
}
$gun.subscribe(func)
$gun.fire('boom')