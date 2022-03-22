import { LightningElement, track } from 'lwc';
import luxon, { DateTimeFormatOptions } from 'luxon';
import type { PageReference } from 'lwr/router';
import { getRandomId } from 'global/utils';
import type { SwapShift } from '../shiftItem/shiftItem';
import type { WorkDay } from '../scheduleView/scheduleView';

export default class Home extends LightningElement {
    @track _workdayOffset: number;
    @track _workdayLimit: number;
    @track _currentDisplayIndex: number;

    constructor() {
        super();
        this._workdayOffset = 0;
        this._workdayLimit = 7;
        this.nextSevenDays;
        this._currentDisplayIndex = 0;
    }

    connectedCallback(): void {
        this._currentDisplayIndex = this.indexOfDate(
            this.localeToday(luxon.DateTime.DATE_SHORT),
        );
        this._workdayOffset = this._currentDisplayIndex;
    }

    handleUpdateWorkdayOffset(event: CustomEvent): void {
        this._workdayOffset = event.detail.offset;
    }

    handleUpdateWorkdayLimit(event: CustomEvent): void {
        this._workdayLimit = event.detail.limit;
    }

    handleScheduleInc(): void {
        if (
            this.showingThisWeek &&
            workdays[this._currentDisplayIndex].DayOfWeek !== 1
        ) {
            const todayDayOfWeek =
                workdays[this._currentDisplayIndex].DayOfWeek;
            this._currentDisplayIndex =
                this._currentDisplayIndex + (8 - todayDayOfWeek);
            this._workdayOffset = this._currentDisplayIndex;
        } else if (this._workdayOffset + this._workdayLimit < workdays.length) {
            this._workdayOffset = this._currentDisplayIndex;
            this.moveToNextWeekStart();
        }
    }

    handleScheduleDec(): void {
        const pastWorkdays = workdays.slice(0, this._currentDisplayIndex);
        const hasMoreThanAWeek = pastWorkdays.find(
            (day) => day.DayOfWeek === 1,
        );

        if (hasMoreThanAWeek === undefined) {
            this._currentDisplayIndex = 0;
            this._workdayOffset = 0;
        } else {
            this.moveToPreviousWeekStart();
        }
    }

    indexOfDate(date: string): number {
        return workdays.findIndex((d) => {
            return (
                luxon.DateTime.fromISO(d.Date).toLocaleString(
                    luxon.DateTime.DATE_SHORT,
                ) === date
            );
        });
    }

    localeDate(date: string, locale: DateTimeFormatOptions): string {
        return luxon.DateTime.fromISO(date).toUTC().toLocaleString(locale);
    }

    localeToday(locale: DateTimeFormatOptions): string {
        return luxon.DateTime.now().toUTC().toLocaleString(locale);
    }

    moveToPreviousWeekStart(): void {
        const currentDayOfWeek = workdays[this._currentDisplayIndex].DayOfWeek;
        let delta = currentDayOfWeek - 1;
        if (delta === 0) {
            // if the delta is 0 it means we're at the beginning of the week,
            // with one full week of previous shifts still available.
            // So we should reset the delta to the workdayLimit to get over the
            // blocker and show the very first week in the array of shifts
            delta = this._workdayLimit;
        }
        if (
            currentDayOfWeek === 1 &&
            this._currentDisplayIndex > this._workdayLimit
        ) {
            delta = this._workdayLimit;
        }
        this._workdayOffset = this._currentDisplayIndex - delta;
        this._currentDisplayIndex = this.indexOfDate(
            this.localeDate(
                workdays[this._workdayOffset].Date,
                luxon.DateTime.DATE_SHORT,
            ),
        );
    }

    moveToNextWeekStart(): void {
        const currentDayOfWeek = workdays[this._currentDisplayIndex].DayOfWeek;
        let delta = currentDayOfWeek + 1;
        if (
            currentDayOfWeek === 1 &&
            this._currentDisplayIndex < this._workdayLimit
        ) {
            delta = this._workdayLimit;
        }
        this._workdayOffset = this._currentDisplayIndex + delta;
        this._currentDisplayIndex = this.indexOfDate(
            this.localeDate(
                workdays[this._workdayOffset].Date,
                luxon.DateTime.DATE_SHORT,
            ),
        );
    }

