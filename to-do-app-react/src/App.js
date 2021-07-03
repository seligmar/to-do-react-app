import React from 'react'
import './App.css'
import Header from './components/Header'
import InputForm from './components/InputForm'
// import List from './components/List'

class App extends React.Component {
  state = {
    newTask: '',
    tasks: []
  }

  addTask = e => {
    console.log(e)
    //  e.preventDefault()
    //  console.log(e.target.input.value)
    // this.state.newTask
  }

  // addTask = () => {
  //   this.setState(
  //     ...{
  //       task: '',
  //       completed: false,
  //       id: this.state.tasks.length + 1
  //     }
  //   )
  // }

  render () {
    return (
      <div className='App'>
        <Header />
        <InputForm addTask={this.addTask} />
        {/* <List tasks={this.state.tasks} /> */}
      </div>
    )
  }
}

export default App
