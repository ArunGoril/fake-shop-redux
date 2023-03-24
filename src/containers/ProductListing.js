import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    // console.log(products);

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("Err", err)
        });
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    // console.log("Products: ", products)
  return (
    <div className='container'>
        <div className='row'>
            {products.map(product => {
                return (
                    <div key={product.id} className="col-3">
                        <ProductComponent product={product} />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ProductListing