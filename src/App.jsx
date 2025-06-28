import React, { useState } from 'react'

const App = () => {
  useState(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  })
  return (
    <div>App</div>
  )
}

export default App