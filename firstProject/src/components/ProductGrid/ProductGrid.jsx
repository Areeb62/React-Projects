import React, { useState, useEffect } from 'react'
import ProductCard from '../ProductCard'

function ProductGrid() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fecthProducts() {
            const data = await fetch('https://dummyjson.com/products')
            const res = await data.json()
            setProducts(res.products)
            console.log(res);

        }
        fecthProducts()
    }, [])

    return (
        <section>
            <div className='max-w-7xl mx-auto px-8'>
                <div>
                    <h2>Shop All Products</h2>
                    <p>Browse our complete collection of premium tech products</p>
                </div>
                <div className='flex gap-8'>
                    <div className='sticky top-24 z-10 h-fit basis-1/4'>
                        <h3>Filters</h3>
                        <ul>
                            <li>Categories</li>
                            <li><button>All</button></li>
                            <li><button>Beauty</button></li>
                            <li><button>Fragrances</button></li>
                            <li><button>Furniture</button></li>
                            <li><button>Groceries</button></li>
                        </ul>
                    </div>
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