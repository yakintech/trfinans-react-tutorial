import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddProduct from './AddProduct';
import ProductTable from './ProductTable';


function ProductPage() {


    const [products, setproducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])


    const getProducts = () => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data);
            })
    }

    const deleteProduct = (id) => {

        axios.delete(`https://northwind.vercel.app/api/products/` + id)
            .then(res => {
                getProducts();
            })

    }


    const add = (newProduct) => {

        axios.post('https://northwind.vercel.app/api/products', newProduct)
            .then(res => {
                getProducts();
            })

    }



    return (<>
        <AddProduct add={add}/>
        <ProductTable products={products} deleteProduct={deleteProduct}/>
    </>
    )
}

export default ProductPage