import { LightningElement, track } from 'lwc';
import luxon, { DateTimeFormatOptions } from 'luxon';
import type { PageReference } from 'lwr/router';
import { getRandomId } from 'global/utils';
import type { SwapShift } from '../shiftItem/shiftItem';
import type { WorkDay } from '../scheduleView/scheduleView';

const { compare } = Intl.Collator('en-US');

export default class Home extends LightningElement {
    @track _workdayOffset: number;
    @track _workdayLimit: number;
    @track _currentDisplayIndex: number;
    @track _workdays = workdays;

    todayRoughHeight = 120;
    workdayRoughHeight = 60;
    scrollBuffer = 0;

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

    renderedCallback(): void {
        const header = this.template
            .querySelector('.schedule-container lightning-card')
            ?.shadowRoot?.querySelector('.slds-card__header');
        this.scrollBuffer = (header as HTMLElement).clientHeight + 12;
        const container = this.template.querySelector('.schedule-week');
        const listElement = this.template.querySelector(
            'serviceconsole-schedule-view',
        );
        (container as HTMLElement).style.height = `648px`;
        let scrollTo = 0;
        const todaysShiftIndex = this.indexOfDate(
            this.localeToday(luxon.DateTime.DATE_SHORT),
        );
        const todaysShift = listElement?.shadowRoot?.querySelectorAll(
            'serviceconsole-shift-item',
        )[todaysShiftIndex];
        scrollTo = (todaysShift as HTMLElement).offsetTop;
        container?.scroll({
            top: scrollTo - this.scrollBuffer,
        });
    }

    handleUpdateWorkdayOffset(event: CustomEvent): void {
        this._workdayOffset = event.detail.offset;
    }

    handleUpdateWorkdayLimit(event: CustomEvent): void {
        this._workdayLimit = event.detail.limit;
    }

    handleScheduleInc(): void {
        const container = this.template.querySelector('.schedule-week');
        const listElement = this.template.querySelector(
            'serviceconsole-schedule-view',
        );
        const nextWeekIndex = this.startOfNextWeekIndex;
        const newTopShift = listElement?.shadowRoot?.querySelectorAll(
            'serviceconsole-shift-item',
        )[nextWeekIndex]; //[delta - 1];
        const scrollTo = (newTopShift as HTMLElement).offsetTop;
        const incomingList = this._workdays.slice(
            nextWeekIndex,
            this._workdayLimit,
        );

        if (
            incomingList.includes(
                this._workdays[
                    this.indexOfDate(
                        this.localeToday(luxon.DateTime.DATE_SHORT),
                    )
                ],
            )
        ) {
            (container as HTMLElement).style.height = `648px`;
        } else {
            (container as HTMLElement).style.height = `570px`;
        }

        delay(100).then(() => {
            container?.scroll({
                top: scrollTo - this.scrollBuffer,
                behavior: 'smooth',
            });
        });
    }

    handleScheduleDec(): void {
        const container = this.template.querySelector('.schedule-week');
        const listElement = this.template.querySelector(
            'serviceconsole-schedule-view',
        );
        const previousWeekIndex = this.startOfPreviousWeekIndex;
        const newTopShift = listElement?.shadowRoot?.querySelectorAll(
            'serviceconsole-shift-item',
        )[previousWeekIndex];
        const scrollTo = (newTopShift as HTMLElement).offsetTop;
        const incomingList = this._workdays.slice(
            previousWeekIndex,
            this._workdayLimit,
        );

        if (
            incomingList.includes(
                this._workdays[
                    this.indexOfDate(
                        this.localeToday(luxon.DateTime.DATE_SHORT),
                    )
                ],
            )
        ) {
            (container as HTMLElement).style.height = `648px`;
        } else {
            (container as HTMLElement).style.height = `570px`;
        }

        delay(100).then(() => {
            container?.scroll({
                top: scrollTo - this.scrollBuffer,
                behavior: 'smooth',
            });
        });
    }

    handleAddShift(event: CustomEvent): void {
        // Get the new shift
        const addMe = openShifts.filter(
            (shift) => shift.Id === event.detail.id,
        )[0];
        const addToIndex = this.indexOfDate(
            this.localeDate(addMe.Date, luxon.DateTime.DATE_SHORT),
        );
        this._workdays[addToIndex].Shifts.push(addMe);
    }

