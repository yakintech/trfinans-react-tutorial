import React from 'react'

// var props = {

// }

function UserDetail(props) {


    return (<>
        <h1>Name: {props.name}</h1>
        <h1>Surname: {props.surname}</h1>
        <h1>EMail: {props.email}</h1>
        <h1>Age: {props.age}</h1>
    </>)
}

export default UserDetail
