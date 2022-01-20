import { LightningElement } from 'lwc';
import type { PageReference } from 'lwr/router';

export default class Home extends LightningElement {
    get setupHomeRoute(): PageReference {
        return {
            type: 'namedPage',
            attributes: {
                pageName: 'setup',
            },
            state: {},
        };
    }
}