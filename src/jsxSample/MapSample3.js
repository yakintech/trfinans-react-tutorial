import React from 'react'
import { products } from '../data/products'

function MapSample3() {

    //discontinued true olanların sayısı
    let discontinuedLength = products.filter(x => x.discontinued == true).length;

    //Pahalı ürün sayısı ( Fiyatı 50 den büyükse pahalıdır! )
    let expensiveLength = products.filter(q => q.unitPrice > 50).length;

    //C harfi ile başlayan ürün sayısı
    let startsWithCLength = products.filter(x => x.name.toLowerCase().startsWith('c')).length;

    //Anton kelimesi içeren ürün sayısı
    let includeWordLength = products.
        filter(x => x.name.toLowerCase().includes('anton')).length



    //Fiyatı 50 den büyük olan ürünlerin arka planını kırmızı yap!
    //Stok 0 ise o HÜCREYİ orange yap
    return (<>
        <h1>Products Length: {products.length}</h1>
        <h1>Discontinued Length: {discontinuedLength}</h1>
        <h1>Expensive Length: {expensiveLength}</h1>
        <h1>Starts With C Length: {startsWithCLength}</h1>
        <h1>Include Word Length: {includeWordLength}</h1>


        <table className='w3-table-all'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Company Name</th>
                    <th>Stock</th>
                    <th>Discontinued</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((item, key) => {
                        let color = ''
                        let stockColor = '';
                        if (item.unitPrice > 50)
                            color = 'tomato'

                        if (item.unitsInStock == 0)
                            stockColor = 'orange'

                        return <tr style={{ backgroundColor: color }} key={key}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice.toFixed(2)}</td>
                            <td>{item.supplier?.companyName}</td>
                            <td style={{ backgroundColor: stockColor }}>{item.unitsInStock}</td>
                            <th>{item.discontinued.toString()}</th>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default MapSample3