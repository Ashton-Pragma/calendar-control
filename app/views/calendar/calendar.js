import {ViewBase} from "./../../../node_modules/pragma-views2/baremetal/lib/view-base.js";
import {loadComponent} from "./../../../node_modules/pragma-views2/webcomponents/component-loader.js";

export default class Calendar extends ViewBase {
    connectedCallback() {
        loadComponent("/webcomponents/pragma-calendar/pragma-calendar", true);
    }
}