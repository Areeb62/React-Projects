import React from 'react'
import { ShoppingCart, Star, StarIcon, StarOffIcon } from 'lucide-react'

function ProductCard({product}) {
    return (
        <>
            <div className='relative overflow-hidden'>
                <a href="">
                    <img
                        src={product.images[0]}
                        className={product.images.length > 1 ? "opacity-100 group-hover:opacity-0" : "transition-all duration-300 group-hover:scale-110"}
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
        </>
    )
}

export default ProductCard