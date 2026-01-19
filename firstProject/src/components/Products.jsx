import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';

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
            <Swiper className='max-w-7xl px-8 mx-auto'
                slidesPerView={3}
                slidesPerGroup={3}
                grid={{
                    rows: 2,
                    fill: "row"
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
            >
                {products.slice(0,12).map(product => (
                    <SwiperSlide className='bg-white rounded-2xl shadow-md p-4 group hover:shadow-xl transition-all duration-300 overflow-hidden' key={product.id}>

                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Products