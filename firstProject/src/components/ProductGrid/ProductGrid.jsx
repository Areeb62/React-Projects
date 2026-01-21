import React, { useState, useEffect } from 'react'
import ProductCard from '../ProductCard'
import { SlidersHorizontal } from 'lucide-react'

function ProductGrid() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [activeCat, setActiveCat] = useState(null)
    const [sortby, setSortby] = useState('')
    const [order, setOrder] = useState('')

    useEffect(() => {
        async function fetchSortedProducts() {
            let url = 'https://dummyjson.com/products'

            if (sortby && order) {
                url += `?sortBy=${sortby}&order=${order}`
            }

            const res = await fetch(url)
            const data = await res.json()
            setProducts(data.products)
        }

        fetchSortedProducts()
    }, [sortby, order])


    useEffect(() => {
        async function fetchCategories() {
            const data = await fetch('https://dummyjson.com/products/categories')
            const cat = await data.json()
            setCategories(cat)
            console.log(cat);
        }
        fetchCategories()
    }, [])

    useEffect(() => {
        async function fecthProducts() {
            const data = await fetch('https://dummyjson.com/products?limit=200')
            const res = await data.json()
            setProducts(res.products)
            console.log(res);

        }
        fecthProducts()
    }, [])

    return (
        <section>
            <div className='border-b border-b-gray-200'>
                <div className="max-w-7xl mx-auto px-8 py-12">
                    <h1 className='text-4xl font-bold mb-4'>Shop All Products</h1>
                    <p>Browse our complete collection of premium tech products</p>
                </div>
            </div>
            <div className='bg-gray-50'>
                <div className=' max-w-7xl mx-auto p-8 flex gap-8 '>
                    <aside className='sticky top-24 z-10 h-fit basis-1/4 flex flex-col bg-white p-6'>
                        <h2 className='flex items-center gap-2 mb-6 font-semibold text-xl'><SlidersHorizontal /> Filters</h2>
                        <div className='mb-6'>
                            <h3 className='text-sm font-medium text-gray-900 mb-3 flex justify-between'>
                                Categories
                                <button
                                    className='underline hover:text-blue-600 cursor-pointer'
                                >
                                    Reset
                                </button></h3>
                            <div className='filter-category-btn flex flex-col space-y-2 text-sm overflow-y-auto h-82'>
                                {categories?.map(category => (
                                    <button
                                        className={`w-full text-left rounded-lg px-3 py-2 capitalize cursor-pointer transition-colors
                                            ${activeCat === category ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
                                        key={category}
                                        onClick={() => setActiveCat(category)}
                                    >
                                        {category.name}
                                    </button>
                                ))}

                            </div>
                        </div>
                        <div>
                            <h3 className='text-sm font-medium text-gray-900 mb-3'>Sort By</h3>
                            <select className='w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600' name="" id=""
                                onChange={(e) => {
                                    const value = e.target.value

                                    if (value === 'price-asc') {
                                        setSortby('price')
                                        setOrder('asc')
                                    }
                                    else if (value === 'price-desc') {
                                        setSortby('price')
                                        setOrder('desc')
                                    }
                                    else if (value === 'title-asc') {
                                        setSortby('title')
                                        setOrder('asc')
                                    }
                                    else if (value === 'title-desc') {
                                        setSortby('title')
                                        setOrder('desc')
                                    }
                                    else {
                                        setSortby('')
                                        setOrder('')
                                    }

                                }}
                            >
                                <option value="default">Default</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="title-asc">Alphabetically: A-Z</option>
                                <option value="title-desc">Alphabetically: Z-A</option>
                            </select>
                        </div>
                    </aside>
                    <ul className='flex-1 grid grid-cols-3 gap-6'>
                        {products?.map(product => (
                            <li className='bg-white rounded-2xl shadow-md p-4 group hover:shadow-xl transition-all duration-300 overflow-hidden' key={product.id}>
                                <ProductCard product={product} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProductGrid