/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function App() {
  const [count,setCount] = useState(0);

  useEffect(() => {
    document.title =` Count: ${count}`

  },[count]);

    const handleClick = () => {
      setCount(count + 1);
    }

    // console.log(count);

  return (
    <div>
      <button onClick={handleClick}>Increment Change</button>
    </div>
  )
}

export default App