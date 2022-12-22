import React from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent({title}) {
  return (<>
        <div>Parent Component</div>
        <ChildComponent title={title}/>
  </>
  )
}

export default ParentComponent