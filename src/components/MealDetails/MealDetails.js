import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const MealDetails = () => {
    const meals = useLoaderData().meals[0];
    const {idMeal, strArea, strInstructions, strMeal,} = meals;
    const navigate = useNavigate()
    const handleAuthor = () => {
        navigate(`/meals/${idMeal}`)
    }
    return (
        <div>
            <h1 className='text-center text-4xl font-semibold py-3'>Meals Details</h1>
            <div className='border w-[50%] m-auto text-center p-4 rounded-md bg-orange-500'>
            <h1 className='text-3xl'><strong>Meal: </strong>{strMeal}</h1>
                <p className='text-justify'><strong>Details: </strong>{strInstructions.slice(0, 300)}</p>
                <p className='text-2xl'><strong>Area: </strong>{strArea}</p>
                <button onClick={handleAuthor} className="btn btn-active btn-primary mt-3">Author Details</button>
               
            </div>
        </div>
    );
};

export default MealDetails;