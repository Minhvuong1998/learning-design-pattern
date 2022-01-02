// abstract factory là mẫu thiết kế hướng đồi tượng nó như là 1 supper factory chứa các factory method khác
// 

const TRANSPORT_TYPE = {
  TRUCK: "TRUCK",
  SHIP: "SHIP",
};
// factory method
class TransportFactory {
  static getTransport(transportType) {
    switch (transportType) {
      case TRANSPORT_TYPE.TRUCK:
        return new Truck();
      case TRANSPORT_TYPE.SHIP:
        return new Ship();
      default:
        console.error("This transport type if unsupported");
    }
  }
}

class Truck {
  deliver() {
    return "truck";
  }
}

class Ship {
  deliver() {
    return "ship";
  }
}

class Client {
  static main() {
    const transport = TransportFactory.getTransport(TRANSPORT_TYPE.SHIP);
    console.log(transport.deliver());
  }
}
Client.main();
// abstract factory
class Employee {
  name;
  constructor(name) {
    this.name = name;
  }

  say() {
    return `i am ${this.name}`;
  }
}

class FactoryEmployee {
  create(name) {
    return new Employee(name);
  }
}

class Vendor {
  name;
  constructor(name) {
    this.name = name;
  }

  say() {
    return `i am ${this.name}`;
  }
}

class VendorFactory {
  create(name) {
    return new Vendor(name);
  }
}

function main() {
  const factoryEmployee = new FactoryEmployee();
  const factoryVedor = new VendorFactory();

  const people = [
    factoryEmployee.create("cat"),
    factoryEmployee.create("dog"),
    factoryVedor.create("bird"),
    factoryVedor.create("tiger"),
  ];
  for (const person of people) {
    console.log(person.say());
  }
}

main();

// more example abstract factory
/**
 *           || chair  || sofa  || table
 * art deco  ||        ||       ||
 * victorian ||        ||       ||
 * modern    ||        ||       ||
 */
class ChairArtDeco {
  create() {
    console.log("ChairArtDeco");
  }
}

class SofaArtDeco {
  create() {
    console.log("SofaArtDeco");
  }
}

class TableArtDeco {
  create() {
    console.log("TableVictorian");
  }
}
///
class ChairVictorian {
  create() {
    console.log("ChairVictorian");
  }
}

class SofaVictorian {
  create() {
    console.log("SofaVictorian");
  }
}

class TableVictorian {
  create() {
    console.log("TableVictorian");
  }
}
///
class ChairModern {
  create() {
    console.log("ChairModern");
  }
}

class SofaModern {
  create() {
    console.log("SofaModern");
  }
}

class TableModern {
  create() {
    console.log("TableModern");
  }
}

class ArtDecoFactory {
  createChair() {
    return new ChairArtDeco();
  }

  createSofa() {
    return new SofaArtDeco();
  }

  createTable() {
    return new TableArtDeco();
  }
}

class VictorianFactory {
  createChair() {
    return new ChairVictorian();
  }

  createSofa() {
    return new SofaVictorian();
  }

  createTable() {
    return new TableVictorian();
  }
}

class ModernFactory {
  createChair() {
    return new ChairModern();
  }

  createSofa() {
    return new SofaModern();
  }

  createTable() {
    return new TableModern();
  }
}

const STYLE_TYPE = {
  ARTDECO: "ARTDECO",
  VICTORIAN: "VICTORIAN",
  MODERN: "MODERN",
};
//
class FurnitureFactory {
  static getFactory(styleType) {
    switch (styleType) {
      case STYLE_TYPE.ARTDECO:
        return new ArtDecoFactory();
      case STYLE_TYPE.VICTORIAN:
        return new VictorianFactory();
      case STYLE_TYPE.MODERN:
        return new ModernFactory();
      default:
        throw new Error("This furniture is unsupported");
    }
  }
}

class ClientOne {
  static main(args){
      const factory = FurnitureFactory.getFactory(STYLE_TYPE.ARTDECO);
      const chair = factory.createChair();
      chair.create(); 
  }
}
ClientOne.main();

// factory method chỉ là một phương thức được sử dụng để tạo ra các đối tượng trong một class
// factory method just is method used to create objects in a class
// abstrct factory tạo mới một class abstract với các method trừu tượng cho các method của class sẽ được tạo
// chả hiểu lắm :(  
// https://stackoverflow.com/questions/5739611/what-are-the-differences-between-abstract-factory-and-factory-design-patterns