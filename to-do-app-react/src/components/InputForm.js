const InputForm = props => {
  return (
    <form onSubmit={e => props.addTask(e)}>
      <input placeholder='New Task' type='text' />
      <button>Add Task</button>
    </form>
  )
}

export default InputForm
