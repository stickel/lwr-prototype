import { LightningElement, api } from "lwc";

export default class PageHeader extends LightningElement {
    @api headerIcon: string;
    @api breadcrumbIsLink: boolean;
    @api pageTitle: string;
    @api description?: string;

    constructor() {
        super();
        this.headerIcon = '';
        this.breadcrumbIsLink = false;
        this.pageTitle = '';
        this.description = '';
    }

    async renderedCallback(): Promise<void> {
        // let's remove the `slds-icon-text-default` class from the header icon
        // because it's not allowing proper fill overrides
        const iconElement = this.template.querySelector('.setup-header-icon')!
            .shadowRoot!.querySelector('lightning-primitive-icon')!
            .shadowRoot!.querySelector('.slds-icon');
        if (iconElement && iconElement.classList.contains('slds-icon-text-default')) {
            iconElement.classList.remove('slds-icon-text-default');
        }
    }

    get hasDescription(): boolean {
        return this.description?.length !== 0;
    }
}