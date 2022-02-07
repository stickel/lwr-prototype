import { LightningElement, api, track } from 'lwc';
import ModalCreateBroadcastChannel from 'setup/modalCreateBroadcastChannel';
import ModalSelectOnboardingChannels from 'setup/modalSelectOnboardingChannels';

interface BroadcastChannel {
    id: string;
    name: string;
    description: string;
    topic: string;
    active: boolean;
    roles?: string[];
}

export default class Slack extends LightningElement {
    @track enabled: boolean;
    @track _modalOpen = false;
    @track _inputText = '';
    @track _broadcastChannels: BroadcastChannel[];
    @track _activeChannels: BroadcastChannel[] = [];

    _activeChannelDetails = {};

    @api
    get broadcastChannels(): any {
        return this._broadcastChannels;
    }

    set broadcastChannels(value: BroadcastChannel) {
        this._broadcastChannels.push(value);
    }

    constructor() {
        super();
        this.enabled = false;
        this._broadcastChannels = [
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
    }

    handleEnableSlack(event: CustomEvent): void {
        this.enabled = event.detail.checked;
        if (event.detail.checked) {
            return;
        }
    }

    async handleSelectBroadcastChannels(event: CustomEvent): Promise<void> {
        event.stopPropagation();
        await ModalSelectOnboardingChannels.open({
            heading: 'Select Feed Channels',
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

    async handleViewAndActivateChannel(
        event: CustomEvent & { target: HTMLElement },
    ): Promise<void> {
        event.stopPropagation();
        await ModalCreateBroadcastChannel.open({
            channelId: `${event.target.dataset.id}`,
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
                this.activateBroadcastChannel(result.channelId);
            })
            .catch((err: any) => {
                console.error(`error with activate modal: ${err}`);
            });
    }

    handleOpenSlackChannel(event: CustomEvent): void {
        event.preventDefault();
        event.stopPropagation();
        const id = `${(event.target as HTMLElement).dataset.channelId}`;
        console.log(
            `This will open the Slack channel "${this.channelNameFromId(
                id,
            )}" in Slack`,
        );
    }

    activateBroadcastChannel(id: string): void {
        const channel: any = this._broadcastChannels.filter((c: any) => {
            return c.id === id;
        })[0];

        channel.active = true;
    }

    channelNameFromId(id: string): string {
        const channelObj: any = this._broadcastChannels.filter((c: any) => {
            return c.id === id;
        })[0];
        return channelObj.name;
    }

    get slackEnabled(): boolean {
        return this.enabled;
    }

    get hasChannels(): boolean {
        return this._broadcastChannels.length !== 0;
    }
}
