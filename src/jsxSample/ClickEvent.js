import React from 'react'

function ClickEvent() {

    const clickMe = () => {
        alert('Hello!')
    }

    const hello = (name, surname) => {
        alert(name + " " + surname);
    }   

    return (<>
        <button onClick={clickMe}>Click Me!</button>
        <button onClick={() => clickMe()}>Click Me!</button>
        <button onClick={() => hello('Çağatay','Yıldız')}>Hello</button>
    </>)
}

export default ClickEvent







// function hello(){
//     return "Hello"
// }

// var merhaba = function(){

// }


// var hello = () => {

// }