import { LightningElement, api } from "lwc";
import type { NavData } from "../navItem/navItem";

export default class NavSection extends LightningElement {
    @api navItems: NavData[];
    @api header?: string;
}