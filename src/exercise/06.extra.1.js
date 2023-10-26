// Basic Forms
// extra1 Using Refs

// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef} from 'react'

function UsernameForm({onSubmitUsername}) {

  const usernameInputRef = useRef(null)


// 🐨 add a submit event handler here (`handleSubmit`).
//   function handleSubmit(event) {
//     event.preventDefault()
//     console.dir(event.target)
//     onSubmitUsername(event.target.elements.usernameInput.value)
//   }

// this function using 'useRef' is the same as the above function
    function handleSubmit(event) {
      event.preventDefault()
      console.dir(event.target)
      onSubmitUsername(usernameInputRef.current.value)
    }
    

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input type="text" id='usernameInput' ref={usernameInputRef}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App