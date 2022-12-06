import { LightningElement, track, api } from 'lwc';

export default class Header extends LightningElement {
    @track _searchPlacholder = '';

    @api
    get searchPlaceholder() {
        return this._searchPlacholder;
    }

    set searchPlaceholder(value) {
        this._searchPlacholder = value;
    }
}
