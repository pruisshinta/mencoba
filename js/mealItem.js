class MealItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set meal(meal) {
        this._meal = meal;
        this.calling();
    }

    calling() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                :host {
                    display: block;
                    flex: 0 0 calc(33.33% - 10px);
                    margin: 20px 5px 0 5px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                    transition: box-shadow 0.3s ease;
                }
                :host(:hover) {
                    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
                }
                .image-item {
                    width: 100%;
                    max-height: 200px;
                    object-fit: cover;
                    object-position: center;
                }
                .meal-desc {
                    padding: 0;
                }
                .meal-desc > .meal-name {
                    margin-top: 10px;
                    font-weight: bold;
                }

                .meal-desc > .meal-area {
                    font-weight: lighter;
                }
                
                .meal-desc > p {
                    margin: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 5;
                    padding: 0 10px;
                    text-align: justify;
                }
                .box-button {
                    cursor: pointer;
                    margin-bottom: 15px;
                    padding: 10px 13px;
                    background-color: #FFB000;
                    color: white;
                    border: 0;
                    border-radius: 5px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                }

                .box-button:hover {
                    background-color: #EE9322;
                    font-weight: bold;
                }

                @media screen and (min-width: 600px) and (max-width: 1000px) {
                    :host {
                        flex: 0 0 calc(50% - 10px);
                    }
                }

                @media screen and (max-width: 599px) {
                    :host {
                        flex: 100%;
                    }
                }
            </style>

            <img class="image-item" id="youtubeLink" src="${this._meal.strMealThumb}">
            <div class="meal-desc">
                <h3 class="meal-name">${this._meal.strMeal}</h3>
                <h3 class="meal-area">${this._meal.strArea}</h3>
                <p>${this._meal.strInstructions}</p>
            </div>
            <button class="box-button">Show Tutorial</button>
        `;
        const imageElement = this.shadowDOM.querySelector(".box-button");
        imageElement.addEventListener("click", () => {
            const youtubeVideoURL = `${this._meal.strYoutube}`;
            window.open(youtubeVideoURL, '_blank');
        });
    }
}

customElements.define('meal-item', MealItem);