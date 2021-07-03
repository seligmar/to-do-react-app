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

  render () {
    return (
      <div className='App'>
        <Header />
        <InputForm addTask={this.addTask} clearForm={this.clearForm} />
        <List tasks={this.state.tasks} />
      </div>
    )
  }
}

export default App
