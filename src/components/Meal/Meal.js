import React from 'react';
import './Meal.css';

const Meal = ( props ) => {
    const { strMeal, strInstructions, strMealThumb } = props.meal;
    return (
        <div className="meal-card">
            <img style={ { width: '250px', borderRadius: '10px' } } src={ strMealThumb } alt="mealImage" />
            <h4>{ strMeal }</h4>
            <p>{ strInstructions.slice( 0, 100 ) }</p>
            <button>Show Details</button>
        </div>
    );
};

export default Meal;