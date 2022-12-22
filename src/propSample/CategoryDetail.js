import React from 'react'

function CategoryDetail({hello}) {

  return (<>
    <h1>Category Detail Component</h1>
    <button onClick={() => hello()}>Click</button>
  </>
  )
}

export default CategoryDetail