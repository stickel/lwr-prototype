import { createRouter } from 'lwr/router';
import type { RouteDefinition, RouteHandlerModule, Router, PageReference } from 'lwr/router';

const routes: RouteDefinition[] = [
    {
        id: 'setup-home',
        uri: '/setup',
        handler: (): Promise<RouteHandlerModule> => import('setup/homePageHandler'),
        page: {
            type: 'home',
        },
    },
    {
        id: 'namedPage',
        uri: '/setup/:pageName',
        handler: (): Promise<RouteHandlerModule> => import('setup/namedPageHandler'),
        page: {
            type: 'namedPage',
            attributes: {
                pageName: ':pageName',
            },
        },
    },
    // {
    //     id: 'recipes',
    //     uri: '/recipes/:title?:ingredients',
    //     handler: (): Promise<RouteHandlerModule> => import('example/recipesPageHandler'),
    //     page: {
    //         type: 'recipes',
    //         attributes: {
    //             title: ':title',
    //             ingredients: ':ingredients',
    //         },
    //     },
    // },
];

export function createSetupRouter(): Router<PageReference> {
    return createRouter({ routes });
}