import React from 'react'
import { ShoppingCart, Star } from 'lucide-react'
import { Link } from 'react-router'

function ProductCard({ product, id }) {
    return (
        <>
            <div className='relative overflow-hidden'>
                <Link to={`/product/${id}`}>
                    <img
                        src={product.images[0]}
                        className={product.images.length > 1 ? "opacity-100 group-hover:opacity-0" : "transition-all duration-300 group-hover:scale-110"}
                        alt=""
                        fetchPriority='low' loading='lazy'
                    />
                    {product.images.length > 1 && (
                        <img
                            src={product.images[1]}
                            className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                            alt=""
                            fetchPriority='low' loading='lazy'
                        />
                    )}
                </Link>
                <span className='absolute capitalize top-0 right-0 bg-blue-600 px-3 py-1 rounded-full text-white text-xs'>{product.category}</span>
            </div>
            <div className='flex flex-col gap-4'>
                <h3 className='text-lg font-semibold'>{product.title}</h3>
                <p className='line-clamp-2'>{product.description}</p>
                <p className='flex items-center gap-1'>
                    <Star className='w-4 h-4 fill-yellow-400 text-yellow-400' />
                    <span className='text-sm mr-1'>{product.rating}</span>
                    <span className='text-sm text-gray-600'>({product.reviews.length} reviews)</span>
                </p>
                <div className='flex justify-between'>
                    <p className='text-2xl font-bold'>${product.price}</p>
                    <a href='' className='inline-flex font-semibold items-center bg-blue-600 hover:bg-blue-700 transition-colors py-2 px-4 rounded-xl text-white gap-2'><ShoppingCart className='w-4 h-4' /> Add</a>
                </div>
            </div>
        </>
    )
}

export default ProductCard