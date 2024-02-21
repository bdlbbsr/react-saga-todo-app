import React from 'react'
// import PropTypes from 'prop-types'

const TodoItem = ({ todo, deleteTodo }) => {
	return (
		<div className='todo-item'
		>
			<p>{todo.title}</p>
			<button onClick={() => deleteTodo(todo.id)} className='deleteBtn'>X</button>
		</div>
	)
}

// TodoItem.propTypes = {
// 	todo: PropTypes.object.isRequired,
// 	deleteTodo: PropTypes.func.isRequired
// }

export default TodoItem