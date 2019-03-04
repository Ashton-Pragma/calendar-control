import { BaseElement } from "./../../node_modules/pragma-views2/baremetal/lib/base-element.js";

export class PragmaCalendar extends BaseElement {
    connectedCallback() {
        super.connectedCallback();
        this.initTemplate();
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.removeEventListener("click", this.clickHandler);
        this.querySelector("#btnPrevious").removeEventListener("click", this.btnPreviousHandler);
        this.querySelector("#btnNext").removeEventListener("click", this.btnNextHandler);

        this.clickHandler = null;
        this.btnPreviousHandler = null;
        this.btnNextHandler = null;
        this.dayTemplate = null;
        this.headTemplate = null;
    }

    initTemplate() {

        Date.prototype.addDays = function(days) {
            let date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }

        const instance = document.importNode(window.templates.get("pragma-calendar-template"), true);
        this.appendChild(instance);

        this.navDate = new Date();
        this.selected = new Date();

        const dayTemplateNode = document.importNode(window.templates.get("day"), true);
        const headTemplateNode = document.importNode(window.templates.get("header"), true);

        this.dayTemplate = dayTemplateNode.children;
        this.headTemplate = headTemplateNode.children;

        this.renderMonth(this.navDate);

        this.btnPreviousHandler = this.doPrevious.bind(this);
        this.querySelector("#btnPrevious").addEventListener("click", this.btnPreviousHandler);

        this.btnNextHandler = this.doNext.bind(this);
        this.querySelector("#btnNext").addEventListener("click", this.btnNextHandler);

        this.clickHandler = this.doClick.bind(this);
        this.addEventListener("click", this.clickHandler);

        let element = document.createElement("link");
        element.setAttribute("rel", "stylesheet");
        element.setAttribute("href", "../../styles/pragma-calendar.css");
        document.getElementsByTagName("head")[0].appendChild(element);
    }

    get selected() {
        return this._selected;
    }

    set selected(newValue) {
        this._selected = newValue;
    }

    renderMonth(date) {
        const currentMonth = date.getMonth();

        this.querySelector("#month-header").innerHTML = `${this.monthsAsString(currentMonth)} ${date.getFullYear()}`;

        const fragment = document.createDocumentFragment();
        const details = document.createElement("div");
        details.classList.add("details");

        const header = this.headTemplate;
        for (let item of header) {
            let clone = item.cloneNode(true);
            details.appendChild(clone);
        }

        date.setDate(1);
        const startDay = date.getDay();
        this.createBuffer(startDay, details, date, true);

        while (date.getMonth() === currentMonth) {
            this.createDay(date, details);
            date.setDate(date.getDate() + 1)
        }

        date.setDate(date.getDate() - 1);
        const endDay = 6 - date.getDay();
        this.createBuffer(endDay, details, date, false);

        fragment.appendChild(details);
        this.replaceChild(fragment, this.querySelector(".details"));
    }

    createDay(date, fragment) {
        const element = this.dayTemplate[0].cloneNode(true);
        const dayElement = element;
        const today = new Date();

        dayElement.innerText = date.getDate();
        dayElement.setAttribute("data-value", `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);

        if (this.sameDay(date, today)) {
            element.classList.remove("suppressed");
            element.classList.add("today");
        }

        if (this.sameDay(date, this.selected)) {
            element.classList.add("selected");
        }

        fragment.appendChild(element);
    }

    createBuffer(count, fragment, date, backwards) {

        for (let i = 1; i <= count; i++) {

            let clonedDate = new Date(+date);

            let element = this.dayTemplate[0].cloneNode(true);
            element.classList.add("no-date");
            clonedDate = backwards ? clonedDate.addDays(i - (count + 1)) : clonedDate.addDays(i);
            element.innerText = clonedDate.getDate();
            fragment.appendChild(element);
        }
    }

    monthsAsString(monthIndex) {
        return [
            'January',
            'Febuary',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ][monthIndex]
    }

    doPrevious() {
        let month = this.navDate.getMonth();
        let year = this.navDate.getFullYear();

        if (month == 0) {
            year = year - 1;
            month = 12;
        }

        month = month - 1;

        const date = new Date(year, month, 1);
        this.renderMonth(date);
        this.navDate = new Date(year, month, 1);
    }

    doNext() {
        let month = this.navDate.getMonth();
        let year = this.navDate.getFullYear();

        if (month == 11) {
            year = year + 1;
            month = -1;
        }

        month = month + 1;

        const date = new Date(year, month, 1);
        this.renderMonth(date);
        this.navDate = new Date(year, month, 1);
    }

    doClick(event) {
        if (event.target.classList.contains("day")) {
            const dateValue = event.target.getAttribute("data-value");
            this.selected = new Date(dateValue);

            const oldSelected = this.querySelector(".selected");
            if (oldSelected != undefined) {
                oldSelected.classList.remove("selected");
            }

            event.target.classList.add("selected");

            console.log(this.selected);
        }
    }

    sameDay(day1, day2) {
        return day1.getFullYear() == day2.getFullYear() && day1.getMonth() == day2.getMonth() && day1.getDate() == day2.getDate();
    }
}

customElements.define('pragma-calendar', PragmaCalendar);