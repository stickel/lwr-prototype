import { LightningElement, api, wire, track } from "lwc";
import { CurrentPageReference, NavigationContext } from 'lwr/navigation';
import type { PageReference } from 'lwr/router';
import type { ContextId } from 'lwr/navigationContext';
import type { NavData } from 'setup/navItem';

interface SelectableNavData extends NavData {
    selected: boolean;
    group: any;
}

export default class Navigation extends LightningElement {
    // import /data/site/setup-nav.json to get all the nav elements

    @wire(NavigationContext as any)
    navContext?: ContextId;

    @wire(CurrentPageReference as any)
    selectNavItem(currentPageReference: PageReference): void {
        // console.log('navigation#selectNavItem', currentPageReference)
        if (this.items) {
            const currentType = currentPageReference.type;
            const currentAttributesString = JSON.stringify(currentPageReference.attributes);

            // Need to flatten `this.items` into a single array of items instead of an array of group objects
            // for the next bit
            const formattedNavList = this.items.reduce((prevVal: any, currentVal: any, currIndex: number, array: any) => {
                return prevVal.concat(currentVal.group.items)
            }, []);

            const selectedNavData: NavData | undefined = formattedNavList.find((item: any) => {
                const equalPageIdentity = currentType === item.pageReference.type &&
                                            currentAttributesString === JSON.stringify(item.pageReference.attributes);
                return (equalPageIdentity ||
                    (currentType === 'home' &&
                        item.pageReference.type === 'namedPage' &&
                        item.pageReference.attributes.pageName === 'home'));
            });

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
            return (this.items[0].group.items || []).map((item: NavData) => ({
                ...item,
                selected: item.name === this.currentItemId,
            }));
        }
        return [];
    }
    
    get adminNavItems(): SelectableNavData[] {
        if (this.items && this.items[1]) {
            return (this.items[1].group.items || []).map((item: NavData) => ({
                ...item,
                selected: item.name === this.currentItemId,
                hasChildren: item.items && item.items.length !== 0
            }));
        }
        return [];
    }
    
    get platformNavItems(): SelectableNavData[] {
        if (this.items && this.items[2]) {
            return (this.items[2].group.items || []).map((item: NavData) => ({
                ...item,
                selected: item.name === this.currentItemId,
                hasChildren: item.items && item.items.length !== 0
            }));
        }
        return [];
    }
    
    get settingsNavItems(): SelectableNavData[] {
        if (this.items && this.items[3]) {
            return (this.items[3].group.items || []).map((item: NavData) => ({
                ...item,
                selected: item.name === this.currentItemId,
                hasChildren: item.items && item.items.length !== 0
            }));
        }
        return [];
    }
}