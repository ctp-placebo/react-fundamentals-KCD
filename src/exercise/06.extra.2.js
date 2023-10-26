// // Basic Forms
// // http://localhost:3000/isolated/exercise/06.js

// import * as React from 'react'
// Basic Forms

// extra2 Validate input

// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'


function UsernameForm({onSubmitUsername}) {

  const [error, setError] = React.useState('')

// this function using 'useRef' is the same as the above function
  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(event.target.elements.usernameInput.value)
  }

  function handleChange(event) {
    const {value} = event.target
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lower case') 
    }
    

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input type="text" id='usernameInput' onChange={handleChange}/>
      </div>
      {/* this div shows up aslo without the error message
        so this is not the REAL way to do this, unless you "need" an empty div placeholder
        ie, it's not the best way to do this.
      */}
      <div role="alert" style={{color: 'red'}}>
        {error}
      </div>
      {/* disable the button with this ?wut? code because just "disabled" isn't r34k7 enough
      even though that would be a boolean in any other web-dev framework */}
      <button type="submit" disabled={Boolean(error)}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return (
    <div style={{minWidth: 400}}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  )
}

export default App