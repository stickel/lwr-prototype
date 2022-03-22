import { LightningElement, api, track } from 'lwc';
import { SwapShift } from '../shiftItem/shiftItem';
import classNames from 'classnames';

export default class ShiftList extends LightningElement {
    @track _shifts: SwapShift[];

    @api title = '';
    @api size = 'large';
    @api
    get shifts(): SwapShift[] {
        return this._shifts;
    }

    set shifts(value: SwapShift[]) {
        this._shifts = value;
    }

    constructor() {
        super();
        this._shifts = [];
    }

    get totalAvailableShifts(): number {
        return this._shifts.length;
    }

    get computedClasses(): string {
        return classNames(`shift-list shift-list_${this.size}`, {
            'slds-p-right_small': this._shifts.length >= 5,
        });
    }
}
