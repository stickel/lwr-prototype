import { LightningElement, track, api } from 'lwc';
import { randomNumber } from 'global/utils';
import type { RecommendedArticle } from 'lightningservice/recommendationItem';

// Labels
// These are found in src/labels/lightningservice/en.json
import LIVE_RECOMMENDATIONS from '@my/label/lightningservice/kb.liveRecommendations';
import BUTTON_LATEST from '@my/label/lightningservice/kb.button.latest';
import BUTTON_ALL from '@my/label/lightningservice/kb.button.all';

export default class Knowledge extends LightningElement {
    @track _activeTab;
    @track _maxHeight: number;
    @track _pinned: Array<string>;
    @track _latestList: Array<RecommendedArticle>;
    @track _allList: Array<RecommendedArticle>;
    _rendered = false;

    constructor() {
        // Setting defaults
        super();
        this._activeTab = 'all';
        this._maxHeight = 0;
        this._pinned = [];
        this._allList = [
            {
                Id: '1',
                Title: 'Foo bar',
                Description:
                    'some test text here for all the cool kids. What is your choice for fake data when you write these things in code?',
                RelevanceScore: `${randomNumber(98.0, 100.0)}`,
                Pinned: false,
            },
            {
                Id: '2',
                Title: 'Student Registration for WileyPLUS',
                Description:
                    'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre tye ew nderit in voluptate velit',
                RelevanceScore: `${randomNumber(98.0, 100.0)}`,
                Pinned: false,
            },
            {
                Id: '3',
                Title: 'How to Access the WileyPLUS eTextbook',
                Description:
                    'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre tye ew nderit in voluptate velit',
                RelevanceScore: `${randomNumber(98.0, 100.0)}`,
                Pinned: false,
            },
            {
                Id: '4',
                Title: 'Downloading eBooks',
                Description:
                    'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre tye ew nderit in voluptate velit',
                RelevanceScore: `${randomNumber(98.0, 100.0)}`,
                Pinned: false,
            },
            {
                Id: '5',
                Title: 'Getting Started with Knewton Alta for Students Learn how to join a course, pay for access to Knewton Alta or enter an access code, and start an assignment',
                Description:
                    'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre tye ew nderit in voluptate velit',
                RelevanceScore: `${randomNumber(98.0, 100.0)}`,
                Pinned: false,
            },
            {
                Id: '6',
                Title: 'Locating my eBook / eTextbook',
                Description:
                    'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre tye ew nderit in voluptate velit',
                RelevanceScore: `${randomNumber(98.0, 100.0)}`,
                Pinned: false,
            },
        ];
        this._latestList = [];
    }

    renderedCallback(): void {
        // Setting the height of the container for our recommendations
        if (!this._rendered) {
            // padding top/bottom main page template
            const templatePadding = '1.5rem';
            // lightning-card header height (I inspected the element to find this number)
            const headerHeight = 44;
            // the kb search input and "filter" button height
            const searchboxHeight =
                this.template.querySelector('.kb-search')?.clientHeight || 0;
            // the "einstein live recommendations" & "latest"/"all" buttons
            const tabHeight =
                this.template.querySelector('.rt-recommendation-tabs')
                    ?.clientHeight || 0;
            // Full lightning-card height
            const listHeight =
                this.template.querySelector('.rt-recommendations')
                    ?.clientHeight || 0;
            // mix it all together...
            const maxHeight =
                listHeight - tabHeight - headerHeight - searchboxHeight;
            (
                this.template.querySelector(
                    '.rt-recommendations',
                ) as HTMLElement
            ).style.maxHeight = `calc(${maxHeight}px - ${templatePadding})`;

            // now let's not do this again until a page reload
            this._rendered = true;
        }
    }

    @api
    get maxHeight(): number {
        return this._maxHeight;
    }
    set maxHeight(value: number) {
        this._maxHeight = value;
    }

    @api
    get activeTab(): string {
        return this._activeTab;
    }
    set activeTab(value: string) {
        this._activeTab = value;
    }

    @api
    get pinned(): Array<string> {
        return this._pinned;
    }
    set pinned(value: Array<string>) {
        this._pinned = value;
    }

    @api
    get latestList(): Array<RecommendedArticle> {
        return this._latestList;
    }
    set latestList(value: Array<RecommendedArticle>) {
        this._latestList = value;
    }

    @api
    get allList(): Array<RecommendedArticle> {
        return this._allList.filter((r) => {
            return r.Pinned === false;
        });
    }
    set allList(value: Array<RecommendedArticle>) {
        this._allList = value;
    }

    get recommendationListOptions(): Array<object> {
        return [
            {
                label: BUTTON_LATEST,
                value: BUTTON_LATEST.toLowerCase(),
            },
            {
                label: BUTTON_ALL,
                value: BUTTON_ALL.toLowerCase(),
            },
        ];
    }

    get recommendations(): Array<RecommendedArticle> {
        if (this.activeTab === 'latest') {
            return this.sortList(this.latestList);
        } else {
            return this.sortList(this.allList);
        }
    }

    get i18n(): object {
        return {
            liveRecommendations: LIVE_RECOMMENDATIONS,
            buttonLatest: BUTTON_LATEST,
            buttonAll: BUTTON_ALL,
        };
    }

    // Handlers
    handleListToggle(): void {
        if (this._activeTab === 'all') {
            this._activeTab = 'latest';
            console.log('latest', JSON.parse(JSON.stringify(this._latestList)));
        } else {
            this._activeTab = 'all';
        }
    }

    pinUnpin(evt: CustomEvent): void {
        const { articleId, pin } = evt.detail;
        // Toggling pinned/unpinned articles by updating their
        // Pinned property and adding or removing them from
        // the `pinned` array.
        if (pin) {
            this._pinned.push(articleId);
            this._allList.forEach((r) => {
                if (r.Id === articleId) {
                    r.Pinned = pin;
                    // Add the newly pinned article to the "latest" array
                    this._latestList.push(r);
                }
            });
            // When we pin an article, we need to swap the
            // active tab to the "latest" tab
            // Question: Should we only do this if the latest tab is empty or every
            // time someone pins an article?
            this._activeTab = 'latest';
        } else if (!pin) {
            // Remove articleId from the pinned array
            this._pinned.splice(this._pinned.indexOf(articleId), 1);
            // Set the `Pinned` prop on the `allList` to false
            this._allList.forEach((r) => {
                if (r.Id === articleId) {
                    r.Pinned = pin;
                }
            });
            // Remove the item matching Id: articleId from this._latestList
            this._latestList = this._latestList.filter((r) => {
                return r.Id !== articleId;
            });
        }
        // Set the active tab back to "all" since "latest" is now empty
        if (this._pinned.length === 0) {
            this._activeTab = 'all';
        }
    }

    // This will sort on "pinned" and "relevance score" data.
    // "pinned" state is sorted to the top, then everything is sorted by
    // descending relevance score
    sortList(list: Array<RecommendedArticle>): Array<RecommendedArticle> {
        const sorted = list.sort((a: any, b: any) => {
            return (
                Number(b.Pinned) - Number(a.Pinned) ||
                b.RelevanceScore.localeCompare(a.RelevanceScore)
            );
        });
        return sorted;
    }
}
