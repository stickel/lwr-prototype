import cpx from 'cpx2';
import { log } from 'console';
import * as fs from 'fs';
import * as primitives from '@salesforce-ux/design-system/design-tokens/dist/primitive.common.js';

// Copy SLDS resources to the assets directory
cpx.copy(
    'node_modules/@salesforce-ux/design-system/assets/**/*',
    'src/assets',
    () => {
        log('Done copying SLDS resources');
    },
);

// now convert @salesforce-ux/design-system/design-tokens/dist/primitive.common.js into
// valid CSS maintaining the same names.
const destinationFile = 'src/assets/styles/slds-vars.css';
const output = [];
for (let style in primitives.default) {
    output.push(`--slds-${style}: ${primitives.default[style]};`);
}

try {
    fs.writeFileSync(destinationFile, `:host {\n\t${output.join('\n\t')}\n}`);
} catch (err) {
    console.error(`Could not write the styles to ${f}: ${err}`);
}
