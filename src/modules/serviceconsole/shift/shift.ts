import { api, LightningElement, track } from 'lwc';
import { isMorningShift, isDayShift, isNightShift } from 'global/utils';
import luxon from 'luxon';
import classNames from 'classnames';

import type { ShiftObject } from '../shiftItem/shiftItem';

export default class Shift extends LightningElement {
    @track _shift: ShiftObject;
    @track _isToday: boolean;
    @track _isMouseOver: boolean;

    constructor() {
        super();
        this._shift = { Id: 0, Date: '' };
        this._isToday = false;
        this._isMouseOver = false;
    }

    @api
    get shift(): ShiftObject {
        return this._shift;
    }

    set shift(value: ShiftObject) {
        this._shift = value;
    }

    @api
    get isToday(): boolean {
        return this._isToday;
    }

    set isToday(value: boolean) {
        this._isToday = value;
    }

    get shiftTimePeriod(): string {
        let result = '';
        if (this.hasSegments) {
            const hour = Number(this._shift.StartTime?.split(':')[0]);
            const minute = Number(this._shift.StartTime?.split(':')[1]);
            const start = luxon.DateTime.fromISO(this._shift.Date)
                .setLocale('en-US')
                .set({ hour: hour, minute: minute })
                .toFormat('h:mma');
            const end = luxon.DateTime.fromISO(this._shift.Date)
                .setLocale('en-US')
                .set({ hour: hour, minute: minute })
                .plus({ minutes: this._shift.DurationInMinutes })
                .toFormat('h:mma');
            result = `${start} - ${end}`;
        }
        if (isMorningShift(this._shift) && !this.isToday) {
            result = result.concat(', Morning shift');
        } else if (isDayShift(this._shift) && !this.isToday) {
            result = result.concat(', Day shift');
        } else if (isNightShift(this._shift) && !this.isToday) {
            result = result.concat(', Night shift');
        }
        return result;
    }

    get hasSegments(): boolean {
        return (
            this._shift.ShiftSegments !== undefined &&
            this._shift.ShiftSegments?.length !== 0
        );
    }

    get segmentClasses(): string {
        return `segment-container`;
    }

    get shiftClasses(): string {
        return classNames('slds-is-relative shift-breakdown', {
            'shift-breakdown_today': this._isToday,
        });
    }

    get nowMarkerClasses(): string {
        return classNames('slds-is-absolute now-marker', {
            'slds-hide':
                !this.isCurrTimeDuringShift ||
                (!this.isToday && !this.isCurrTimeDuringShift),
        });
    }

    get isCurrTimeDuringShift(): boolean {
        const hour = Number(this._shift.StartTime?.split(':')[0]);
        const minute = Number(this._shift.StartTime?.split(':')[1]);
        const start = luxon.DateTime.fromISO(this._shift.Date)
            .setLocale('en-US')
            .set({ hour: hour, minute: minute });
        const end = luxon.DateTime.fromISO(this._shift.Date)
            .setLocale('en-US')
            .set({ hour: hour, minute: minute })
            .plus({ minutes: this._shift.DurationInMinutes });

        return (
            start.diffNow('minutes').minutes <= 0 &&
            end.diffNow('minutes').minutes >= 0
        );
    }

    get isMouseOver(): boolean {
        return this._isMouseOver;
    }

    handleSizeSet(event: CustomEvent): void {
        (event.target as HTMLDivElement).style.width = `${event.detail.size}%`;
    }

    handleMouseOver(): void {
        this.template
            .querySelector('.shift-breakdown')
            ?.classList.toggle('highlight');
        this._isMouseOver = true;
    }

    handleMouseOut(): void {
        this.template
            .querySelector('.shift-breakdown')
            ?.classList.toggle('highlight');
        this._isMouseOver = false;
    }
}
