class DataMeals {
    static searchFood(keyword) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then(meal => {
            return meal.json();
        })
        .then(mealJson => {
            if (mealJson.meals) {
                return Promise.resolve(mealJson.meals);
            }
            else {
                return Promise.reject(`Sorry ${keyword} is not found, fill another name please!`);
            }
        });
    }
}

export default DataMeals;