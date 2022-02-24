import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class ModalSelectOnboardingChannels extends LightningModal {
    @api heading = '';

    _options = [
        {
            label: '#deals-lost',
            value: 'deals-lost',
            topic: 'A channel for deals lost',
        },
        {
            label: '#high-value-deals',
            value: 'high-value-deals',
            topic: 'Notifications for all high value deals',
        },
        {
            label: '#news-client-1',
            value: 'news-client-1',
            topic: 'News from around the internet on Client 1',
        },
        {
            label: '#all-sales-team',
            value: 'all-sales-team',
            topic: 'All members of the sales team',
        },
        {
            label: '#sales-managers',
            value: 'sales-managers',
            topic: 'All sales managers',
        },
        {
            label: '#sales-ops',
            value: 'sales-ops',
            topic: 'All sales operations',
        },
        {
            label: '#accounting',
            value: 'accounting',
            topic: 'All accounting departments',
        },
    ];

    _selected: any[] = [];

    get options(): object[] {
        return this._options;
    }

    get selected(): string[] {
        return this._selected;
    }

    handleSelect(event: CustomEvent): void {
        this._selected = event.detail.value;
    }

    handleSave(): void {
        this.dispatchEvent(
            new CustomEvent('saveonboardingchannels', {
                bubbles: true,
                detail: {
                    selectedChannels: this._options.filter((o) => {
                        return this._selected.includes(o.value);
                    }),
                },
            }),
        );
    }

    handleCancel(): void {
        this.close();
    }

    handleEvent(event: Event): void {
        console.log('event', event);
    }
}
