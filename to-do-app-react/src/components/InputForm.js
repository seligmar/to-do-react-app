import React from 'react'

const InputForm = props => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        props.addTask(e.target[0].value)
      }}
    >
      <input placeholder='New Task' type='text' />
      <button>Add Task</button>
    </form>
  )
}

export default InputForm
