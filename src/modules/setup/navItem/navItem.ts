import { LightningElement, api, wire, track } from 'lwc';
import { NavigationContext, generateUrl, navigate } from 'lwr/navigation';
import type { ContextId } from 'lwr/navigation';
import type { PageReference } from 'lwr/router';

export interface NavData {
    name: string;
    label: string;
    href?: string | null;
    disabled?: boolean | false;
    expanded?: boolean | false;
    items?: any;
    pageReference?: PageReference;
}

export default class NavItem extends LightningElement {
    @wire(NavigationContext as any)
    navContext?: ContextId;

    path?: string;
    _selected = false;
    @track _index = 0;
    @track _childIndex = this._index + 1;
    @track _expanded = false;
    @track _children: NavData[];

    @api pageReference?: PageReference;
    @api label?: string;
    @api header?: boolean;

    @api
    get selected(): boolean {
        return this._selected;
    }

    set selected(value: boolean) {
        this._selected = value;
        const element = this.template.querySelector('[role="treeitem"]');
        if (element) {
            element.setAttribute('aria-selected', `${this._selected}`);
        }
    }

    @api
    get expanded(): boolean {
        return this._expanded;
    }

    set expanded(value: boolean) {
        this._expanded = value;
        const element = this.template.querySelector('[role="treeitem"]');
        if (element) {
            element.setAttribute('aria-expanded', `${this._expanded}`);
        }
    }

    @api
    get index(): number {
        return this._index;
    }

    set index(value: number) {
        this._index = value;
    }

    @api
    get childIndex(): number {
        return this._childIndex;
    }

    set childIndex(value: number) {
        this._childIndex = value;
    }

    @api
    get children(): NavData[] {
        return this._children;
    }

    set children(value: NavData[]) {
        this._children = value;
    }

    constructor() {
        super();
        this.label = '';
        this._children = [];
    }

    async connectedCallback(): Promise<void> {
        if (this.pageReference && this.navContext) {
            this.path =
                generateUrl(this.navContext, this.pageReference) || undefined;
        }
    }

    renderedCallback(): void {
        if (this.hasChildren) {
            this._childIndex = this._index + 1;
        }
    }

    handleClick(event: Event): void {
        event.preventDefault();
        if (this.pageReference && this.navContext) {
            navigate(this.navContext, this.pageReference);
        }
    }

    handleExpandCollapse(event: Event): void {
        event.preventDefault();
        // switch the chevron
        this._expanded = !this._expanded;
    }

    get hasChildren(): boolean {
        return this._children && this._children.length !== 0;
    }

    get liClassList(): string {
        return this.header === false ? 'headerless' : '';
    }
}
