import { LightningElement, api, wire, track } from 'lwc';
import { CurrentPageReference, NavigationContext } from 'lwr/navigation';
import type { PageReference } from 'lwr/router';
import type { ContextId } from 'lwr/navigationContext';
import type { NavData } from 'setup/navItem';

// Labels
import NAV_ADMIN from '@my/label/setup/navigation.admin';
import NAV_PLATFORM_TOOLS from '@my/label/setup/navigation.platformTools';
import NAV_SETTINGS from '@my/label/setup/navigation.settings';

interface SelectableNavData extends NavData {
    selected: boolean;
    group: any;
    hasHeader: boolean;
}

export default class Navigation extends LightningElement {
    @wire(NavigationContext as any)
    navContext?: ContextId;

    @wire(CurrentPageReference as any)
    selectNavItem(currentPageReference: PageReference): void {
        // console.log('navigation#selectNavItem', currentPageReference)
        if (this.items) {
            const currentType = currentPageReference.type;
            const currentAttributesString = JSON.stringify(
                currentPageReference.attributes,
            );

            // Need to flatten `this.items` into a single array of items instead of an array of group objects
            // for the next bit
            const formattedNavList = this.items.reduce(
                (prevVal: any, currentVal: any) => {
                    return prevVal.concat(currentVal.group.items);
                },
                [],
            );

            const selectedNavData: NavData | undefined = formattedNavList.find(
                (item: any) => {
                    // Parent navigation elements don't have page references because
                    // they are generally only a vehicle for a dropdown menu of clickable options
                    if (item.pageReference) {
                        const equalPageIdentity =
                            currentType === item.pageReference.type &&
                            currentAttributesString ===
                                JSON.stringify(item.pageReference.attributes);
                        return (
                            equalPageIdentity ||
                            (currentType === 'home' &&
                                item.pageReference.type === 'namedPage' &&
                                item.pageReference.attributes.pageName ===
                                    'home')
                        );
                    }
                },
            );

            if (selectedNavData) {
                this.currentItemId = selectedNavData.name;
            }
            // const selectedNavData: NavData | undefined = this.items.find((item) => {
            //     const equalPageIdentity = currentType === item.pageReference.type &&
            //                                 currentAttributesString === JSON.stringify(item.pageReference.attributes);
            //     return (equalPageIdentity ||
            //         (currentType === 'home' &&
            //             item.pageReference.type === 'namedPage' &&
            //             item.pageReference.attributes.pageName === 'home'));
            // });

            // if (selectedNavData) {
            //     this.currentItemId = selectedNavData.name;
            // }
        }
    }

    @api items?: any;
    @track currentItemId?: string;

    withoutParams(url: string): string {
        try {
            return new URL(url, window.location.origin).pathname;
        } catch (e) {
            console.error(`navigation.ts#withoutParams error: ${e}`);
            return '';
        }
    }

    // get navItems(): SelectableNavData[] {
    //     return (this.items || []).map((item: NavData) => ({
    //         ...item,
    //         selected: item.name === this.currentItemId,
    //     }));
    // }

    get navItems(): SelectableNavData[] {
        if (this.items) {
            const hasHeader: boolean = Object.hasOwnProperty.call(
                this.items[0].group,
                'name',
            );
            return (this.items[0].group.items || []).map((item: NavData) => ({
                ...item,
                selected: item.name === this.currentItemId,
                hasHeader: hasHeader,
            }));
        }
        return [];
    }

    get adminNavItems(): SelectableNavData[] {
        if (this.items && this.items[1]) {
            const hasHeader: boolean = Object.hasOwnProperty.call(
                this.items[1].group,
                'name',
            );
            return (this.items[1].group.items || []).map((item: NavData) => ({
                ...item,
                selected: item.name === this.currentItemId,
                hasHeader: hasHeader,
            }));
        }
        return [];
    }

    get platformNavItems(): SelectableNavData[] {
        if (this.items && this.items[2]) {
            const hasHeader: boolean = Object.hasOwnProperty.call(
                this.items[2].group,
                'name',
            );
            return (this.items[2].group.items || []).map((item: NavData) => ({
                ...item,
                selected: item.name === this.currentItemId,
                hasHeader: hasHeader,
            }));
        }
        return [];
    }

    get settingsNavItems(): SelectableNavData[] {
        if (this.items && this.items[3]) {
            const hasHeader: boolean = Object.hasOwnProperty.call(
                this.items[3].group,
                'name',
            );
            return (this.items[3].group.items || []).map((item: NavData) => ({
                ...item,
                selected: item.name === this.currentItemId,
                hasHeader: hasHeader,
            }));
        }
        return [];
    }

    get i18n(): object {
        return {
            nav: {
                admin: NAV_ADMIN,
                platformTools: NAV_PLATFORM_TOOLS,
                settings: NAV_SETTINGS,
            },
        };
    }
}
