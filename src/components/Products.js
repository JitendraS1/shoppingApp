import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import { add } from './store/cartSlice'
import { fetchProducts } from './store/prosuctSlice'
import { STATUSES } from './store/prosuctSlice'


const Products = () => {

    const dispatch = useDispatch()
    const { data: products, status } = useSelector((state) => state.product)
    // const [products, setProducts] = useState([])

    useEffect(() => {
        dispatch(fetchProducts())
        // const fecthProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products')
        //     const data = await res.json()
        //     console.log(data)
        //     setProducts(data)
        // }
        // fecthProducts()
    }, [dispatch])

    const handleAdd = (product) => {
        dispatch(add(product))
    }
    if (status === STATUSES.LOADING) {
        return <h2>Loading...<Loader /></h2>
    }

    if (status === STATUSES.ERROR) {
        return <h2> 'Ohh'   Something went wrong!    ☹ </h2>;
    }

    return (
        <div className='productsWrapper'>
            {
                products.map(product => (
                    <div className='card' key={product.id}>
                        <img src={product.image} alt="img" />
                        <h4 className='card-titel'>{product.title}</h4>
                        <h5 className='card-price'>{product.price + '₹'}</h5>
                        <button onClick={() => handleAdd(product)} className='btn'>Add To Cart</button>

                    </div>
                ))
            }
        </div>
    )
}

export default Products