    get showingNextSevenDays(): boolean {
        return (
            this.indexOfDate(this.localeToday(luxon.DateTime.DATE_SHORT)) ===
            this._currentDisplayIndex
        );
    }

    get nextSevenDays(): WorkDay[] {
        return workdays.slice(
            this.indexOfDate(this.localeToday(luxon.DateTime.DATE_SHORT)),
            this._workdayLimit + 1,
        );
    }

    get hasPrevDates(): boolean {
        return this._currentDisplayIndex > 0;
    }

    get hasNextDates(): boolean {
        return this._currentDisplayIndex < workdays.length - this._workdayLimit;
    }

    get showingThisWeek(): boolean {
        const indexOfToday = this.indexOfDate(
            this.localeToday(luxon.DateTime.DATE_SHORT),
        );
        return (
            indexOfToday >= this._workdayOffset &&
            indexOfToday <= this._workdayOffset + this._workdayLimit
        );
    }

    get scheduleTitle(): string {
        if (this.showingNextSevenDays) {
            return 'My Schedule';
        }

        return `${luxon.DateTime.fromISO(workdays[this._workdayOffset].Date)
            .setLocale('en-US')
            .toFormat('LLL d')} - ${luxon.DateTime.fromISO(
            workdays[this._workdayOffset].Date,
        )
            .plus({ days: this._workdayLimit - 1 })
            .setLocale('en-US')
            .toFormat('LLL d, yyyy')}`;
    }

    get serviceConsoleHomeRoute(): PageReference {
        return {
            type: 'namedPage',
            attributes: {
                pageName: 'serviceConsole',
            },
            state: {},
        };
    }

    get availableShifts(): SwapShift[] {
        return [
            {
                Id: getRandomId(),
                Date: '2022-03-03T17:00:00.000Z',
                DurationInMinutes: 540,
                StartTime: '17:00',
                Assignee: 'Supervisor',
                Swap: {
                    request: true,
                    with: '',
                    complete: false,
                },
            },
            {
                Id: getRandomId(),
                Date: '2022-03-04T15:00:00.000Z',
                DurationInMinutes: 300,
                StartTime: '15:00',
                Assignee: '',
                Swap: {
                    request: true,
                    with: 'Nigel Trager',
                    complete: false,
                },
            },
            {
                Id: getRandomId(),
                Date: '2022-03-14T20:00:00.000Z',
                DurationInMinutes: 540,
                StartTime: '20:00',
                Assignee: '',
                Swap: {
                    request: true,
                    with: 'Wendy Yoder',
                    complete: false,
                },
            },
            {
                Id: getRandomId(),
                Date: '2022-03-14T16:00:00.000Z',
                DurationInMinutes: 540,
                StartTime: '16:00',
                Assignee: '',
                Swap: {
                    request: true,
                    with: 'Wendy Yoder',
                    complete: false,
                },
            },
            {
                Id: getRandomId(),
                Date: '2022-03-15T16:30:00.000Z',
                DurationInMinutes: 420,
                StartTime: '16:30',
                Assignee: '',
                Swap: {
                    request: true,
                    with: 'Simon Baez',
                    complete: false,
                },
            },
            {
                Id: getRandomId(),
                Date: '2022-03-16T04:00:00.000Z',
                DurationInMinutes: 420,
                StartTime: '21:00',
                Assignee: '',
                Swap: {
                    request: true,
                    with: 'José Gonsalvez',
                    complete: false,
                },
            },
        ];
    }

    get requests(): SwapShift[] {
        return [
            {
                Id: getRandomId(),
                Date: '2022-03-13T04:00:00.000Z',
                DurationInMinutes: 420,
                StartTime: '21:00',
                Assignee: '',
                Swap: {
                    request: true,
                    with: '',
                    complete: false,
                    status: 'In swap pool',
                    reason: '',
                },
            },
            {
                Id: getRandomId(),
                Date: '2022-03-15T16:30:00.000Z',
                DurationInMinutes: 420,
                StartTime: '16:30',
                Assignee: '',
                Swap: {
                    request: true,
                    with: '',
                    complete: false,
                    status: 'Awaiting approval',
                    reason: 'Sick Leave',
                },
            },
        ];
    }

