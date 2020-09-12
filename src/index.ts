const MILLISECONDS_PER_SECOND = 1000;
const MILLISECONDS_PER_MINUTE = 60000;
const MILLISECONDS_PER_HOUR = 3600000;
const MILLISECONDS_PER_DAY = 86400000;
const MILLISECONDS_PER_WEEK = 604800000;
const MILLISECONDS_PER_YEAR = 31536000000;

export class TimeInterval {

    private readonly _milliseconds: number;

    constructor(milliseconds: number) {
        this._milliseconds = milliseconds;
    }

    get milliseconds() {
        return this._milliseconds;
    }

    get seconds() {
        return this._milliseconds / MILLISECONDS_PER_SECOND;
    }

    get minutes() {
        return this._milliseconds / MILLISECONDS_PER_MINUTE;
    }

    get hours() {
        return this._milliseconds / MILLISECONDS_PER_HOUR;
    }

    get days() {
        return this._milliseconds / MILLISECONDS_PER_DAY;
    }

    get weeks() {
        return this._milliseconds / MILLISECONDS_PER_WEEK;
    }

    get years() {
        return this._milliseconds / MILLISECONDS_PER_YEAR;
    }

    add(timeInterval: TimeInterval) {
        return new TimeInterval(this._milliseconds + timeInterval._milliseconds);
    }

    subtract(timeInterval: TimeInterval) {
        return new TimeInterval(this._milliseconds - timeInterval._milliseconds);
    }

    multiply(timeInterval: TimeInterval) {
        return new TimeInterval(this._milliseconds * timeInterval._milliseconds);
    }

    divide(timeInterval: TimeInterval) {
        return new TimeInterval(this._milliseconds / timeInterval._milliseconds);
    }

}

export const milliseconds = (value: number) => new TimeInterval(value);
export const seconds = (value: number) => new TimeInterval(value * MILLISECONDS_PER_SECOND);
export const minutes = (value: number) => new TimeInterval(value * MILLISECONDS_PER_MINUTE);
export const hours = (value: number) => new TimeInterval(value * MILLISECONDS_PER_HOUR);
export const days = (value: number) => new TimeInterval(value * MILLISECONDS_PER_DAY);
export const weeks = (value: number) => new TimeInterval(value * MILLISECONDS_PER_WEEK);
export const years = (value: number) => new TimeInterval(value * MILLISECONDS_PER_YEAR);
