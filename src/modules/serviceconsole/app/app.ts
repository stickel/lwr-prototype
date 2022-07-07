import { LightningElement, track } from 'lwc';
import { createServiceConsoleRouter } from 'serviceConsole/router';

export default class ServiceConsoleApp extends LightningElement {
    router = createServiceConsoleRouter();

    @track viewErrorMessage?: string;

    onViewError(viewErrorEvent: CustomEvent): void {
        const { error, stack } = viewErrorEvent.detail;
        this.viewErrorMessage = error.message;
        console.error(
            `error rendering view comp.: "${error.message}" from:\n${stack}`,
        );
    }
}
