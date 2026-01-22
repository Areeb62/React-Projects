import React from 'react'
import slide1 from "../assets/images/Slide1.jpg";
import { Link } from 'react-router'

function Slideshow() {
    return (
        <section className="bg-linear-to-r from-blue-600 to-purple-600 overflow-hidden text-white">
            <div className=' py-32 px-8 flex max-w-7xl mx-auto items-center gap-2'>
                <div className='flex-1 text-xl'>
                    <h1 className='text-6xl font-bold mb-6'>Discover the Latest in Tech</h1>
                    <p className='mb-8 text-[20px]'>Explore our curated collection of premium electronics and accessories. Quality products, unbeatable prices.</p>
                    <div className='flex gap-4 items-center text-base'>
                        <Link to='/shop' className='inline-flex items-center gap-2 py-3 cursor-pointer px-8 font-medium hover:bg-gray-100 transition-colors rounded-xl bg-white text-blue-600'>Shop Now <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-5 h-5" data-fg-eh6d13="1.18:1.3238:/src/app/components/Hero.tsx:29:19:1319:34:e:ArrowRight::::::B1Xc"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></Link>
                        <button type='button' className='font-medium hover:bg-white hover:text-blue-600 transition-colors py-3 cursor-pointer px-8 rounded-xl border-2 border-white'>Learn More</button>
                    </div>
                    <div className='mt-12 '>
                        <ul className='flex gap-12'>
                            <li className='basis-44'>
                                <p className='text-3xl font-bold'>1000+</p>
                                <p className='text-sm'>Products</p>
                            </li>
                            <li className='basis-44'>
                                <p className='text-3xl font-bold'>50k+</p>
                                <p className='text-sm'>Customers</p>
                            </li>
                            <li className='basis-44'>
                                <p className='text-3xl font-bold'>4.9</p>
                                <p className='text-sm'>Rating</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex-1'>
                    <a href="">
                        <img className='w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300' src={slide1} alt="" fetchpriority='high' loading='eager' />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Slideshow