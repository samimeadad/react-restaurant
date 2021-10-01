import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css';

const Restaurant = () => {
    const [ searchText, setSearchText ] = useState( '' );
    const [ meals, setMeals ] = useState( [] );


    const handleInputField = ( event ) => {
        const searchTextValue = event.target.value;
        setSearchText( searchTextValue );
    }

    useEffect( () => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ searchText }`;
        fetch( url )
            .then( res => res.json() )
            .then( data => setMeals( data?.meals ) );
    }, [ searchText ] );

    return (
        <div style={ { marginTop: '25px' } }>
            <input onChange={ handleInputField } type="text" name="" id="" placeholder="Search your meal here" />
            <h2>Total Meals: { meals?.length }</h2>
            <div className="meal-container">
                {
                    meals.map( meal => <Meal key={ meal?.idMeal } meal={ meal }></Meal> )
                }
            </div>
        </div>
    );
};

export default Restaurant;