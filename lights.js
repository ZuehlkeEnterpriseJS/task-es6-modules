import Logger from 'Logger';

export default class Lights {
    constructor() {
        this.lightsAreOn = false;
    }

    on() {
        this.lightsAreOn = true;
        Logger.info('Headlights now on ...');
    }
}