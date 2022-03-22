import type { RouteHandlerCallback, Module, RouteInstance } from 'lwr/router';

export default class RecordPageHandler {
    callback: RouteHandlerCallback;

    constructor(callback: RouteHandlerCallback) {
        this.callback = callback;
    }

    dispose(): void {
        /* noop */
    }

    /*
     * NOTE: When creating new routes for new pages, update this switch statement
     * with the new route and new module import.
     */
    update(routeInstance: RouteInstance): void {
        const { attributes } = routeInstance;
        let viewGetter;
        switch (attributes.pageName) {
            case 'home':
                viewGetter = (): Promise<Module> =>
                    import('serviceconsole/home');
                break;
            default:
                viewGetter = (): Promise<Module> =>
                    import(`serviceconsole/${attributes.pageName}`);
        }

        this.callback({
            viewset: {
                default: viewGetter,
            },
        });
    }
}
