import React from 'react';
import { Link } from 'react-router-dom';
import './Meal.css';
const Meal = ({ meal }) => {
    const { strMealThumb, strMeal, strCategory, idMeal} = meal;
    return (
        <div>
            <div className="card border bg-base-100 shadow-xl">
                <figure><img src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                    <p><strong>Category: </strong>{strCategory}</p>
                    <div className="card-actions justify-between">
                    <button className="btn btn-active btn-primary">Buy Now</button>
                    <Link to={`${idMeal}`}>
                    <button className="btn btn-active btn-secondary">Details</button>
                    </Link>
                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meal;