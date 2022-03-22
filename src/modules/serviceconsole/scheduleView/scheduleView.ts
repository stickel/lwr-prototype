import { LightningElement, api, track } from 'lwc';
import type { ShiftObject } from '../shiftItem/shiftItem';

export interface WorkDay {
    Id: number;
    Date: string;
    Shifts?: ShiftObject[];
    DayOfWeek?: number;
}

export default class ScheduleView extends LightningElement {
    @track _workdays: WorkDay[];
    @track _dateRange: string;
    @track _offset: number;
    @track _limit: number;

    constructor() {
        super();
        this._workdays = [];
        this._dateRange = '';
        this._offset = 0;
        this._limit = 5;
    }

    @api
    get workdays(): WorkDay[] {
        return this._workdays;
    }

    set workdays(value: WorkDay[]) {
        this._workdays = value;
    }

    @api
    get dateRange(): string {
        return this._dateRange;
    }

    set dateRange(value: string) {
        this._dateRange = value;
    }

    @api
    get offset(): number {
        return this._offset;
    }

    set offset(value: number) {
        this._offset = value;
    }

    @api
    get limit(): number {
        return this._limit;
    }

    set limit(value: number) {
        this._limit = value;
    }
}
