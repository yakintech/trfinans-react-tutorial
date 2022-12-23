import React from 'react'

function ProductTable({ products, deleteProduct }) {
    return (
        <>
        <h1>Length: {products.length}</h1>
         <table className='w3-table-all w3-hoverable'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Units In Stock</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.unitsInStock}</td>
                            <td><button onClick={() => deleteProduct(item.id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        </>
       
    )
}

export default ProductTable