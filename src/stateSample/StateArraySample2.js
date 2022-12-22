import React, { useState } from 'react'
import { cityList } from '../data/cityList'


function StateArraySample2() {

    const [cities, setcities] = useState(cityList);

    const removeCity = (cityName) => {

        let newCities = cities.filter(item => item != cityName);
        setcities([...newCities])

    }

    const orderByDesc = () => {
        let newCities = cities.reverse();
        setcities([...newCities])
    }

    const addNewCity = () => {
        let randomNumber = Math.floor(Math.random() * 10000);
        setcities([...cities, randomNumber])
    }


    return (<>
        <button onClick={() => addNewCity()}>Add New Random Number</button>
        <h1>Length: {cities.length}</h1>
        <button onClick={() => orderByDesc()}>Order By Desc</button>
        <ul>
            {
                cities.map(item => <li onClick={() => removeCity(item)} style={{ cursor: 'pointer' }}>{item}</li>)
            }
        </ul>
    </>
    )
}

export default StateArraySample2