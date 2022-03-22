import { LightningElement } from 'lwc';
import { createServiceConsoleRouter } from 'serviceConsole/router';

export default class ServiceConsoleApp extends LightningElement {
    router = createServiceConsoleRouter();
}
