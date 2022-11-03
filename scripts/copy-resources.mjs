import cpx from 'cpx2';
import * as fs from 'fs';
import * as primitives from '@salesforce-ux/design-system/design-tokens/dist/primitive.common.js';

// Copy SLDS resources to the assets directory
cpx.copy(
    'node_modules/@salesforce-ux/design-system/assets/**/*',
    'src/assets',
    () => {
        console.log('Done copying SLDS resources');
    },
);

// now convert @salesforce-ux/design-system/design-tokens/dist/primitive.common.js into
// valid CSS maintaining the same names.
// const destinationFile = 'src/assets/styles/slds-vars.css';
const destinationFiles = [
    'src/modules/setup/app/slds-vars.css',
    'src/modules/serviceconsole/app/slds-vars.css',
];
const output = [];
for (let style in primitives.default) {
    output.push(`--slds-${style}: ${primitives.default[style]};`);
}

destinationFiles.forEach((file) => {
    try {
        fs.writeFileSync(file, `:host {\n\t${output.join('\n\t')}\n}`);
    } catch (err) {
        console.error(`Could not write the styles to ${file}: ${err}`);
    }
});
