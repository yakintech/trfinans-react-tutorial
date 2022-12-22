import React, { useState } from 'react'

function StateInput() {

    const [productName, setproductName] = useState('');

    const getData = () => {
        // let value = document.getElementById('name').value;
        // alert(value)

        alert(productName);
    }

    console.log('Component rendered! ');

    return (<>
        <input type='text' id='name' onChange={(e) => setproductName(e.target.value)} />
        <button onClick={() => getData()}>Get Input Value</button>
    </>)
}

export default StateInput