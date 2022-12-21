import React from 'react'
import { products } from '../data/products'

function MapSample2() {



    return (<>
        <table className='w3-table-all'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Company Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((item, key) => {
                        return <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice.toFixed(2)}</td>
                            <td>{item.supplier?.companyName}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default MapSample2