    indexOfDate(date: string): number {
        return this._workdays.findIndex((d) => {
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
        return luxon.DateTime.now().setLocale('en-US').toLocaleString(locale);
    }

    moveToPreviousWeekStart(): void {
        const currentDayOfWeek =
            this._workdays[this._currentDisplayIndex].DayOfWeek;
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
                this._workdays[this._workdayOffset].Date,
                luxon.DateTime.DATE_SHORT,
            ),
        );
    }

    moveToNextWeekStart(): void {
        const delta = this.deltaToNextWeekStart;
        this._workdayOffset = this._currentDisplayIndex + delta;
        this._currentDisplayIndex = this.indexOfDate(
            this.localeDate(
                this._workdays[this._workdayOffset].Date,
                luxon.DateTime.DATE_SHORT,
            ),
        );
    }

    get deltaToNextWeekStart(): number {
        const currentDayOfWeek =
            this._workdays[this._currentDisplayIndex].DayOfWeek;
        let delta = 1; // add 2: 1 for 0 index array, 1 for us wanting the next day
        if (currentDayOfWeek !== 1) {
            delta = 8 - currentDayOfWeek; // because we want day one, not the last day of the week
        }
        if (
            currentDayOfWeek === 1 &&
            this._currentDisplayIndex < this._workdayLimit
        ) {
            delta = this._workdayLimit;
        }
        return delta;
    }

    get deltaToLastWeekStart(): number {
        const currentDayOfWeek =
            this._workdays[this._currentDisplayIndex].DayOfWeek;
        let delta = 1;
        if (currentDayOfWeek !== 1) {
            delta = 8 - currentDayOfWeek;
        }
        if (currentDayOfWeek === 1 && this._currentDisplayIndex > 0) {
            delta = this._workdayLimit;
        }
        return delta;
    }

    get startOfNextWeekIndex(): number {
        if (
            this.showingThisWeek &&
            this._workdays[this._currentDisplayIndex].DayOfWeek !== 1
        ) {
            const todayDayOfWeek =
                this._workdays[this._currentDisplayIndex].DayOfWeek;
            return this._currentDisplayIndex + (8 - todayDayOfWeek);
        } else if (
            this._workdayOffset + this._workdayLimit <
            this._workdays.length
        ) {
            return this._currentDisplayIndex + this.deltaToNextWeekStart;
        }
        console.error(
            'Problem: Should not be going to zero when moving forward',
        );
        return 0;
    }

    get startOfPreviousWeekIndex(): number {
        if (
            this.showingThisWeek &&
            this._workdays[this._currentDisplayIndex].DayOfWeek !== 1
        ) {
            const todayDayOfWeek =
                this._workdays[this._currentDisplayIndex].DayOfWeek;
            return this._currentDisplayIndex - (7 - todayDayOfWeek);
        } else if (this._workdayOffset - this._workdayLimit > 0) {
            return this._currentDisplayIndex - this.deltaToLastWeekStart;
        }
        console.error('Problem: Should not get to zero looking for last week');
        return 0;
    }

    get showingNextSevenDays(): boolean {
        return (
            this.indexOfDate(this.localeToday(luxon.DateTime.DATE_SHORT)) ===
            this._currentDisplayIndex
        );
    }

    get nextSevenDays(): WorkDay[] {
        return this._workdays.slice(
            this.indexOfDate(this.localeToday(luxon.DateTime.DATE_SHORT)),
            this._workdayLimit + 1,
        );
    }

    get hasPrevDates(): boolean {
        return this._currentDisplayIndex > 0;
    }

