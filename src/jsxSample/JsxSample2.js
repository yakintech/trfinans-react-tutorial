import React from 'react'

function JsxSample2() {

    let name = 'Çağatay';

    let content = <div><p>lorem ipsum</p></div>

    return (<>
        <div>{name}</div>
        {content}
    </>

    )
}

export default JsxSample2