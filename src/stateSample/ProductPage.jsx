import React, { useState } from 'react'
import { products } from '../data/products'

function ProductPage() {

    const [productList, setproductList] = useState(products);
    const [originalProducts, setoriginalProducts] = useState(products);
    const [isSortedByPrice, setisSortedByPrice] = useState(false);

    //inputs
    const [name, setname] = useState('');
    const [unitPrice, setunitPrice] = useState(0);
    const [unitsInStock, setunitsInStock] = useState(0);



    const deleteProduct = (id) => {

        let filteredProducts = productList.filter(q => q.id != id);
        setproductList([...filteredProducts]);
    }

    const sortByPrice = () => {
        let sortedProducts = [];
        if (isSortedByPrice) {
            sortedProducts = productList.sort((a, b) => b.unitPrice - a.unitPrice);
            setisSortedByPrice(!isSortedByPrice);
        }
        else {
            sortedProducts = productList.sort((a, b) => a.unitPrice - b.unitPrice);
            setisSortedByPrice(!isSortedByPrice);
        }
        setproductList([...sortedProducts]);
    }

    const search = (value) => {
        let filteredProducts = originalProducts.filter(q => q.name.toLowerCase().includes(value.toLowerCase()));

        setproductList([...filteredProducts]);
    }

    const add = () => {
        let newProduct = {
            id: products[products.length - 1].id + 1,
            name: name,
            unitPrice: Number(unitPrice),
            unitsInStock: Number(unitsInStock)
        }
        
        setproductList([...productList, newProduct]);
        setoriginalProducts([...originalProducts, newProduct]);
    }

    return (<>
        <div>
            <div>
                <label>Name</label>
                <input type='text' onChange={(e) => setname(e.target.value)} />
            </div>
            <div>
                <label>Unit Price</label>
                <input type='text' onChange={(e) => setunitPrice(e.target.value)} />
            </div>
            <div>
                <label>Units In Stock</label>
                <input type='text' onChange={(e) => setunitsInStock(e.target.value)} />
            </div>
            <div>
                <button onClick={() => add()}>Add</button>
            </div>
        </div>
        <div>
            <h1>Length: {productList.length}</h1>
        </div>
        <div style={{ margin: 10 }}>
            <label>Search by name: </label>
            <input type="text" style={{ borderStyle: 'solid', width: '50%' }} className="w3-input" onChange={(e) => search(e.target.value)} />
        </div>
        <table className="w3-table-all w3-hoverable">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th style={{ cursor: 'pointer' }} onClick={() => sortByPrice()}>Unit Price</th>
                    <th>Units In Stock</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    productList && productList.map((item) => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice.toFixed(2)}</td>
                            <td>{item.unitsInStock}</td>
                            <td><button className='w3-button w3-red' onClick={() => deleteProduct(item.id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </>)
}

export default ProductPage