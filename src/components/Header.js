import React from 'react'
import TodoTextInput from './TodoTextInput'
import PropTypes from 'prop-types'

const Header = ({ addTodo }) => (
  <header className="header">
  <h1>todos</h1>
  <TodoTextInput
  newTodo
    onSave={(text)=> {
      if(text.length !== 0){
        addTodo(text)
      }
    }}
    placeholder="What needs to be done?"
  />
  </header>
)

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header

//we are taking addTodo as an argument. the adTodo is the function we pass in from 
