import Logger from 'Logger';
import Motor from 'Motor';
import Lights from 'Lights';

export default class Car {

    constructor() {
        this.motor = new Motor();
        this.lights = new Lights();
    }

    start() {
        Logger.info("Car is starting..");
        this.motor.start();
        this.lights.on();
    }

    get isCarReady() {
        return this.motor.isRunning && this.lights.lightsAreOn;
    }
}