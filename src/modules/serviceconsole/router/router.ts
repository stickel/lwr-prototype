import { createRouter } from 'lwr/router';
import type {
    RouteDefinition,
    RouteHandlerModule,
    Router,
    PageReference,
} from 'lwr/router';

const routes: RouteDefinition[] = [
    {
        id: 'setup-home',
        uri: '/service-console',
        handler: (): Promise<RouteHandlerModule> =>
            import('serviceconsole/homePageHandler'),
        page: {
            type: 'home',
        },
    },
    {
        id: 'namedPage',
        uri: '/service-console/:pageName',
        handler: (): Promise<RouteHandlerModule> =>
            import('serviceconsole/namedPageHandler'),
        page: {
            type: 'namedPage',
            attributes: {
                pageName: ':pageName',
            },
        },
    },
];

export function createServiceConsoleRouter(): Router<PageReference> {
    return createRouter({ routes });
}
