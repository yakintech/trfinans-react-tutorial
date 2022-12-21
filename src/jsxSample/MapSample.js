import React from 'react'
import { countryList } from './countries'

function MapSample() {


    return (<>
    <ul>
        {
            countryList.map((item, index) => <li key={index}>{item}</li>)
        }
    </ul>
    </>
    )
}

export default MapSample