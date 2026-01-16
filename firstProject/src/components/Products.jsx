import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

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

                        <ProductCard product={product}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Products