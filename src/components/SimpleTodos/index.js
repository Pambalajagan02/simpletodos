import {Component} from 'react'

import './index.css'

import Todoperform from '../TodoItem/index'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]
// Write your code here

class SimpleTodos extends Component {
  state = {todolist: initialTodosList}

  deleteToDo = uniqueid => {
    const {todolist} = this.state
    const deleteresults = todolist.filter(each => each.id !== uniqueid)
    this.setState({todolist: deleteresults})
  }

  render() {
    const {todolist} = this.state

    return (
      <div className="back-container">
        <div className="inner-Container">
          <h1 className="heading-style">Simple Todos</h1>
          <ul>
            {todolist.map(each => (
              <Todoperform
                todoitem={each}
                key={each.id}
                deleteToDo={this.deleteToDo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
