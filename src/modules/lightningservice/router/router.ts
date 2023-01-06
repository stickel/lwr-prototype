import { createRouter } from 'lwr/router';
import type {
    RouteDefinition,
    RouteHandlerModule,
    Router,
    PageReference,
} from 'lw/router';

const routes: RouteDefinition[] = [
    {
        id: 'lightningServiceHome',
        uri: '/lightning-service',
        handler: (): Promise<RouteHandlerModule> =>
            import('lightningservice/homePageHandler'),
        page: {
            type: 'home',
        },
    },
    {
        id: 'lightningNamedPage',
        uri: '/lightning-service/:pageName',
        handler: (): Promise<RouteHandlerModule> =>
            import('lightningservice/namedPageHandler'),
        page: {
            type: 'namedPage',
            attributes: {
                pageName: ':pageName',
            },
        },
    },
];

export function createLightningServiceRouter(): Router<PageReference> {
    return createRouter({ routes });
}
