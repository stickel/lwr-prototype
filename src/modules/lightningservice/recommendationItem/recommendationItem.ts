import { LightningElement, api, track } from 'lwc';
import { formatLabel } from 'global/utils';

// Labels
// These are found in src/labels/lightningservice/en.json
import MARK_NOT_HELPFUL from '@my/label/lightningservice/kb.markNotHelpful';
import RELEVANCE_SCORE from '@my/label/lightningservice/kb.relevance';
import PIN_ARTICLE from '@my/label/lightningservice/kb.pinArticle';
import ATTACH_ARTICLE from '@my/label/lightningservice/kb.attachArticle';

export interface RecommendedArticle {
    Id: string;
    Title: string;
    Description: string;
    RelevanceScore: string;
    Pinned: boolean;
}

export default class RecommendationItem extends LightningElement {
    @track _recommendation: RecommendedArticle;
    @track _isPinned: boolean;

    // Setting defaults
    constructor() {
        super();
        this._recommendation = {
            Id: '',
            Title: '',
            Description: '',
            RelevanceScore: '',
            Pinned: false,
        };
        this._isPinned = this._recommendation.Pinned;
    }

    @api
    get recommendation(): RecommendedArticle {
        return this._recommendation;
    }
    set recommendation(value: RecommendedArticle) {
        this._recommendation = value;
    }

    @api
    get isPinned(): boolean {
        return this._isPinned;
    }
    set isPinned(value: boolean) {
        this._isPinned = value;
    }

    get relevanceScore(): string {
        return formatLabel(
            RELEVANCE_SCORE,
            this._recommendation.RelevanceScore,
        );
    }

    get i18n(): object {
        return {
            markNotHelpful: MARK_NOT_HELPFUL,
            pinArticle: PIN_ARTICLE,
            attachArticle: ATTACH_ARTICLE,
        };
    }

    // Handlers
    handlePin(): void {
        this._isPinned = !this._isPinned;
        this.dispatchEvent(
            new CustomEvent('pinunpinarticle', {
                bubbles: true,
                detail: {
                    articleId: this._recommendation.Id,
                    pin: this._isPinned,
                },
            }),
        );
    }

    handleNotHelpful(evt: Event): void {
        console.log('Item marked as not helpful', evt);
    }

    handleAttach(evt: Event): void {
        console.log('Attach button clicked', evt);
    }
}
