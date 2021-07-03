const List = props => {
  console.log(props.tasks)
  // const tasks = props.tasks
  return (
    <ul>
      {props.tasks.map(task => (
        <li key={task.id}>{task.taskName}</li>
      ))}
    </ul>
  )
}

export default List
