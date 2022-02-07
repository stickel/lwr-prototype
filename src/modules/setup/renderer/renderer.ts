import { api, LightningElement } from 'lwc';

export default class Renderer extends LightningElement {
    @api content: any;

    render(): any {
        return this.content;
    }
}
