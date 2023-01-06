import type { RouteHandlerCallback, Module, RouteInstance } from 'lwr/router';

export default class RecordPageHandler {
    callback: RouteHandlerCallback;

    constructor(callback: RouteHandlerCallback) {
        this.callback = callback;
    }

    dispose(): void {
        /* noop */
    }

    update(routeInstance: RouteInstance): void {
        const { attributes } = routeInstance;
        let viewGetter;
        switch (attributes.pageName) {
            case 'home':
                viewGetter = (): Promise<Module> =>
                    import('lightningservice/home');
                break;
            default:
                viewGetter = (): Promise<Module> =>
                    import(`lightningservice/${attributes.pageName}`);
        }

        this.callback({
            viewset: {
                default: viewGetter,
            },
        });
    }
}
