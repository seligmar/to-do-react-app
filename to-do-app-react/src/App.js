import React from 'react'
import './App.css'
import Header from './components/Header'
import InputForm from './components/InputForm'
import List from './components/List'

class App extends React.Component {
  state = {
    tasks: []
  }

  addTask = newTask => {
    if (newTask) {
      var task = {}
      task.taskName = newTask
      task.id = this.state.tasks.length + 1
      task.completed = false
      this.state.tasks.length > 0
        ? this.setState({ tasks: [...this.state.tasks, task] })
        : this.setState({ tasks: [task] })
    }
  }

  clearForm = formInfo => {
    formInfo.reset()
  }

  completeTask = (e, id) => {
    var thisTask = this.state.tasks.filter(task => task.id === id)
    var taskToUpdate = this.state.tasks.findIndex(task => task.id === id)
    thisTask[0].completed = !thisTask[0].completed
    var newTasks = this.state.tasks
    newTasks.splice(taskToUpdate, 1, thisTask[0])
    this.setState({ tasks: newTasks })
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <InputForm addTask={this.addTask} clearForm={this.clearForm} />
        <List tasks={this.state.tasks} completeTask={this.completeTask} />
      </div>
    )
  }
}

export default App
