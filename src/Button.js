import React, { useState } from 'react'

import './index.css'
const Button = () => {
  const [counter, setcounter] = useState(0)
  const handlebtnClick = () => setcounter(counter + 1)
  return (
    <>
      <div>Clicked <span>{counter}</span></div>
      <button onClick={handlebtnClick}>Click</button>
    </>
  )
}

export default Button
