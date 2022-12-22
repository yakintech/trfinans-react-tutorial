import React from 'react'

function ProductDetail({name, price, points}) {

  return (<>
    <h1>Name: {name}</h1>
    <h1>Price: {price}</h1>
    
    <ul>
        {
            points.map(item => <li>{item}</li>)
        }
    </ul>

  </>
  )
}

export default ProductDetail