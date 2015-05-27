import Logger from 'Logger';

export default class Motor {
    constructor() {
        this.isRunning = false;
    }

    start() {
        this.isRunning = true;
        Logger.info('motor started... puff puff');
    }
}