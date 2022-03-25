import classNames from 'classnames';
import luxon, { DateTime } from 'luxon';
import { LightningElement, api, track } from 'lwc';
import { isMorningShift, isDayShift, isNightShift } from 'global/utils';
import type { SwapShift } from '../shiftItem/shiftItem';

export default class ShiftBlock extends LightningElement {
    @track _popupAlignment: any;

    @api
    get shift(): SwapShift {
        return this._shift;
    }

    set shift(value: SwapShift) {
        this._shift = value;
    }

    @track _shift: SwapShift;

    constructor() {
        super();
        this._shift = {
            Id: 0,
            Date: '',
            DurationInMinutes: 0,
            Swap: {
                request: false,
                complete: false,
            },
        };
        this._popupAlignment = { horizontal: '', vertical: '' };
    }

    handleOpenPopup(event: CustomEvent): void {
        if (this._shift.Swap.status && this._shift.Swap.status.length !== 0) {
            return;
        }
        this.openPopup(event.target as HTMLElement);
    }

    // Uncomment this to handle mouseLeave events when the popup shows on hover
    // Comment this method when using a click event to show the popup
    handleMouseLeave(): void {
        this.closePopup();
    }

    handleAlignmentUpdate(event: Event): void {
        this._popupAlignment = (event.target as any).alignment;
    }

    handleAccept(event: Event): void {
        this.removeShift((event.target as HTMLButtonElement).value, 'accept');
    }

    handleDecline(event: Event): void {
        this.removeShift((event.target as HTMLButtonElement).value, 'decline');
    }

    get shiftBlockType(): string {
        if (isMorningShift(this._shift)) {
            return 'Morning shift';
        } else if (isDayShift(this._shift)) {
            return 'Day shift';
        } else if (isNightShift(this._shift)) {
            return 'Night shift';
        } else {
            return '';
        }
    }

    get shiftDate(): string {
        return luxon.DateTime.fromISO(this._shift.Date).toFormat('LLLL d');
    }

    get shiftFormattedTime(): string {
        return `${luxon.DateTime.fromISO(this._shift.Date).toFormat(
            'EEEE, h:mma',
        )} - ${luxon.DateTime.fromISO(this._shift.Date)
            .plus({ minutes: this._shift.DurationInMinutes })
            .toFormat('h:mma')}`;
    }

    get isAssigned(): boolean {
        if (this.shift.Assignee && this.shift.Assignee.length !== 0) {
            return true;
        }

        return false;
    }

    get notes(): string {
        if (this.isAssigned) {
            return `Assigned by ${this.shift.Assignee}`;
        }

        if (this.hasSwapStatus) {
            return `Status: ${this.shift.Swap.status}`;
        }

        if (this.shift.Swap.with && this.shift.Swap.with.length !== 0) {
            return `Swap with ${this.shift.Swap.with}`;
        }
        return '';
    }

    get hasSwapReason(): boolean {
        if (
            this.hasSwapProperty('reason') &&
            this.shift.Swap.reason?.length !== 0
        ) {
            return true;
        }
        return false;
    }

    get hasSwapStatus(): boolean {
        if (
            this.hasSwapProperty('status') &&
            this.shift.Swap.status?.length !== 0
        ) {
            return true;
        }
        return false;
    }

    get hasSwapPerson(): boolean {
        if (
            this.hasSwapProperty('with') &&
            this.shift.Swap.with?.length !== 0
        ) {
            return true;
        }
        return false;
    }

    get noteBlockClasslist(): string {
        return classNames('shift-block-notes', {
            'slds-m-top_medium':
                this.hasSwapStatus || this.isAssigned || this.hasSwapPerson,
            'slds-hide':
                !this.hasSwapStatus &&
                !this.isAssigned &&
                (!this.hasSwapPerson || this.shift.Swap.with?.length === 0),
        });
    }

    hasSwapProperty(prop: string): boolean {
        if (
            this.shift.Swap &&
            Object.prototype.hasOwnProperty.call(this.shift.Swap, prop)
        ) {
            return true;
        }
        return false;
    }

    startTime(): DateTime {
        const hour = Number(this._shift.StartTime?.split(':')[0]);
        const minute = Number(this._shift.StartTime?.split(':')[1]);
        return luxon.DateTime.fromISO(this._shift.Date).setLocale('en-US').set({
            hour: hour,
            minute: minute,
        });
    }

    removeShift(id: string, action: string): void {
        this.template
            .querySelector('li')
            ?.classList.add('shift-block-fade-out');
        setTimeout(() => {
            this.dispatchEvent(
                new CustomEvent('removeshift', {
                    bubbles: true,
                    cancelable: true,
                    detail: { id: id, action: action },
                }),
            );
        }, 400);
    }

    openPopup(target: HTMLElement): void {
        const refElement = target;
        // Uncomment for show on button click
        this.popup.show(refElement, {
            reference: { horizontal: 'right', vertical: 'top' },
            popup: { horizontal: 'right', vertical: 'bottom' },
            padding: 1,
            offset: 1.25,
        });
        // Uncomment for show on hover
        // this.popup.show(refElement, {
        //     reference: { horizontal: 'right', vertical: 'top' },
        //     popup: { horizontal: 'right', vertical: 'bottom' },
        //     padding: 0,
        //     offset: 1.25,
        // });
    }

    closePopup(): void {
        this.popup.close();
    }

    get popup(): any {
        return this.template.querySelector('lightning-popup');
    }

    get popupClasses(): string {
        const { horizontal, vertical } = this._popupAlignment;
        return `slds-popover slds-nubbin_${vertical}-${horizontal}`;
    }
}
