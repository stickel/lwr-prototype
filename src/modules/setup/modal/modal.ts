import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class Modal extends LightningModal {
    @api content: any;
    @api options = [];
    @api heading = '';
    @api formData: any;

    constructor() {
        super();
    }

    handleOptionClick(event: MouseEvent): void {
        const { target } = event;
        console.log('option click', target);
        // const { id } = target?.dataset;
        this.close(target);
    }

    handleCloseClick(): void {
        this.close('Cancelled');
    }

    getButtonClasses(variant: string): string {
        return `slds-button slds-button_${variant}`;
    }

    formDataForField(fieldName: string): string[] {
        if (this.formData && this.formData.length !== 0) {
            return this.formData[fieldName];
        }
        return [];
    }

    // @track _open: boolean;

    // @api
    // open(): void {
    //     console.log('calling modal.open');
    //     if (!this._open) {
    //         this._open = true;
    //     }
    // }

    // @api
    // close(): void {
    //     console.log('calling modal.close');
    //     if (!this._open) {
    //         return;
    //     }

    //     this._open = false;
    // }

    // constructor() {
    //     super();
    //     this._open = false;
    // }

    // handleCloseClick(): void {
    //     this.dispatchEvent(
    //         new CustomEvent('cancel', {
    //             cancelable: true,
    //         }),
    //     );
    //     this.close();
    // }

    // handleModalKeyDown(event: KeyboardEvent): void {
    //     const hasModifier = event.ctrlKey || event.metaKey || event.shiftKey;
    //     if (!hasModifier && (event.key === 'Esc' || event.key === 'Escape')) {
    //         event.stopPropagation();
    //         event.preventDefault();

    //         this.close();
    //     }
    // }

    // get isOpen(): boolean {
    //     return this._open;
    // }
}
