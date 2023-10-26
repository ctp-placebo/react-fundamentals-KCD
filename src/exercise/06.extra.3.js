// // Basic Forms

// import * as React from 'react'
// Basic Forms

// extra3 : Control the input value

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {


  // EXPLANATION: 
  // the 'value' prop is set to the state variable 'username'
  // the 'onChange' prop is set to the function 'handleChange'
  // the 'handleChange' function sets the state variable 'username' to the value of the input
  // the 'handleSubmit' function uses the state variable 'username' to submit the form

  const [username, setUsername] = React.useState('')

// this function using 'useRef' is the same as the above function
  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  function handleChange(event) {
    const {value} = event.target
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        {/* Here we added value={username} */}
        <input type="text" id='usernameInput' value={username} onChange={handleChange}/>
      </div>
      <button type="submit">Submit</button>
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