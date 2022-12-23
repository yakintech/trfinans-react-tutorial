import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

function MaterialDataGrid() {

    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true)

    
    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setTimeout(() => {
                    setproducts(res.data);
                    setloading(false)
                }, 3000);

            })

    }, []);

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            flex: 1
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1
        },
        {
            field: 'unitPrice',
            headerName: 'Unit Price',
            flex: 1
        },
        {
            field: 'unitsInStock',
            headerName: 'Stock',
            flex: 1
        }
    ]

    //rows = dataSource
    return (<>
        <div style={{ height: 400, width: '100%' }}>

            <DataGrid
                rows={products}
                columns={columns}
                pageSize={10}
                loading={loading}
                components={{ Toolbar: GridToolbar }}
            />
        </div>

    </>
    )
}

export default MaterialDataGrid