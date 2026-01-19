import React from 'react'
import zoro from '../assets/images/zoro.jpg'

function Footer() {
    return (
        <footer className='bg-gray-900 text-gray-400 w-full py-12'>
            <div className='max-w-7xl px-8 mx-auto'>
                <div className='flex gap-8'>
                    <div className='basis-1/4'>
                        <a className='flex items-center gap-2 mb-4'>
                            <img className='w-8 h-8 rounded-2xl bg-transparent' src={zoro} alt="" fetchPriority='low' loading='lazy' />
                            <p className='text-white font-semibold'>First Project</p>
                        </a>
                        <p className='text-sm'>Your trusted destination for the latest tech products and accessories.</p>
                    </div>
                    <ul className='basis-1/4 text-sm space-y-2'>
                        <li className='text-white font-semibold text-base mb-4'>Shop</li>
                        <li>Audio</li>
                        <li>Wearables</li>
                        <li>Computers</li>
                        <li>Cameras</li>
                    </ul>
                    <ul className='basis-1/4 text-sm space-y-2'>
                        <li className='text-white font-semibold text-base mb-4'>Company</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Careers</li>
                        <li>Blog</li>
                    </ul>
                    <ul className='basis-1/4 text-sm space-y-2'>
                        <li className='text-white font-semibold text-base mb-4'>Support</li>
                        <li>FAQ</li>
                        <li>Shipping</li>
                        <li>Returns</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className='border-t border-gray-800 mt-8 pt-8 text-center text-sm'>
                    <p>© 2026 TechStore. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer