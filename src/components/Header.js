import React from 'react'
import Button from './Button'

const Header = ({name, addProp, buttonProp}) => {
  return (
    <header className='header'>
      <h1>Hello this is {name}</h1>
      <Button name={buttonProp ? "Close" : "Add"} color={buttonProp ? "red" : "green"} onClick={addProp}/>
    </header>
  )
}

Header.defaultProps = {
  name : 'Suhail',
}

export default Header
