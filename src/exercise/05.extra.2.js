// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// accept a size prop to encapsulate styling

// THE ORDER OF EVERYTHING IS IMPORTANT. 
const Box = ({style, size, ...otherProps}) => {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div 
      size={`box ${sizeClassName}`} 
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

// Consfused AF? 
// const Box sets 'size' as a prop.
// Then, it sets sizeClassName as a ternary that checks if 
// size is true or false. Then, it sets the className 
// to box--size (small, medium, large) if it is true,
// and then in the JSX, it sets the className to box--size
// using the sizeClassName variable as 'size' is a prop.

const extraBox = (
  <Box size='small' style={{backgroundColor: 'green'}}>
    smol GREEN bawks
  </Box>
)

function App() {
  return (
    <>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
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
