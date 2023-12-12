import './mealItem.js';

class MealList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set meals(meals) {
        this._meals = meals;
        this.calling();
    }

    calling() {
        this.shadowDOM.innerHTML = '';
        this._meals.forEach(meals => {
            const mealItemElement = document.createElement('meal-item');
            mealItemElement.meal = meals;
            this.shadowDOM.appendChild(mealItemElement);
        });
    }

    callingError(alert) {
        this.shadowDOM.innerHTML = `
            <style>
                .placeholder {
                    padding: 16px;
                    font-weight: lighter;
                    color: rgba(0,0,0,0.5);
                    justify-content: center;
                    text-align: center;
                    align-items: center;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${alert}</h2>`;
    }
}

customElements.define('meal-list', MealList);