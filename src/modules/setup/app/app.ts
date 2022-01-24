import { LightningElement, track } from "lwc";
import { createSetupRouter } from "setup/router";
import { NAV_ITEMS } from "./mainNavigationItems";
import { ADMIN_NAV } from "./adminNavigationItems";
import { PLATFORM_NAV } from "./platformNavigationItems";
import { SETTINGS_NAV } from "./settingsNavigationItems";

export default class SetupApp extends LightningElement {
    router = createSetupRouter();
    // mainNavItems = NAV_ITEMS;
    // adminNavItems = ADMIN_NAV;
    // platformNavItems = PLATFORM_NAV;
    // settingsNavItems = SETTINGS_NAV;

    @track navItems?: any;

    async connectedCallback(): Promise<void> {
        this.navItems = [
            {
                "group": {
                    "items": NAV_ITEMS
                }
            },
            {
                "group": {
                    "name": "Administration",
                    "items": ADMIN_NAV
                }
            },
            {
                "group": {
                    "name": "Platform Tools",
                    "items": PLATFORM_NAV
                }
            },
            {
                "group": {
                    "name": "Settings",
                    "items": SETTINGS_NAV
                }
            }
        ];
    }

    onViewChange(viewChangeEvent: CustomEvent): void {
        // const view = viewChangeEvent.detail;
        // console.log(`new view comp.: ${view}`);
    }

    onViewError(viewErrorEvent: CustomEvent): void {
        const { error, stack } = viewErrorEvent.detail;
        console.error(`error rendering view comp.: "${error.message}" from:\n${stack}`);
    }
}