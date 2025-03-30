import { Header } from './Header'
import { Subheader } from './Subheader'
import { ListContainer } from './ListContainer'
import { ListHeader } from './ListHeader'
import { ItemsList } from './ItemsList'
import './App.css'

function App() {
  const todoItems = [
    {
      id: 1,
      title: 'Buy groceries',
      description: 'Purchase milk, eggs, and bread from the supermarket.',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Finish project report',
      description: 'Complete the final draft of the quarterly report.',
      status: 'in progress'
    },
    {
      id: 3,
      title: 'Call plumber',
      description: 'Fix the leaking sink in the kitchen.',
      status: 'pending'
    },
    {
      id: 4,
      title: 'Schedule dentist appointment',
      description: 'Book a check-up for next week.',
      status: 'done'
    },
    {
      id: 5,
      title: 'Workout',
      description: 'Go to the gym for an hour of cardio and strength',
      status: 'pending'
    }
  ]

  return (
    <div className="app">
      <Header />
      <Subheader subtitle="Todo List Manager" />
      <ListContainer>
        <ListHeader content="Todo List" />
        <ItemsList itemsList={todoItems} />
      </ListContainer>
    </div>
  )
}

export default App
