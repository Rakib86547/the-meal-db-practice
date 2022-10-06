
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Erorr from './components/Erorr/Erorr';
import MealDetails from './components/MealDetails/MealDetails';
import Meals from './components/Meals/Meals';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
      {path: '/meals',
      loader: async () => {
        return fetch ('https://www.themealdb.com/api/json/v1/1/search.php?s')
      },
      element: <Meals></Meals>},
      {path: '/meals/:idMeal',
      loader: async ({params}) => {
        return fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
      },
      element: <MealDetails></MealDetails>},
      {
        path: '/about', element: <About></About>
      },
      {
        path: '/products', element: <Products></Products>
      },
      {
        path: '/orders', element: <Orders></Orders>
      }
    ]},
    {path: '*', element: <Erorr></Erorr>}
  ])
  return (
    <div>
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
