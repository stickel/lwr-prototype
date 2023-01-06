import { LightningElement } from 'lwc';
import { createLightningServiceRouter } from 'lightningservice/router';

// Labels
import SEARCH_PLACEHOLDER from '@my/label/lightningservice/header.searchPlaceholder';
import APP_NAME from '@my/label/lightningservice/navbar.appName';
import TAB_DEFAULT from '@my/label/lightningservice/navbar.tabDefault';
import VIEW_ERROR from '@my/label/global/error.viewError';

export default class LightningServiceApp extends LightningElement {
    router = createLightningServiceRouter();

    onViewError(viewErrorEvent: CustomEvent): void {
        const { error, stack } = viewErrorEvent.detail;
        console.error(
            `Error rendering view comp: "${error.message}" from: \n${stack}`,
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