    get workdayOffset(): number {
        return this._workdayOffset;
    }

    get workdayLimit(): number {
        return this._workdayLimit;
    }

    get myWorkdays(): WorkDay[] {
        return workdays.slice(
            this._workdayOffset,
            this._workdayOffset + this._workdayLimit,
        );
    }
}

const workdays = [
    {
        Id: getRandomId(),
        Date: luxon.DateTime.now().minus({ days: 3 }).toUTC().toString(),
        DayOfWeek: parseInt(
            luxon.DateTime.now()
                .minus({ days: 3 })
                .setLocale('en-US')
                .toFormat('c'),
        ),
        Shifts: [
            {
                Id: getRandomId(),
                Date: luxon.DateTime.now()
                    .minus({ days: 3 })
                    .toUTC()
                    .toString(),
            },
        ],
    },
    {
        Id: getRandomId(),
        Date: luxon.DateTime.now().minus({ days: 2 }).toUTC().toString(),
        DayOfWeek: parseInt(
            luxon.DateTime.now()
                .minus({ days: 2 })
                .setLocale('en-US')
                .toFormat('c'),
        ),
        Shifts: [
            {
                Id: getRandomId(),
                Date: luxon.DateTime.now()
                    .minus({ days: 2 })
                    .toUTC()
                    .toString(),
            },
        ],
    },
    {
        Id: getRandomId(),
        Date: luxon.DateTime.now().minus({ days: 1 }).toUTC().toString(),
        DayOfWeek: parseInt(
            luxon.DateTime.now()
                .plus({ days: 6 })
                .setLocale('en-US')
                .toFormat('c'),
        ),
        Shifts: [
            {
                Id: getRandomId(),
                Date: luxon.DateTime.now()
                    .minus({ days: 1 })
                    .toUTC()
                    .toString(),
                StartTime: '09:00',
                DurationInMinutes: 180,
                ShiftSegments: [
                    {
                        Id: getRandomId(),
                        Start: '09:00',
                        DurationInMinutes: 90,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '10:30',
                        DurationInMinutes: 15,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '10:45',
                        DurationInMinutes: 75,
                        Type: 'Call',
                    },
                ],
            },
            {
                Id: getRandomId(),
                Date: luxon.DateTime.now()
                    .minus({ days: 1 })
                    .toUTC()
                    .toString(),
                StartTime: '21:00',
                DurationInMinutes: 120,
                ShiftSegments: [
                    {
                        Id: getRandomId(),
                        Start: '21:00',
                        DurationInMinutes: 45,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '21:45',
                        DurationInMinutes: 15,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '22:00',
                        DurationInMinutes: 60,
                        Type: 'Call',
                    },
                ],
            },
        ],
    },
    {
        Id: getRandomId(),
        Date: luxon.DateTime.now().toUTC().toString(),
        DayOfWeek: parseInt(
            luxon.DateTime.now().setLocale('en-US').toFormat('c'),
        ),
        Shifts: [
            {
                Id: getRandomId(),
                Date: luxon.DateTime.now().toUTC().toString(),
                StartTime: '09:30',
                DurationInMinutes: 435,
                ShiftSegments: [
                    {
                        Id: getRandomId(),
                        Start: '09:30',
                        DurationInMinutes: 150,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '11:00',
                        DurationInMinutes: 15,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '11:15',
                        DurationInMinutes: 150,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '13:45',
                        DurationInMinutes: 15,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '14:00',
                        DurationInMinutes: 75,
                        Type: 'Email',
                    },
                    {
                        Id: getRandomId(),
                        Start: '15:15',
                        DurationInMinutes: 30,
                        Type: 'Call',
                    },
                ],
            },
        ],
    },
    {
        Id: getRandomId(),
        Date: luxon.DateTime.now().plus({ days: 1 }).toUTC().toString(),
        DayOfWeek: parseInt(
            luxon.DateTime.now()
                .plus({ days: 1 })
                .setLocale('en-US')
                .toFormat('c'),
        ),
        Shifts: [
            {
                Id: getRandomId(),
                Date: luxon.DateTime.now().plus({ days: 1 }).toUTC().toString(),
                StartTime: '09:00',
                DurationInMinutes: 360,
                ShiftSegments: [
                    {
                        Id: getRandomId(),
                        Start: '09:00',
                        DurationInMinutes: 120,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '11:00',
                        DurationInMinutes: 15,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '11:15',
                        DurationInMinutes: 120,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '13:15',
                        DurationInMinutes: 45,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '14:00',
                        DurationInMinutes: 60,
                        Type: 'Email',
                    },
                ],
            },
        ],
    },
    {
        Id: getRandomId(),
        Date: luxon.DateTime.now().plus({ days: 2 }).toUTC().toString(),
        DayOfWeek: parseInt(
            luxon.DateTime.now()
                .plus({ days: 2 })
                .setLocale('en-US')
                .toFormat('c'),
        ),
        Shifts: [
            {
                Id: getRandomId(),
                Date: luxon.DateTime.now().plus({ days: 2 }).toUTC().toString(),
                StartTime: '09:00',
                DurationInMinutes: 120,
                ShiftSegments: [
                    {
                        Id: getRandomId(),
                        Start: '09:00',
                        DurationInMinutes: 45,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '09:45',
                        DurationInMinutes: 15,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '10:00',
                        DurationInMinutes: 60,
                        Type: 'Call',
                    },
                ],
            },
        ],
    },
    {
        Id: getRandomId(),
        Date: luxon.DateTime.now().plus({ days: 3 }).toUTC().toString(),
        DayOfWeek: parseInt(
            luxon.DateTime.now()
                .plus({ days: 3 })
                .setLocale('en-US')
                .toFormat('c'),
        ),
        Shifts: [
            {
                Id: getRandomId(),
                Date: luxon.DateTime.now().plus({ days: 3 }).toUTC().toString(),
                StartTime: '09:00',
                DurationInMinutes: 360,
                ShiftSegments: [
                    {
                        Id: getRandomId(),
                        Start: '09:00',
                        DurationInMinutes: 120,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '11:00',
                        DurationInMinutes: 15,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '11:15',
                        DurationInMinutes: 120,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '13:15',
                        DurationInMinutes: 45,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '14:00',
                        DurationInMinutes: 60,
                        Type: 'Email',
                    },
                ],
            },
        ],
    },
    {
        Id: getRandomId(),
        Date: luxon.DateTime.now().plus({ days: 4 }).toUTC().toString(),
        DayOfWeek: parseInt(
            luxon.DateTime.now()
                .plus({ days: 4 })
                .setLocale('en-US')
                .toFormat('c'),
        ),
        Shifts: [
            {
                Id: getRandomId(),
                Date: luxon.DateTime.now().plus({ days: 4 }).toUTC().toString(),
                StartTime: '09:00',
                DurationInMinutes: 360,
                ShiftSegments: [
                    {
                        Id: getRandomId(),
                        Start: '09:00',
                        DurationInMinutes: 120,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '11:00',
                        DurationInMinutes: 15,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '11:15',
                        DurationInMinutes: 120,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '13:15',
                        DurationInMinutes: 45,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '14:00',
                        DurationInMinutes: 60,
                        Type: 'Email',
                    },
                ],
            },
        ],
    },
    {
        Id: getRandomId(),
        Date: luxon.DateTime.now().plus({ days: 5 }).toUTC().toString(),
        DayOfWeek: parseInt(
            luxon.DateTime.now()
                .plus({ days: 5 })
                .setLocale('en-US')
                .toFormat('c'),
        ),
        Shifts: [
            {
                Id: getRandomId(),
                Date: luxon.DateTime.now().plus({ days: 5 }).toUTC().toString(),
            },
        ],
    },
    {
        Id: getRandomId(),
        Date: luxon.DateTime.now().plus({ days: 6 }).toUTC().toString(),
        DayOfWeek: parseInt(
            luxon.DateTime.now()
                .plus({ days: 6 })
                .setLocale('en-US')
                .toFormat('c'),
        ),
        Shifts: [
            {
                Id: getRandomId(),
                Date: luxon.DateTime.now().plus({ days: 6 }).toUTC().toString(),
                StartTime: '09:00',
                DurationInMinutes: 180,
                ShiftSegments: [
                    {
                        Id: getRandomId(),
                        Start: '09:00',
                        DurationInMinutes: 90,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '10:30',
                        DurationInMinutes: 15,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '10:45',
                        DurationInMinutes: 75,
                        Type: 'Call',
                    },
                ],
            },
            {
                Id: getRandomId(),
                Date: luxon.DateTime.now().plus({ days: 6 }).toUTC().toString(),
                StartTime: '21:00',
                DurationInMinutes: 120,
                ShiftSegments: [
                    {
                        Id: getRandomId(),
                        Start: '21:00',
                        DurationInMinutes: 45,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '21:45',
                        DurationInMinutes: 15,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '22:00',
                        DurationInMinutes: 60,
                        Type: 'Call',
                    },
                ],
            },
        ],
    },
    {
        Id: getRandomId(),
        Date: luxon.DateTime.now().plus({ days: 7 }).toUTC().toString(),
        DayOfWeek: parseInt(
            luxon.DateTime.now()
                .plus({ days: 7 })
                .setLocale('en-US')
                .toFormat('c'),
        ),
        Shifts: [
            {
                Id: getRandomId(),
                Date: luxon.DateTime.now().plus({ days: 7 }).toUTC().toString(),
                StartTime: '05:30',
                DurationInMinutes: 435,
                ShiftSegments: [
                    {
                        Id: getRandomId(),
                        Start: '05:30',
                        DurationInMinutes: 150,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '08:00',
                        DurationInMinutes: 15,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '08:15',
                        DurationInMinutes: 150,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '10:45',
                        DurationInMinutes: 15,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '11:15',
                        DurationInMinutes: 75,
                        Type: 'Email',
                    },
                    {
                        Id: getRandomId(),
                        Start: '12:30',
                        DurationInMinutes: 30,
                        Type: 'Call',
                    },
                ],
            },
        ],
    },
    {
        Id: getRandomId(),
        Date: luxon.DateTime.now().plus({ days: 8 }).toUTC().toString(),
        DayOfWeek: parseInt(
            luxon.DateTime.now()
                .plus({ days: 8 })
                .setLocale('en-US')
                .toFormat('c'),
        ),
        Shifts: [
            {
                Id: getRandomId(),
                Date: luxon.DateTime.now().plus({ days: 8 }).toUTC().toString(),
                StartTime: '09:00',
                DurationInMinutes: 360,
                ShiftSegments: [
                    {
                        Id: getRandomId(),
                        Start: '09:00',
                        DurationInMinutes: 120,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '11:00',
                        DurationInMinutes: 15,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '11:15',
                        DurationInMinutes: 120,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '13:15',
                        DurationInMinutes: 45,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '14:00',
                        DurationInMinutes: 60,
                        Type: 'Email',
                    },
                ],
            },
        ],
    },
    {
        Id: getRandomId(),
        Date: luxon.DateTime.now().plus({ days: 9 }).toUTC().toString(),
        DayOfWeek: parseInt(
            luxon.DateTime.now()
                .plus({ days: 9 })
                .setLocale('en-US')
                .toFormat('c'),
        ),
        Shifts: [
            {
                Id: getRandomId(),
                Date: luxon.DateTime.now().plus({ days: 9 }).toUTC().toString(),
                StartTime: '09:00',
                DurationInMinutes: 120,
                ShiftSegments: [
                    {
                        Id: getRandomId(),
                        Start: '09:00',
                        DurationInMinutes: 45,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '09:45',
                        DurationInMinutes: 15,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '10:00',
                        DurationInMinutes: 60,
                        Type: 'Call',
                    },
                ],
            },
        ],
    },
    {
        Id: getRandomId(),
        Date: luxon.DateTime.now().plus({ days: 10 }).toUTC().toString(),
        DayOfWeek: parseInt(
            luxon.DateTime.now()
                .plus({ days: 10 })
                .setLocale('en-US')
                .toFormat('c'),
        ),
        Shifts: [
            {
                Id: getRandomId(),
                Date: luxon.DateTime.now()
                    .plus({ days: 10 })
                    .toUTC()
                    .toString(),
                StartTime: '09:00',
                DurationInMinutes: 360,
                ShiftSegments: [
                    {
                        Id: getRandomId(),
                        Start: '09:00',
                        DurationInMinutes: 120,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '11:00',
                        DurationInMinutes: 15,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '11:15',
                        DurationInMinutes: 120,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '13:15',
                        DurationInMinutes: 45,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '14:00',
                        DurationInMinutes: 60,
                        Type: 'Email',
                    },
                ],
            },
        ],
    },
    {
        Id: getRandomId(),
        Date: luxon.DateTime.now().plus({ days: 11 }).toUTC().toString(),
        DayOfWeek: parseInt(
            luxon.DateTime.now()
                .plus({ days: 11 })
                .setLocale('en-US')
                .toFormat('c'),
        ),
        Shifts: [
            {
                Id: getRandomId(),
                Date: luxon.DateTime.now()
                    .plus({ days: 11 })
                    .toUTC()
                    .toString(),
                StartTime: '09:00',
                DurationInMinutes: 360,
                ShiftSegments: [
                    {
                        Id: getRandomId(),
                        Start: '09:00',
                        DurationInMinutes: 120,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '11:00',
                        DurationInMinutes: 15,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '11:15',
                        DurationInMinutes: 120,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '13:15',
                        DurationInMinutes: 45,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '14:00',
                        DurationInMinutes: 60,
                        Type: 'Email',
                    },
                ],
            },
        ],
    },
    {
        Id: getRandomId(),
        Date: luxon.DateTime.now().plus({ days: 12 }).toUTC().toString(),
        DayOfWeek: parseInt(
            luxon.DateTime.now()
                .plus({ days: 12 })
                .setLocale('en-US')
                .toFormat('c'),
        ),
        Shifts: [
            {
                Id: getRandomId(),
                Date: luxon.DateTime.now()
                    .plus({ days: 12 })
                    .toUTC()
                    .toString(),
            },
        ],
    },
    {
        Id: getRandomId(),
        Date: luxon.DateTime.now().plus({ days: 13 }).toUTC().toString(),
        DayOfWeek: parseInt(
            luxon.DateTime.now()
                .plus({ days: 13 })
                .setLocale('en-US')
                .toFormat('c'),
        ),
        Shifts: [
            {
                Id: getRandomId(),
                Date: luxon.DateTime.now()
                    .plus({ days: 13 })
                    .toUTC()
                    .toString(),
                StartTime: '09:00',
                DurationInMinutes: 180,
                ShiftSegments: [
                    {
                        Id: getRandomId(),
                        Start: '09:00',
                        DurationInMinutes: 90,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '10:30',
                        DurationInMinutes: 15,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '10:45',
                        DurationInMinutes: 75,
                        Type: 'Call',
                    },
                ],
            },
            {
                Id: getRandomId(),
                Date: luxon.DateTime.now()
                    .plus({ days: 13 })
                    .toUTC()
                    .toString(),
                StartTime: '21:00',
                DurationInMinutes: 120,
                ShiftSegments: [
                    {
                        Id: getRandomId(),
                        Start: '21:00',
                        DurationInMinutes: 45,
                        Type: 'Call',
                    },
                    {
                        Id: getRandomId(),
                        Start: '21:45',
                        DurationInMinutes: 15,
                        Type: 'Break',
                    },
                    {
                        Id: getRandomId(),
                        Start: '22:00',
                        DurationInMinutes: 60,
                        Type: 'Call',
                    },
                ],
            },
        ],
    },
];
