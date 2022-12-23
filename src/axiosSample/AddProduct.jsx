import axios from 'axios';
import React, { useState } from 'react'
import ProductPage from './ProductPage';

function AddProduct({ add }) {

    const [name, setName] = useState('');
    const [unitPrice, setunitPrice] = useState(0);
    const [unitsInStock, setunitsInStock] = useState(0);


    const addNewProduct = () => {
        let newProduct = {
            name: name,
            unitPrice: unitPrice,
            unitsInStock: unitsInStock
        }

        add(newProduct)
    }

    return (<>
        <div>
            <div>
                <label>Name:</label>
                <input type='text' className='w3-input' onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
                <label>Unit Price:</label>
                <input type='text' className='w3-input' onChange={(e) => setunitPrice(e.target.value)} />
            </div>

            <div>
                <label>Stock:</label>
                <input type='text' className='w3-input' onChange={(e) => setunitsInStock(e.target.value)} />
            </div>
            <div>
                <button className='w3-button w3-khaki' onClick={() => addNewProduct()}>Add</button>
            </div>
        </div>

    </>)
}

export default AddProduct