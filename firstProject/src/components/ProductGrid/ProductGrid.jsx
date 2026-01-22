import React, { useState, useEffect } from 'react'
import ProductCard from '../ProductCard'
import { SlidersHorizontal } from 'lucide-react'

function ProductGrid() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [activeCat, setActiveCat] = useState(null)
    const [sortby, setSortby] = useState('')
    const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        async function filterProducts() {
            const url = activeCat ? `https://dummyjson.com/products/category/${encodeURIComponent(activeCat)}` : "https://dummyjson.com/products?limit=200"
            const data = await fetch(url)
            const res = await data.json()
            setProducts(res.products)
        }
        filterProducts()
    }, [activeCat])

    const lookUp = {
        "price-asc": { sortby: 'price', order: 'asc' },
        "price-desc": { sortby: 'price', order: 'desc' },
        "title-asc": { sortby: 'title', order: 'asc' },
        "title-desc": { sortby: 'title', order: 'desc' },
        "rating-asc": { sortby: 'rating', order: 'asc' },
        "rating-desc": { sortby: 'rating', order: 'desc' },
    }

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
                    <aside className='sticky top-24 z-10 h-fit basis-1/4 flex flex-col bg-white p-6 rounded-lg shadow-md'>
                        <h2 className='flex items-center gap-2 mb-6 font-semibold text-xl'><SlidersHorizontal /> Filters</h2>
                        <div className='mb-6'>
                            <h3 className='text-sm font-medium text-gray-900 mb-3 flex justify-between'>
                                Categories
                                <button
                                    className='underline hover:text-blue-600 cursor-pointer'
                                    onClick={() => setActiveCat('')}
                                >
                                    Reset
                                </button>
                            </h3>
                            <div className='filter-category-btn flex flex-col space-y-2 text-sm overflow-y-auto h-82'>
                                {categories?.map(category => (
                                    <button
                                        className={`w-full text-left rounded-lg px-3 py-2 capitalize cursor-pointer transition-colors
                                            ${activeCat === category.slug ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}
                                        key={category.slug}
                                        onClick={() => setActiveCat(category.slug)}
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
                                    const value = lookUp[e.target.value]

                                    if (value) {
                                        setSortby(value.sortby)
                                        setOrder(value.order)
                                    }
                                    else {
                                        setSortby('')
                                        setOrder('')
                                    }

                                }}
                            >
                                <option value="default">Default</option>
                                <option value="rating-asc">Rating: Low to High</option>
                                <option value="rating-desc">Rating: High to Low</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="title-asc">Alphabetically: A-Z</option>
                                <option value="title-desc">Alphabetically: Z-A</option>
                            </select>
                        </div>
                    </aside>
                    <div className='flex-1'>
                        <p className='text-sm text-gray-600 mb-6'>Showing {products.length} products</p>
                        <ul className='grid grid-cols-3 gap-6'>
                            {products?.map(product => (
                                <li className='bg-white rounded-2xl shadow-md p-4 group hover:shadow-xl transition-all duration-300 overflow-hidden' key={product.id}>
                                    <ProductCard product={product} id={product.id} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductGrid