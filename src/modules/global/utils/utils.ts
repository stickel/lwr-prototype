import luxon, { DateTime } from 'luxon';

function dayStart(date: DateTime): DateTime {
    return date.set({
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
    });
}

function dayMid(date: DateTime): DateTime {
    return date.set({
        hour: 12,
        minute: 1,
        second: 0,
        millisecond: 0,
    });
}

function dayEnd(date: DateTime): DateTime {
    return date.set({
        hour: 23,
        minute: 59,
        second: 59,
        millisecond: 999,
    });
}

export function getRandomId(): any {
    const array = new Uint32Array(1);
    return self.crypto.getRandomValues(array)[0];
}

/**
 * Takes label strings with placeholder params (`{0}`) and updates the label with given `args`
 * @param {string} str - any label string requiring injections of other strings/params (e.g., 'foo {0}')
 * @param  {...string|array} args - string(s) to be injected into the `string` param
 * @returns {string} fully replaced string, e.g., '{0} is a {1}' -> 'Hal Jordan is a Green Lantern'
 */
export function formatLabel(str: string, ...args: Array<any>): string {
    let replacements = args;
    if (Array.isArray(args[0])) {
        [replacements] = args;
    }

    return str.replace(/{(\d+)}/g, (match, i) => {
        return replacements[i];
    });
}

export function randomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}
