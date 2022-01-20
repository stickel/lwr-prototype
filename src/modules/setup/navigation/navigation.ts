import { LightningElement, api, wire, track } from "lwc";
import { CurrentPageReference, NavigationContext } from 'lwr/navigation';
import type { PageReference } from 'lwr/router';
import type { ContextId } from 'lwr/navigationContext';
import type { NavData } from 'setup/navItem';

interface SelectableNavData extends NavData {
    selected: boolean;
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
            const formattedNavList = this.items.reduce((prevVal: NavData, currentVal: NavData, currIndex: number, array: NavData[]) => {
                return prevVal.concat(currentVal.group.items)
            }, []);

            const selectedNavData: NavData | undefined = formattedNavList.find((item) => {
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

    @api items?: NavData[];
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
        return (this.items[0].group.items || []).map((item: NavData) => ({
            ...item,
            selected: item.name === this.currentItemId,
        }));
    }
    
    get adminNavItems(): SelectableNavData[] {
        return (this.items[1].group.items || []).map((item: NavData) => ({
            ...item,
            selected: item.name === this.currentItemId,
            hasChildren: item.items && item.items.length !== 0
        }));
    }
    
    get platformNavItems(): SelectableNavData[] {
        return (this.items[2].group.items || []).map((item: NavData) => ({
            ...item,
            selected: item.name === this.currentItemId,
            hasChildren: item.items && item.items.length !== 0
        }));
    }
    
    get settingsNavItems(): SelectableNavData[] {
        return (this.items[3].group.items || []).map((item: NavData) => ({
            ...item,
            selected: item.name === this.currentItemId,
            hasChildren: item.items && item.items.length !== 0
        }));
    }
    // selected = '';
    // currentItemId = '';
    // _mainNav = [];
    // _adminNav = [];
    // _platformNav = [];
    // _settingsNav = [];

    // pageReference = {
    //     type: 'home',
    //     attributes: {},
    //     state: {}
    // };

    // doNavigate() {
    //     if (this.pageReference && this.navContext) {
    //         navigate(this.navContext, this.pageReference);
    //     }
    // }

    /*
     * The `name` of the navigation item set as selected
     * @type {string}
     */
    // @api
    // get selectedNav() {
    //     return this.selected;
    // }

    // set selectedNav(value) {
    //     this.selected = value;
    // }

    // connectedCallback() {
    //     this._mainNav = MainNav;
    //     this._adminNav = AdminNav;
    //     this._platformNav = PlatformNav;
    //     this._settingsNav = SettingsNav;
    // }
    
    renderedCallback() {
        // // Get all the trees from the navigation
        // const trees = Array.from(this.template.querySelectorAll('lightning-tree'));
        // // Trees without header props
        // const noHeaderTrees = trees.filter(item => !item.header);
        // // Trees with header props
        // const headerTrees = trees.filter(item => item.header);
        // // Add slds-text-title_caps to the header
        // headerTrees.forEach((t) => {
        //     const header = Array.from(t.shadowRoot.querySelectorAll('h4'))[0];
        //     if (!header.classList.contains('slds-text-title_caps')) {
        //         header.classList.add('slds-text-title_caps');
        //     }
        //     header.classList.add('slds-p-top_medium');
        //     header.classList.add('slds-p-bottom_x-small');
        //     header.classList.add('slds-p-left_small');
        //     header.classList.add('setup-nav-header');
        // });

        // // this is to match the padding for production on the filter input
        // const filterInput = this.template.querySelector('lightning-input').shadowRoot.querySelector('input');
        // if (filterInput) {
        //     filterInput.style.paddingTop = '6px';
        //     filterInput.style.paddingBottom = '6px';
        // }

        // // Remove `slds-truncate` class from all tree items
        // fixLabelClasses(trees);

        // // We have to push the main nave tree items without headers to the left
        // // In order to do this, we remove the button element that's hidden
        // // because these items don't have children.
        // repositionMainNav(noHeaderTrees);
    }

    // get mainNav() {
    //     return this._mainNav;
    // }

    // get adminNav() {
    //     return this._adminNav;
    // }

    // get platformNav() {
    //     return this._platformNav;
    // }

    // get settingsNav() {
    //     return this._settingsNav;
    // }

    // handlers
    // handleNavSelect(event) {
    //     this.selected = event.detail.name;
    //     const allNavItems = [...this._mainNav, ...this._adminNav, ...this._platformNav, ...this._settingsNav];
    //     allNavItems.forEach((i) => {
    //         if (i.items && i.items.length !== 0) {
    //             allNavItems.push(...i.items);
    //         }
    //     });
    //     this.pageReference = {
    //         type: 'namedPage',
    //         attributes: {}
    //     }
    //     // console.log('allnav', allNavItems, 'selected', allNavItems.filter((n) => n.name === this.selected));
    //     // this.dispatchEvent(
    //     //     new CustomEvent('navselected', {
    //     //         composed: true,
    //     //         bubbles: true,
    //     //         detail: allNavItems.filter((n) => n.name === this.selected)[0]
    //     //     })
    //     // );
    // }

    // Need this so the page doesn't reload
    // handleClick(event) {
    //     event.preventDefault();
    // }
}

// function fixLabelClasses(trees) {
//     trees.forEach((t) => {
//         const topLevelTreeItems = Array.from(t.shadowRoot.querySelectorAll('lightning-tree-item')[0]
//             .shadowRoot.querySelectorAll('lightning-tree-item'));
//         if (topLevelTreeItems && topLevelTreeItems.length !== 0) {
//             topLevelTreeItems.forEach((item) => {
//                 const label = item.shadowRoot.querySelector('.slds-tree__item-label');
//                 if (label.classList.contains('slds-truncate')) {
//                     label.classList.remove('slds-truncate');
//                     // Add a padding class
//                     label.classList.add('slds-p-right_x-small');
//                 }
//             })
//         }
//     });
// }

// function repositionMainNav(list) {
//     list.forEach((item) => {
//         const treeNodes = Array.from(item.shadowRoot.querySelector('lightning-tree-item')
//             .shadowRoot.querySelectorAll('lightning-tree-item'));
//         if (treeNodes && treeNodes.length !== 0) {
//             treeNodes.forEach((node) => {
//                 const button = node.shadowRoot.querySelector('button.slds-hidden');
//                 if (button) {
//                     button.remove();
//                 }
//             })
//         }
//     })
// }