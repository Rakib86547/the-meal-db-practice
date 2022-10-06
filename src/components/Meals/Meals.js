import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';
import './Meals.css';
const Meals = () => {
    const meals = useLoaderData().meals
    return (
        <div>
            <div className='w-full container m-auto grid grid-cols-1 md:grid-cols-2 mt-12 lg:grid-cols-3 gap-5 m-[0, auto]'>
            {
                meals.map(meal => <Meal
                key={meal.idMeal}
                meal={meal}
                ></Meal>)
            }
            </div>
        </div>
    );
};

export default Meals;