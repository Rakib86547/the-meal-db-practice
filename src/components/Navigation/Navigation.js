import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
const Navigation = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-gray-500 h-14 text-white flex items-center justify-between'>
            <div onClick={() => setOpen(!open)} className='md:hidden w-[50%] px-3 cursor-pointer'>
                {
                    open ? <XMarkIcon className='h-6 w-6'></XMarkIcon> : <Bars3Icon className='h-6 w-6'></Bars3Icon>
                }
            </div>
            <ul className={`nav-menu md:static text-center px-3 h-[100%] pt-10 absolute top-11 bg-gray-500 z-50 w-[100%] duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
                <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/meals'>Meals</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/orders'>Orders</NavLink>
            </ul>
            
        </div>
    );
};

export default Navigation;