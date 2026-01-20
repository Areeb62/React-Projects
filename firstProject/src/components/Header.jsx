import React from 'react'
import { Search, ShoppingCart, User } from 'lucide-react'
import zoro from '../assets/images/zoro.jpg'
import { Link, NavLink } from 'react-router'

function Header() {
    return (
        <header className='bg-white w-full py-3.75 sticky top-0 z-50 border-b border-b-gray-200'>
            <div className='flex max-w-7xl px-8 mx-auto items-center'>
                <div className='flex items-center flex-1'>
                    <Link className='flex items-center gap-2' to="/">
                        <img className='w-8 h-8 rounded-2xl bg-transparent' src={zoro} alt="" fetchPriority='high' loading='lazy' />
                        <p>First Project</p>
                    </Link>
                </div>
                <div>
                    <ul className='flex gap-8 text-sm font-medium text-gray-700'>
                        <li className='cursor-pointer hover:text-blue-600'>
                            <NavLink className={({ isActive }) => isActive ? 'text-blue-600' : ''} to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className='cursor-pointer hover:text-blue-600'>
                            <NavLink className={({ isActive }) => isActive ? 'text-blue-600' : ''} to="/shop">
                                Shop
                            </NavLink>
                        </li>
                        <li className='cursor-pointer hover:text-blue-600'>
                            <NavLink className={({ isActive }) => isActive ? 'text-blue-600' : ''} to="/about">About</NavLink>

                        </li>
                        <li className='cursor-pointer hover:text-blue-600'>
                            <NavLink className={({ isActive }) => isActive ? 'text-blue-600' : ''} to="/contact">Contact</NavLink>

                        </li>
                    </ul>
                </div>
                <div className='flex-1'>
                    <ul className='flex items-center justify-end gap-4 text-gray-700'>
                        <li>
                            <button className='p-2 cursor-pointer hover:text-blue-600'>
                                <Search className='w-5 h-5' />
                            </button>
                        </li>
                        <li>
                            <button className='p-2 cursor-pointer hover:text-blue-600'>
                                <User className='w-5 h-5' />
                            </button>
                        </li>
                        <li>
                            <button className='p-2 cursor-pointer hover:text-blue-600'>
                                <ShoppingCart className='w-5 h-5' />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header