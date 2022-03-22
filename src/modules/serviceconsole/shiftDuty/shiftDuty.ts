import { LightningElement, api, track } from 'lwc';
import luxon from 'luxon';
import classNames from 'classnames';
import type { ShiftSegment } from '../shiftItem/shiftItem';

export default class ShiftDuty extends LightningElement {
    @track _duty: ShiftSegment;
    @track _shiftDuration: number;
    @track _isToday: boolean;
    @track _hover: boolean;

    constructor() {
        super();
        this._duty = {
            Id: 0,
            Start: '',
            DurationInMinutes: 0,
            Type: '',
        };
        this._shiftDuration = 0;
        this._isToday = false;
        this._hover = false;
    }

    connectedCallback(): void {
        this.dispatchEvent(
            new CustomEvent('sizeset', {
                bubbles: true,
                cancelable: true,
                detail: {
                    size: this.width,
                },
            }),
        );
    }

    @api
    get duty(): ShiftSegment {
        return this._duty;
    }

    set duty(value: ShiftSegment) {
        this._duty = value;
    }

    @api
    get shiftDuration(): number {
        return this._shiftDuration;
    }

    set shiftDuration(value: number) {
        this._shiftDuration = value;
    }

    @api
    get isToday(): boolean {
        return this._isToday;
    }

    set isToday(value: boolean) {
        this._isToday = value;
    }

    @api
    get hoverState(): boolean {
        return this._hover;
    }

    set hoverState(value: boolean) {
        this._hover = value;
    }

    get start(): string {
        return luxon.DateTime.fromISO(this._duty.Start)
            .setLocale('en-US')
            .toFormat('h:mma')
            .toString();
    }

    get onDuty(): boolean {
        return this._duty.Type.toLowerCase() !== 'break';
    }

    get duration(): string {
        const duration = luxon.Duration.fromObject({
            minutes: this._duty.DurationInMinutes,
        })
            .shiftTo('hours', 'minutes')
            .toObject();
        let durationString = '';
        if (duration.hours && duration.hours >= 1) {
            durationString = `${duration.hours}h `;
        }
        if (duration.minutes && duration.minutes >= 1) {
            durationString = durationString.concat(`${duration.minutes}min`);
        }
        return durationString;
    }

    get computedClasses(): string {
        return classNames(`shift-segment`, {
            'shift-segment_on-duty': this._duty.Type.toLowerCase() !== 'break',
            'shift-segment_break': this._duty.Type.toLowerCase() === 'break',
            highlight: this._hover,
        });
    }

    get width(): string {
        const percentage =
            (this._duty.DurationInMinutes / this._shiftDuration) * 100;
        return `${percentage}`;
    }
}
