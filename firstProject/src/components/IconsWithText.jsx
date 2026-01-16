import { CreditCard, Headphones, Shield, Truck } from 'lucide-react'
import React from 'react'

function IconsWithText() {
    return (
        <section className='py-12 border-b border-gray-200'>
            <div className='max-w-7xl px-8 mx-auto'>
                <ul className='flex'>
                    <li className='basis-1/4 flex gap-4 items-center'>
                        <div className='bg-blue-100 p-3 rounded-lg'>
                            <Truck className='w-6 h-6 text-blue-600' />
                        </div>
                        <div>
                            <p className='text-lg font-semibold mb-1'>Free Shipping</p>
                            <p className='text-sm text-gray-600'>On orders over $50</p>
                        </div>
                    </li>
                    <li className='basis-1/4 flex gap-4 items-center'>
                        <div className='bg-blue-100 p-3 rounded-lg '>
                            <Shield className='w-6 h-6 text-blue-600' />
                        </div>
                        <div>
                            <p className='text-lg font-semibold mb-1'>Secure Payment</p>
                            <p className='text-sm text-gray-600'>100% secure transactions</p>
                        </div>
                    </li>
                    <li className='basis-1/4 flex gap-4 items-center'>
                        <div className='bg-blue-100 p-3 rounded-lg' >
                            <Headphones className='w-6 h-6 text-blue-600' />
                        </div>
                        <div>
                            <p className='text-lg font-semibold mb-1'>24/7 Support</p>
                            <p className='text-sm text-gray-600'>Dedicated customer service</p>
                        </div>
                    </li>
                    <li className='basis-1/4 flex gap-4 items-center'>
                        <div className='bg-blue-100 p-3 rounded-lg'>
                            <CreditCard className='w-6 h-6 text-blue-600' />
                        </div>
                        <div>
                            <p className='text-lg font-semibold mb-1'>Easy Returns</p>
                            <p className='text-sm text-gray-600'>30-day return policy</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default IconsWithText