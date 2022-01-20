import { LightningElement } from "lwc";
// import * as fs from 'fs';
// import cx from '../../../labels/en.json';
// import TITLE from '@my/label/cx.title';
// import * as rawLabels from '@my/label/cx';

const reader = new FileReader();

export default class App extends LightningElement {
    _labels;

    connectedCallback() {
        console.log('app connected', );
        // this.loadFile('../../../labels/en.json')
        //     .then((data) => {
        //         console.log('loadfile.then', data);
        //     })
        //     .catch((err) => {
        //         console.error('loadfile.catch', err);
        //     });
        // console.log('loaded label file', this._labels);
        this._labels = fs.readFile('../../../labels/en.json', 'utf-8', (err, data) => {
            if (err) {
                console.error(`Could not load label file: ${err}`);
                return;
            }
            console.log('fs.readfile', data);
            this._labels = data;
        });
    }

    get labelSections() {
        console.log('labels', this.labels);
    }

    get labels() {
        return this._labels;
    }

    // loadFile(file) {
    //     return new Promise((resolve, reject) => {
    //         reader.onload = () => {
    //             resolve(reader.result);
    //         }
    //         reader.onerror = () => {
    //             reject(reader.error);
    //         }
    //         reader.readAsText(file);
    //     })
    // }
}