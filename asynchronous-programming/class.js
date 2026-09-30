class Car {
  // Runs automatically upon instantiation
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
  }

  // Method attached to Car's prototype
  accelerate(amount) {
    this.speed += amount;
    console.log(`${this.brand} ${this.model} is now going ${this.speed} km/h.`);
  }
}

// Creating an instance
const myCar = new Car("Toyota", "Corolla");
myCar.accelerate(50); // Toyota Corolla is now going 50 km/h.