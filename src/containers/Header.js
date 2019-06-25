import { connect } from 'react-redux'
import Header from '../components/Header'
import { addTodo } from '../actions'

export default connect(null, { addTodo })(Header)

//here we are importing header from components and connecting addtodo function
