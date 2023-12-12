import './searchBar.js';
import './mealList.js';
import DataMeals from './getdata.js';

const index = () => {
    const searchElement = document.querySelector('search-bar');
    const mealListElement = document.querySelector('meal-list');

    const searchButtonClick = async () => {
        try {
            const result = await DataMeals.searchFood(searchElement.value);
            successResult(result);
        }
        catch (alert) {
            failResult(alert);
        }
    };

    const successResult = results => {
        mealListElement.meals = results;
    };

    const failResult = alert => {
        mealListElement.callingError(alert);
    };

    searchElement.clickEvent = searchButtonClick;
};

export default index;