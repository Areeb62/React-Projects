import React from 'react'

function MainProduct() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function fecthProducts() {
            const data = await fetch(`https://dummyjson.com/products/${id}`)
            const res = await data.json()
            setProducts(res.products)
            console.log(res);

        }
        fecthProducts()
    }, [])
    return (
        <section>
            <div className='max-w-7xl mx-auto px-8'>
                <div>Bredcrumbs</div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    )
}

export default MainProduct