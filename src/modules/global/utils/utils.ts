import luxon, { DateTime } from 'luxon';
import type { ShiftObject } from 'modules/serviceconsole/shiftItem/shiftItem';

export function isMorningShift(shift: ShiftObject, locale = 'en-US'): boolean {
    const date = luxon.DateTime.fromISO(shift.Date);
    const start = startTime(shift, locale);
    const endTime = start.plus({
        minutes: shift.DurationInMinutes,
    });
    return start > dayStart(date) && endTime < dayMid(date);
}

export function isDayShift(shift: ShiftObject, locale = 'en-US'): boolean {
    const date = luxon.DateTime.fromISO(shift.Date);
    const start = startTime(shift, locale);
    const endTime = start.plus({
        minutes: shift.DurationInMinutes,
    });
    return (
        start > dayStart(date) &&
        start < dayMid(date) &&
        endTime > dayMid(date) &&
        endTime < dayEnd(date)
    );
}

export function isNightShift(shift: ShiftObject, locale = 'en-US'): boolean {
    const date = luxon.DateTime.fromISO(shift.Date);
    const start = startTime(shift, locale);
    // const endTime = start.plus({
    //     minutes: shift.DurationInMinutes,
    // });
    return start > dayMid(date);
}

export function startTime(shift: ShiftObject, locale = 'en-US'): DateTime {
    const hour = Number(shift.StartTime?.split(':')[0]);
    const minute = Number(shift.StartTime?.split(':')[1]);
    return luxon.DateTime.fromISO(shift.Date).setLocale(locale).set({
        hour: hour,
        minute: minute,
    });
}

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
