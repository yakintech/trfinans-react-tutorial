import React, { useState } from 'react'

function SwitchStatusSample() {

  const [status, setstatus] = useState(true);

  return (<>
    
    {
        status == true ? <h1>User Online</h1> : <h1>User Offline</h1>
    }
    <button onClick={() => setstatus(!status)}>Change Status</button>
  </>
  )
}

export default SwitchStatusSample