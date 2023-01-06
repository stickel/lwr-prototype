import { LightningElement, api, track } from 'lwc';

export default class SidebarFormValues extends LightningElement {
    @track _label: string;
    @track _value: string;

    @api
    get label(): string {
        return this._label;
    }

    set label(value: string) {
        this._label = value;
    }

    @api
    get value(): string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
    }

    constructor() {
        super();
        this._label = ' ';
        this._value = ` `;
    }
}
