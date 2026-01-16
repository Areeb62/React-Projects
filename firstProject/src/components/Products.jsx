import { ShoppingCart, Star, StarIcon, StarOffIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json()
            setProducts(data.products)
            console.log(data)
        }
        fetchProducts()
    }, [])

    return (
        <section className='bg-[#F9FAFB] py-16'>
            <div className='text-center mb-12'>
                <h2 className='text-4xl font-bold mb-4'>Featured Products</h2>
                <p className='text-gray-600 text-lg'>Discover our handpicked selection of the latest and greatest tech products</p>
            </div>
            <ul className='max-w-7xl px-8 mx-auto grid grid-cols-3 gap-8'>
                {products.slice(0, 6).map(product => (
                    <li className='bg-white rounded-2xl shadow-md p-4 group hover:shadow-xl transition-all duration-300 overflow-hidden' key={product.id}>
                        <div className='relative overflow-hidden'>
                            <a href="">
                                <img
                                    src={product.images[0]}
                                    className= {product.images.length > 1 ? "opacity-100 group-hover:opacity-0" : "transition-all duration-300 group-hover:scale-110" }
                                    alt=""
                                />
                                {product.images.length > 1 && (
                                    <img
                                        src={product.images[1]}
                                        className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                                        alt=""
                                    />
                                )}
                            </a>
                            <p className='absolute capitalize top-0 right-0 bg-blue-600 p-2 rounded-3xl text-white text-sm'>{product.category}</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-lg font-semibold'>{product.title}</h3>
                            <p className='line-clamp-2'>{product.description}</p>
                            <p className='flex items-center gap-1'>
                                <Star className='w-4 h-4 fill-yellow-400 text-yellow-400' />
                                <span className='text-sm'>{product.rating}</span>
                                <span className='text-sm text-gray-600'>({product.reviews.length} reviews)</span>
                            </p>
                            <div className='flex justify-between'>
                                <p className='text-xl font-semibold'>${product.price}</p>
                                <a href='' className='inline-flex bg-blue-600 hover:bg-blue-700 p-2 rounded-xl text-white gap-2'><ShoppingCart /> Add</a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Products