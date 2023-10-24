// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// Make the boX a component Box. 

// tHE ORDER OF EVERYTHING IS IMPORTANT. 
const Box = ({style, className='', ...otherProps}) => {
  return (
    <div 
      className={`box ${className}`} 
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

const extraBox = (
  <Box className='box--small' style={{backgroundColor: 'green'}}>
    smol GREEN bawks
  </Box>
)

function App() {
  return (
    <>
      <Box className='box--small' style={{backgroundColor: 'lightblue'}}>
        smol lite blu bawks
      </Box>
      <Box className='box--medium' style={{backgroundColor: 'pink'}}>
        medio pink bawks
      </Box>
      <Box className='box--large' style={{backgroundColor: 'orange'}}>
        bigsy oransj bawks
      </Box>
      {extraBox}
    </>
  )
}

export default App
