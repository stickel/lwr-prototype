import { api, LightningElement } from "lwc";

export default class LabelSection extends LightningElement {
    _labels = [];

    @api key;

    @api
    get labels() {
        return this._labels;
    }

    set labels(value) {
        this._labels = value;
    }
}