    get hasNextDates(): boolean {
        return (
            this._currentDisplayIndex <
            this._workdays.length - this._workdayLimit
        );
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

        return `${luxon.DateTime.fromISO(
            this._workdays[this._workdayOffset].Date,
        )
            .setLocale('en-US')
            .toFormat('LLL d')} - ${luxon.DateTime.fromISO(
            this._workdays[this._workdayOffset].Date,
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
        return openShifts.sort((a, b) => compare(a.Date, b.Date));
    }

    get requests(): SwapShift[] {
        return myRequests.sort((a, b) => compare(a.Date, b.Date));
    }

    get workdayOffset(): number {
        return this._workdayOffset;
    }

    get workdayLimit(): number {
        return this._workdayLimit;
    }

    get myWorkdays(): WorkDay[] {
        return this.sortedWorkdays;
        // return this.sortedWorkdays.slice(
        //     this._workdayOffset,
        //     this._workdayOffset + this._workdayLimit,
        // );
        // return this._workdays
        //     .sort((a, b) => compare(a.Date, b.Date))
        //     .slice(
        //         this._workdayOffset,
        //         this._workdayOffset + this._workdayLimit,
        //     );
    }

    get sortedWorkdays(): WorkDay[] {
        return this._workdays.sort((a, b) => compare(a.Date, b.Date));
    }
}

function delay(time: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, time));
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
        Shifts: [],
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
        Shifts: [],
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
        Shifts: [],
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
        Shifts: [],
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

const openShifts = [
    {
        Id: getRandomId(),
        Date: setTime('17:00', 0, 3).toString(),
        Assignee: 'Supervisor',
        StartTime: '17:00',
        DurationInMinutes: 180,
        ShiftSegments: [
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('17:00', 0, 3).toString(),
                    0,
                ),
                DurationInMinutes: 90,
                Type: 'Call',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('17:00', 0, 3).toString(),
                    90,
                ),
                DurationInMinutes: 15,
                Type: 'Break',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('17:00', 0, 3).toString(),
                    105,
                ),
                DurationInMinutes: 75,
                Type: 'Call',
            },
        ],
        Swap: {
            request: true,
            with: '',
            complete: false,
        },
    },
    {
        Id: getRandomId(),
        Date: setTime('15:00', 0, 3).toString(),
        Assignee: '',
        DurationInMinutes: 300,
        StartTime: '15:00',
        ShiftSegments: [
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('15:00', 0, 3).toString(),
                    0,
                ),
                DurationInMinutes: 90,
                Type: 'Call',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('15:00', 0, 3).toString(),
                    90,
                ),
                DurationInMinutes: 15,
                Type: 'Break',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('15:00', 0, 3).toString(),
                    105,
                ),
                DurationInMinutes: 75,
                Type: 'Call',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('15:00', 0, 3).toString(),
                    180,
                ),
                DurationInMinutes: 30,
                Type: 'Break',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('15:00', 0, 3).toString(),
                    210,
                ),
                DurationInMinutes: 90,
                Type: 'Chat',
            },
        ],
        Swap: {
            request: true,
            with: 'Nigel Trager',
            complete: false,
        },
    },
    {
        Id: getRandomId(),
        Date: setTime('20:00', 0, 4).toString(),
        Assignee: '',
        DurationInMinutes: 480,
        StartTime: '20:00',
        ShiftSegments: [
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('20:00', 0, 4).toString(),
                    0,
                ),
                DurationInMinutes: 90,
                Type: 'Call',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('20:00', 0, 4).toString(),
                    90,
                ),
                DurationInMinutes: 30,
                Type: 'Break',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('20:00', 0, 4).toString(),
                    120,
                ),
                DurationInMinutes: 90,
                Type: 'Call',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('20:00', 0, 4).toString(),
                    210,
                ),
                DurationInMinutes: 60,
                Type: 'Break',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('20:00', 0, 4).toString(),
                    270,
                ),
                DurationInMinutes: 90,
                Type: 'Chat',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('20:00', 0, 4).toString(),
                    360,
                ),
                DurationInMinutes: 30,
                Type: 'Break',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('20:00', 0, 4).toString(),
                    390,
                ),
                DurationInMinutes: 90,
                Type: 'Chat',
            },
        ],
        Swap: {
            request: true,
            with: 'Wendy Yoder',
            complete: false,
        },
    },
    {
        Id: getRandomId(),
        Date: setTime('16:00', 0, 5).toString(),
        Assignee: '',
        DurationInMinutes: 480,
        StartTime: '16:00',
        ShiftSegments: [
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('16:00', 0, 5).toString(),
                    0,
                ),
                DurationInMinutes: 90,
                Type: 'Call',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('16:00', 0, 5).toString(),
                    90,
                ),
                DurationInMinutes: 30,
                Type: 'Break',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('16:00', 0, 5).toString(),
                    120,
                ),
                DurationInMinutes: 90,
                Type: 'Call',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('16:00', 0, 5).toString(),
                    210,
                ),
                DurationInMinutes: 60,
                Type: 'Break',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('16:00', 0, 5).toString(),
                    270,
                ),
                DurationInMinutes: 90,
                Type: 'Chat',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('16:00', 0, 5).toString(),
                    360,
                ),
                DurationInMinutes: 30,
                Type: 'Break',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('16:00', 0, 5).toString(),
                    390,
                ),
                DurationInMinutes: 90,
                Type: 'Chat',
            },
        ],
        Swap: {
            request: true,
            with: 'Wendy Yoder',
            complete: false,
        },
    },
    {
        Id: getRandomId(),
        Date: setTime('16:30', 0, 6).toString(),
        Assignee: '',
        DurationInMinutes: 480,
        StartTime: '16:30',
        ShiftSegments: [
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('16:30', 0, 6).toString(),
                    0,
                ),
                DurationInMinutes: 90,
                Type: 'Call',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('16:30', 0, 6).toString(),
                    90,
                ),
                DurationInMinutes: 30,
                Type: 'Break',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('16:30', 0, 6).toString(),
                    120,
                ),
                DurationInMinutes: 90,
                Type: 'Call',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('16:30', 0, 6).toString(),
                    210,
                ),
                DurationInMinutes: 60,
                Type: 'Break',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('16:30', 0, 6).toString(),
                    270,
                ),
                DurationInMinutes: 90,
                Type: 'Chat',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('16:30', 0, 6).toString(),
                    360,
                ),
                DurationInMinutes: 30,
                Type: 'Break',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('16:30', 0, 6).toString(),
                    390,
                ),
                DurationInMinutes: 90,
                Type: 'Chat',
            },
        ],
        Swap: {
            request: true,
            with: 'Simon Baez',
            complete: false,
        },
    },
    {
        Id: getRandomId(),
        Date: setTime('21:00', 0, 8).toString(),
        Assignee: '',
        DurationInMinutes: 480,
        StartTime: '21:00',
        ShiftSegments: [
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('21:00', 0, 8).toString(),
                    0,
                ),
                DurationInMinutes: 90,
                Type: 'Call',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('21:00', 0, 8).toString(),
                    90,
                ),
                DurationInMinutes: 30,
                Type: 'Break',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('21:00', 0, 8).toString(),
                    120,
                ),
                DurationInMinutes: 90,
                Type: 'Call',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('21:00', 0, 8).toString(),
                    210,
                ),
                DurationInMinutes: 60,
                Type: 'Break',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('21:00', 0, 8).toString(),
                    270,
                ),
                DurationInMinutes: 90,
                Type: 'Chat',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('21:00', 0, 8).toString(),
                    300,
                ),
                DurationInMinutes: 30,
                Type: 'Break',
            },
            {
                Id: getRandomId(),
                Start: setSegmentStartTime(
                    setTime('21:00', 0, 8).toString(),
                    330,
                ),
                DurationInMinutes: 90,
                Type: 'Chat',
            },
        ],
        Swap: {
            request: true,
            with: 'José Gonsalvez',
            complete: false,
        },
    },
];

const myRequests = [
    {
        Id: getRandomId(),
        Date: luxon.DateTime.now().plus({ days: 4 }).toUTC().toString(),
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
        Date: luxon.DateTime.now().plus({ days: 5 }).toUTC().toString(),
        DurationInMinutes: 420,
        StartTime: '16:30',
        Assignee: '',
        Swap: {
            request: true,
            with: '',
            complete: false,
            status: 'Awaiting approval',
            reason: 'PTO',
        },
    },
];

function setSegmentStartTime(date: string, addtion: number): string {
    const begin = luxon.DateTime.fromISO(date).setLocale('en-US');
    const segmentBegin = begin.plus({ minutes: addtion });
    return `${segmentBegin.toFormat('hh')}:${segmentBegin.toFormat('mm')}`;
}

function setTime(
    start: string,
    additionalMinutes?: number,
    additionalDays?: number,
): luxon.DateTime {
    let now = luxon.DateTime.now()
        .set({
            hour: parseInt(start.split(':')[0]),
            minute: parseInt(start.split(':')[1]),
        })
        .toUTC();
    if (additionalDays) {
        now = now.plus({ days: additionalDays });
    }
    if (additionalMinutes) {
        now = now.plus({ minutes: additionalMinutes });
    }

    return now;
}
