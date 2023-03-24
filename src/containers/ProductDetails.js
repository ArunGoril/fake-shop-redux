import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'


const ProductDetails = () => {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const product = useSelector((state) => state.product)
  const { image, title, price, category, description } = product

  const fetchProductDetails = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => {
      console.log(response)
    })
    dispatch(selectedProduct(response.data))
  }

  useEffect(() => {
    if (productId) {
      fetchProductDetails()
    }
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId])
  // console.log(product)

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (<div className='container'>
            <div className="row">
              <div className='col'>
                <img src={image} className="card-img-top" alt={title} />
              </div>
              <div className="col">
                <h3>{title}</h3>
                <h4 className='bg-success'>$ {price}</h4>
                <h5 className='bg-secondary border'>{category}</h5>
                <p>{description}</p>
                <button className='btn btn-primary'>Add to Cart</button>
              </div>
            </div>
      </div>
      )}
    </div>
  )
}

export default ProductDetails