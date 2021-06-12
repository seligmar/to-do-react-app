import React from 'react'
import './App.css'
import Header from './components/Header'
import InputForm from './components/InputForm'
import List from './components/List'

class App extends React.Component {
  state = {
    newTask: '',
    tasks: []
  }

  addTask = e => {
    e.preventDefault()
    console.log(e.target)
    // this.state.newTask
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <InputForm addTask={this.addTask} />
        <List tasks={this.state.tasks} />
      </div>
    )
  }
}

export default App
