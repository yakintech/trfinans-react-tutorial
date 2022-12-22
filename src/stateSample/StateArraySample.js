import React, { useState } from 'react'
import { cityList } from '../data/cityList'

function StateArraySample() {

    //string, object, array, number
    const [cities, setcities] = useState(cityList);

    const clearAll = () => {
        setcities([])
    }

    const removeFirst = () => {
        cities.shift();
        setcities([...cities]);
    }

    return (<>
        <h1>Cities Length: {cities.length}</h1>
        <button onClick={() => clearAll()}>Clear All</button>
        <button onClick={() => removeFirst()}>Remove First Elements</button>

        <ul>
            {
                cities.map((item) => <li>{item}</li>)
            }
        </ul>
    </>
    )
}

export default StateArraySample


