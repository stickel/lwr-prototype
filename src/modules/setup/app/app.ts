import { LightningElement, track } from 'lwc';
import { createSetupRouter } from 'setup/router';
import { NAV_ITEMS } from './mainNavigationItems';
import { ADMIN_NAV } from './adminNavigationItems';
import { PLATFORM_NAV } from './platformNavigationItems';
import { SETTINGS_NAV } from './settingsNavigationItems';

// Labels
import SEARCH_PLACEHOLDER from '@my/label/setup/header.searchPlaceholder';
import APP_NAME from '@my/label/setup/navbar.appName';
import TAB_DEFAULT from '@my/label/setup/navbar.tabDefault';
import VIEW_ERROR from '@my/label/global/error.viewError';

export default class SetupApp extends LightningElement {
    router = createSetupRouter();
    @track navItems?: any;

    async connectedCallback(): Promise<void> {
        this.navItems = [
            {
                group: {
                    items: NAV_ITEMS,
                },
            },
            {
                group: {
                    name: 'Administration',
                    items: ADMIN_NAV,
                },
            },
            {
                group: {
                    name: 'Platform Tools',
                    items: PLATFORM_NAV,
                },
            },
            {
                group: {
                    name: 'Settings',
                    items: SETTINGS_NAV,
                },
            },
        ];
    }

    onViewError(viewErrorEvent: CustomEvent): void {
        const { error, stack } = viewErrorEvent.detail;
        console.error(
            `error rendering view comp.: "${error.message}" from:\n${stack}`,
        );
    }

    get i18n(): object {
        return {
            searchPlaceholder: SEARCH_PLACEHOLDER,
            appName: APP_NAME,
            tabDefault: TAB_DEFAULT,
            errors: {
                viewError: VIEW_ERROR,
            },
        };
    }
}
