import { api, track } from 'lwc';
import LightningModal from 'lightning/modal';
// import { getDropdownItems } from '../utils/getDropdownItems';

import Workspace from './workspace.html';
import StepOne from './step1.html';
import StepTwo from './step2.html';
import StepThree from './step3.html';

interface Option {
    label: string;
    value: string;
}

export default class ModalCreateBroadcastChannel extends LightningModal {
    @api heading = '';
    @api options = [];
    @api channelId = '';
    @api currentStep: number;

    @track _selectedRole: string;
    @track visibilityValue: string;
    @track addMembersValue: string;
    @track postRestrictionValue: string;
    @track name: string;
    @track topic: string;
    @track description: string;
    @track joinOptionsDisabled = false;

    @api
    get selectedRole(): string {
        return this._selectedRole;
    }

    set selectedRole(value: string) {
        this._selectedRole = value;
    }

    constructor() {
        super();
        this.currentStep = 0;
        this._selectedRole = '';
        this.selectedPill = '';
        this.name = '';
        this.topic = '';
        this.description = '';
        this.addMembersValue = this.addMembersOptions[0].value;
        this.postRestrictionValue = this.postRestrictionOptions[1].value;
        this.visibilityValue = this.visibilityOptions[1].value;
    }

    render(): any {
        switch (this.currentStep) {
            case 3:
                return StepThree;
            case 2:
                return StepTwo;
            case 1:
                return StepOne;
            default:
                return Workspace;
        }
    }

    @track inputText = '';
    @track inputPill = {};
    @track roleItems: any = [];
    handleRoleTextInput(event: CustomEvent): void {
        console.log('handleRoleTextInput', event.detail.text);
        if (this.inputText === '') {
            this.roleItems = this.roleOptions;
        } else {
            this.roleItems = this.roleOptions.filter((option: any) => {
                return option.text
                    .toLowerCase()
                    .startsWith(event.detail.text.toLowerCase());
            });
        }
    }
    handlePillRemove(event: CustomEvent): void {
        console.log('handle pill remove', event);
        this.inputPill = {};
        this.inputText = '';
    }

    handleRoleSelect(event: CustomEvent): void {
        console.log(event);
        // if (this.inputText === '' ? true : /\S/.test(this.inputText)) {
        //     const selectedOption: any = this.roleOptions.filter(
        //         (option: any) => {
        //             return option.value === event.detail.value;
        //         },
        //     )[0];
        //     this.inputPill = {
        //         label: selectedOption.text,
        //         id: selectedOption.value,
        //     };
        // }
        this.selectedRole = event.detail.value;
        // this.selectedPill = event.detail.value;
        // this.selectedRole = this.roleOptions.filter((o: any) => {
        //     console.log('roleoptions', o);
        //     return o.value === event.detail.value;
        // });
        // this.template
        //     .querySelector('lightning-grouped-combobox')
        //     .checkValidity();
        // this.template
        //     .querySelector('lightning-grouped-combobox')
        //     .reportValidity();
    }

    handleNextEvent(): void {
        this.currentStep++;
    }

    handleBack(): void {
        this.currentStep--;
    }

    handleNameChange(event: CustomEvent): void {
        this.name = event.detail.value;
    }

    handleTopicChange(event: CustomEvent): void {
        this.topic = event.detail.value;
    }

    handleDescriptionChange(event: CustomEvent): void {
        this.description = event.detail.value;
    }

    handleVisibilityChange(event: CustomEvent): void {
        this.visibilityValue = event.detail.value;
        if (this.visibilityValue === 'private') {
            this.addMembersValue = 'auto';
            this.joinOptionsDisabled = true;
        } else {
            this.joinOptionsDisabled = false;
        }
    }

    handleJoinOptionsChange(event: CustomEvent): void {
        this.addMembersValue = event.detail.value;
    }

    handleCreateChannel(): void {
        this.dispatchEvent(
            new CustomEvent('activatechannel', {
                bubbles: true,
                detail: {
                    selectedRole: this.selectedRole,
                    name: this.name,
                    description: this.description,
                    topic: this.topic,
                    channelId: this.channelId,
                },
            }),
        );
    }

    handleClose(): void {
        this.close();
    }

    get isChannelPublic(): boolean {
        return this.visibilityValue === 'public';
    }

    get workspaceOptions(): object[] {
        return [
            {
                label: 'Company Workspace',
                value: '1',
            },
            {
                label: 'Regional Workspace',
                value: '2',
            },
            {
                label: 'International Workspace',
                value: '3',
            },
        ];
    }

    get roleOptions(): object[] {
        return [
            {
                type: 'option-inline',
                label: 'Sales Lead',
                text: 'Sales Lead',
                value: 'sales-lead',
                href: '',
                iconName: '',
            },
            {
                type: 'option-inline',
                label: 'Sales Mgr',
                text: 'Sales Mgr',
                value: 'sales-mgr',
                href: '',
                iconName: '',
            },
            {
                type: 'option-inline',
                label: 'Sales Ops',
                text: 'Sales Ops',
                value: 'sales-ops',
                href: '',
                iconName: '',
            },
            {
                type: 'option-inline',
                label: 'Everyone',
                text: 'Everyone',
                value: 'everyone',
                href: '',
                iconName: '',
            },
            {
                type: 'option-inline',
                label: 'Accounting',
                text: 'Accounting',
                value: 'accounting',
                href: '',
                iconName: '',
            },
            {
                type: 'option-inline',
                label: 'Technical Sales',
                text: 'Technical Sales',
                value: 'technical-sales',
                href: '',
                iconName: '',
            },
        ];
    }

    get visibilityOptions(): Option[] {
        return [
            {
                label: 'Private',
                value: 'private',
            },
            {
                label: 'Public',
                value: 'public',
            },
        ];
    }

    get addMembersOptions(): Option[] {
        return [
            {
                label: 'Add members automatically',
                value: 'auto',
            },
            {
                label: 'Prompt members to join manually',
                value: 'manual',
            },
        ];
    }

    get postRestrictionOptions(): Option[] {
        return [
            {
                label: 'Allow members to post',
                value: 'unrestricted',
            },
            {
                label: 'Restrict posts to certain members',
                value: 'restricted',
            },
        ];
    }
}
