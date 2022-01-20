import { LightningElement, api, wire, track } from "lwc";
import { NavigationContext, generateUrl, navigate } from 'lwr/navigation';
import type { ContextId } from 'lwr/navigation';
import type { PageReference } from 'lwr/router';

export interface NavData {
    name: string;
    label: string;
    href?: string;
    disabled?: boolean;
    expanded?: boolean;
    items?: [];
    pageReference: PageReference;
}

export default class NavItem extends LightningElement {
    @wire(NavigationContext as any)
    navContext?: ContextId;

    path?: string;
    _selected = false;
    @track _expanded = false;

    @api pageReference?: PageReference;
    @api label?: string;
    @api hasChildren?: boolean;
    // @api children?: NavData[];

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

    @track _children: NavData[];

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
    }

    async connectedCallback(): Promise<void> {
        if (this.pageReference && this.navContext) {
            this.path = generateUrl(this.navContext, this.pageReference) || undefined;
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

    get liClassList(): string {
        return this.hasChildren ? '' : 'headerless';
    }
}