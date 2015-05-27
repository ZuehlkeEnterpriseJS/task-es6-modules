import Car from 'Car';

export class App {
    constructor() {
        const car = new Car();
        car.start();
        console.log(`Status car is ${ car.isCarReady ? "running" : "not running" }`);
    }
}