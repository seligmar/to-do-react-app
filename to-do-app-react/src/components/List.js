const List = props => {
  return (
    <ul>
      {props.tasks.map(task =>
        task.completed ? (
          <li
            key={task.id}
            className='completed'
            onClick={e => props.completeTask(e, task.id)}
          >
            {task.taskName}
          </li>
        ) : (
          <li key={task.id} onClick={e => props.completeTask(e, task.id)}>
            {task.taskName}
          </li>
        )
      )}
    </ul>
  )
}

export default List
