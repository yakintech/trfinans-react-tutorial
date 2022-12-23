import { Button, Grid, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AddProduct() {

    const [name, setname] = useState('');
    const [unitPrice, setprice] = useState(0);
    const [unitsInStock, setstock] = useState(0);

    const [categoryId, setcategoryId] = useState(2);

    const [categories, setcategories] = useState([]);

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/categories')
            .then(res => {
                setcategories(res.data);
            })

    }, [])


    const addProduct = () => {
        let newProduct = {
            name: name,
            unitPrice: unitPrice,
            unitsInStock: unitsInStock,
            categoryId: categoryId
        }



        axios.post('https://northwind.vercel.app/api/products', newProduct)
            .then(res => {
                alert('SUCCESS')
            })
    }


    return (<>
        <h1>Add Product </h1>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categoryId}
                    fullWidth
                    onChange={(e) => setcategoryId(e.target.value)}
                >
                    {
                        categories && categories.map(item => {
                            return <MenuItem value={item.id}>{item.name}</MenuItem>
                        })
                    }
                    
                </Select>
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" onChange={(e) => setname(e.target.value)} />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth id="outlined-basic" label="Price" variant="outlined" onChange={(e) => setprice(e.target.value)} />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth id="outlined-basic" label="Stock" variant="outlined" onChange={(e) => setstock(e.target.value)} />
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" onClick={() => addProduct()}>Add</Button>
            </Grid>
        </Grid>





    </>
    )
}

export default AddProduct