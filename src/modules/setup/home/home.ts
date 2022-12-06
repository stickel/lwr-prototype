import { LightningElement, track, api } from 'lwc';
// import type { PageReference } from 'lwr/router';
import MultiStepModalExample from 'setup/multiStepModalExample';
import SimpleModalExample from 'setup/simpleModalExample';

// Labels
import PAGE_TITLE from '@my/label/setup/home.pageTitle';
import ABOUT_TITLE from '@my/label/setup/home.aboutTitle';
import OPEN_SIMPLE_MODAL from '@my/label/setup/home.openSimpleModal';

interface BroadcastChannel {
    id: string;
    name: string;
    description: string;
    topic: string;
    active: boolean;
    roles?: string[];
}

export default class Home extends LightningElement {
    @track _modalOpen = false;
    @track _inputText = '';
    @track _broadcastChannels: BroadcastChannel[] = [
        {
            id: 'deals-won',
            name: '#deals-won',
            description: `A feed of won deals.`,
            topic: `See your team's successes with a feed of won deals.`,
            active: false,
        },
        {
            id: 'deals-to-watch',
            name: '#deals-to-watch',
            description:
                'Get notified about deals that have an amount above a specified value and are likely to close',
            topic: 'See deals that have an amount above a specified value and are likely to close.',
            active: false,
        },
    ];
    @track _activeChannels: BroadcastChannel[] = [];
    @track _salesChannelAccessValue = '0';

    _activeChannelDetails = {};

    @api
    get broadcastChannels(): any {
        return this._broadcastChannels;
    }

    set broadcastChannels(value: BroadcastChannel) {
        this._broadcastChannels.push(value);
    }

    @api
    get salesChannelAccessValue(): string {
        return this._salesChannelAccessValue;
    }

    set salesChannelAccessValue(value: string) {
        this._salesChannelAccessValue = value;
    }

    async handleOpenSimpleModal(event: CustomEvent): Promise<void> {
        event.stopPropagation();
        await SimpleModalExample.open({
            heading: 'Simple Modal Example',
            size: 'small',
            onsaveonboardingchannels(event: CustomEvent): void {
                this.close(event.detail);
            },
        })
            .then(async (result: any) => {
                result.selectedChannels.forEach((result: any) => {
                    this._broadcastChannels.push({
                        id: `${Math.floor(Math.random() * (1000 - 3) + 3)}`,
                        name: result.label,
                        description: result.description,
                        active: false,
                        topic: '',
                    });
                });
            })
            .catch((err: any) => {
                console.error(`error in select channel modal: ${err}`);
            });
    }

    async handleOpenMultiStepModal(
        event: CustomEvent & { target: HTMLElement },
    ): Promise<void> {
        event.stopPropagation();
        await MultiStepModalExample.open({
            heading: 'Multi-Step Modal Example',
            channelId: `${event.target.dataset.id}`,
            channelDetails: this.channelPropsFromId(
                `${event.target.dataset.id}`,
            ),
            onnextstep(event: CustomEvent): void {
                this._activeChannelDetails = Object.assign(
                    {},
                    this._activeChannelDetails,
                    event.detail,
                );
            },
            onactivatechannel(event: CustomEvent): void {
                this.close(event.detail);
            },
        })
            .then(async (result: any) => {
                this._activeChannels.push({
                    active: true,
                    roles: result.selectedRole,
                    name: result.name,
                    description: result.description,
                    topic: result.topic,
                    id: result.channelId,
                });
            })
            .catch((err: any) => {
                console.error(`error with activate modal: ${err}`);
            });
    }

    channelNameFromId(id: string): string {
        const channelObj: any = this._broadcastChannels.filter((c: any) => {
            return c.id === id;
        })[0];
        return channelObj.name;
    }

    channelPropsFromId(id: string): {} {
        return this._broadcastChannels.filter((c: any) => {
            return c.id === id;
        })[0];
    }

    get i18n(): object {
        return {
            pageTitle: PAGE_TITLE,
            aboutTitle: ABOUT_TITLE,
            openSimpleModal: OPEN_SIMPLE_MODAL,
        };
    }
}
