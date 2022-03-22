import { api, LightningElement, track } from 'lwc';
import luxon from 'luxon';
import classNames from 'classnames';

export interface ShiftObject {
    Id: number;
    Date: string;
    Assignee?: string;
    StartTime?: string;
    DurationInMinutes?: number;
    ShiftSegments?: ShiftSegment[];
}

export interface ShiftSegment {
    Id: number;
    Start: string;
    DurationInMinutes: number;
    Type: string;
}

export interface SwapShift extends ShiftObject {
    Swap: {
        request: boolean;
        complete: boolean;
        with?: string;
        reason?: string;
        status?: string;
    };
}

export default class ShiftItem extends LightningElement {
    @track _shifts: ShiftObject[];
    @track _date: string;
    @track _multipleShifts: boolean;

    constructor() {
        super();
        this._shifts = [];
        this._date = '';
        this._multipleShifts = false;
    }

    @api
    get shifts(): ShiftObject[] {
        return this._shifts;
    }

    set shifts(value: ShiftObject[]) {
        this._shifts = value;
    }

    @api
    get date(): string {
        return this._date;
    }

    set date(value: string) {
        this._date = value;
    }

    get shiftDay(): string {
        return luxon.DateTime.fromISO(this._date)
            .setLocale('en-US')
            .toFormat('EEE')
            .toString();
    }

    get shiftDate(): string {
        return luxon.DateTime.fromISO(this._date)
            .setLocale('en-US')
            .toFormat('MMM d')
            .toString();
    }

    get localDate(): any {
        return luxon.DateTime.fromISO(this._date).setLocale('en-US');
    }

    get hasMultipleShifts(): boolean {
        return this._shifts.length > 1;
    }

    get hasShift(): boolean {
        return this._shifts.length >= 1;
    }

    get hasSegments(): boolean {
        return (
            this.hasShift &&
            this._shifts.every((shift) => {
                return shift.ShiftSegments && shift.ShiftSegments.length >= 1;
            })
        );
    }

    get isShiftToday(): boolean {
        const today = luxon.DateTime.now().setLocale('en-US');
        const shift = this.localDate;
        return today.hasSame(shift, 'day');
    }

    get shiftItemClasses(): string {
        return classNames('slds-grid shift-item', {
            'shift-item_empty': !this.hasSegments,
            'shift-item_today': this.isShiftToday,
            'shift-item_multiple-shifts': this._multipleShifts,
        });
    }
}
