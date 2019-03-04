import {loadComponent} from './../node_modules/pragma-views2/webcomponents/component-loader.js';

const loadRequiredResources = async () => {
    loadComponent("./node_modules/pragma-views2/webcomponents/pragma-icons/pragma-icons", true);
    loadComponent("./node_modules/pragma-views2/webcomponents/pragma-menu/pragma-menu", true);
    loadComponent("./node_modules/pragma-views2/webcomponents/pragma-app-bar/pragma-app-bar", true);
    loadComponent("./node_modules/pragma-views2/webcomponents/pragma-navigator/pragma-navigator", false);
    loadComponent("./node_modules/pragma-views2/webcomponents/pragma-tree/pragma-tree", true);
    loadComponent("./node_modules/pragma-views2/webcomponents/pragma-action-icon/pragma-action-icon", false);

    // loadComponent("./node_modules/pragma-views2/baremetal/components/conditional-container/conditional-container", false);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-action-button/pragma-action-button", false);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-action-dialog/pragma-action-dialog", true);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-form/pragma-form", true);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-master-detail/pragma-master-detail", true);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-pager/pragma-pager", false);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-label-composite/pragma-label-composite", true);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-panel-bar/pragma-panel-bar", true);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-messages/pragma-messages", true);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-clipboard/pragma-clipboard", false);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-dialogs/pragma-dialogs", true);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-assistant/pragma-assistant", true);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-group/pragma-group", true);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-list/pragma-list", true);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-grid/pragma-grid", true);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-chart/pragma-chart", false);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-chart/axis/band-axis", false);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-chart/axis/linear-axis", false);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-chart/axis/time-axis", false);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-chart/charts/bar-chart", false);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-chart/charts/line-chart", false);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-chart/charts/area-chart", false);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-icon-button/pragma-icon-button", true);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-lookup/pragma-lookup", true);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-split-view/pragma-split-view", true);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-breadcrumb/pragma-breadcrumb", true);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-column-container/pragma-column-container", true);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-branch/pragma-branch", false);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-advanced-grid/pragma-advanced-grid", true);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-tooltip/pragma-tooltip", true);
    // loadComponent("./node_modules/pragma-views2/webcomponents/pragma-filter/pragma-filter", true);
};

loadRequiredResources();
