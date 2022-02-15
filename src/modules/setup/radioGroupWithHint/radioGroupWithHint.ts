import { LightningElement, api, track } from 'lwc';
import { classSet } from 'lightning/utils';

const i18n = {
    required: 'Required',
};

export interface RadioOptionWithHint {
    label: string;
    hint?: string;
    value: string;
}

export default class RadioGroupWithHint extends LightningElement {
    static delegatesFocus = true;

    /**
     * The style of the radio group. Options are radio or button. The default is radio.
     * @type {string}
     * @default radio
     */
    @api type = 'radio';

    /**
     * Text label for the radio group.
     * @type {string}
     * @required
     */
    @api label = '';

    /**
     * Array of label-value pairs for each radio button.
     * @type {list}
     * @required
     */
    @api options: RadioOptionWithHint[] = [];

    // Validity related message
    /**
     * Optional message displayed when no radio button is selected and the required attribute is set to true.
     * @type {string}
     */
    @api messageWhenValueMissing = '';

    /**
     * Specifies the name of the radio button group. Only only one button can be selected if a name is specified
     * for the group.
     * @type {string}
     */
    // @api name = generateUniqueId();

    @track _required = false;
    @track _disabled = false;
    @track _helpMessage = '';
    @track _value = '';
    @track _variant = '';

    connectedCallback(): void {
        this.classList.add('slds-form-element');
        this.updateClassList();
    }

    updateClassList(): string {
        return classSet(this.classList, {
            'slds-form-element_stacked': this.variant === 'label-stacked',
            'slds-form-element_horizontal': this.variant === 'label-inline',
        }).toString();
    }

    /**
     * Specifies the value of the selected radio button.
     * @type {object}
     */
    @api
    get value(): string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
    }

    get radioButtonElements(): any {
        return this.template.querySelectorAll('input');
    }

    /**
     * If present, the radio group is disabled and users cannot interact with it.
     * @type {boolean}
     * @default false
     */
    @api
    get disabled(): boolean {
        return this._disabled;
    }

    set disabled(value: boolean) {
        this._disabled = value;
    }

    /**
     * If present, a radio button must be selected before the form can be submitted.
     * @type {boolean}
     * @default false
     */
    @api
    get required(): boolean {
        return this._required;
    }

    set required(value: boolean) {
        this._required = value;
    }

    /**
     * The variant changes the appearance of the radio group.
     * Accepted variants include standard, label-hidden, label-inline, and label-stacked.
     * This value defaults to standard.
     * Use label-hidden to hide the label but make it available to assistive technology.
     * Use label-inline to horizontally align the label and radio group.
     * Use label-stacked to place the label above the radio group.
     * @type {string}
     * @default standard
     */
    @api
    get variant(): string {
        return this._variant || 'standard';
    }

    set variant(value: string) {
        this._variant = value;
        this.updateClassList();
    }

    get i18n(): {} {
        return i18n;
    }

    get transformedOptions(): any[] {
        const { options, value } = this;
        if (Array.isArray(options)) {
            return options.map((option: any, index: number) => ({
                label: option.label,
                hint: option.hint,
                value: option.value,
                isChecked: value === option.value,
                indexId: `radio-${index}`,
            }));
        }
        return [];
    }

    /**
     * Sets focus on the first radio input element.
     */
    @api
    focus(): void {
        const firstRadio = this.template.querySelector('input');
        if (firstRadio) {
            firstRadio.focus();
        }
    }

    handleFocus(): void {
        this.dispatchEvent(new CustomEvent('focus'));
    }

    handleBlur(): void {
        this.dispatchEvent(new CustomEvent('blur'));
    }

    handleChange(event: CustomEvent): void {
        event.stopPropagation(); // Stop input element from propagating event up and instead propagate from radio group

        this._value = (event.target as HTMLInputElement).value;

        this.dispatchEvent(
            new CustomEvent('change', {
                detail: {
                    value: this._value,
                },
                composed: true,
                bubbles: true,
                cancelable: true,
            }),
        );
    }

    get computedLegendClass(): string {
        const classnames = classSet(
            'slds-form-element__legend slds-form-element__label',
        );

        return classnames
            .add({
                'slds-assistive-text': this.variant === 'label-hidden',
            })
            .toString();
    }
}
