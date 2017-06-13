import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'

class App extends Component {
  state = {
    items: [
      {
        completed: false,
        description: 'Buy food'
      },
      {
        completed: true,
        description: 'Invest in bitcoin'
      }
    ]
  }

  // 1. User interaction
  // 2. Browser event
  // 3. Action handler
  // 4. Changes the state
  // 5. Rerenders our app
  // 6. Users see the updated user interface

  handleToggleCompleteItem = (index) => {
    this.setState((prevState) => {
      const newItems = prevState.items
      // Update the correct item in the array
      newItems[index].completed = !newItems[index].completed

      return {
        // Hey update this.state.items to what’s in the items variable here
        items: newItems
      }
    })
  }

  handleChangeItemDescription = (index, newDescription) => {
    this.setState((prevState) => {
      const newItems = prevState.items
      // Update the correct item in the array
      newItems[index].description = newDescription

      return {
        // Hey update this.state.items to what’s in the items variable here
        items: newItems
      }
    })
  }

  render() {
    const items = this.state.items
    return (
      <main>
        <h1>Emojido</h1>
        {
          items.map((item, itemIndex) => {
            const completed = item.completed
            const description = item.description
            return (
              <TodoItem
                completed={ completed }
                description={ description }
                onToggleComplete={
                  (event) => {
                    this.handleToggleCompleteItem(itemIndex)
                  }
                }
                onChangeDescription={
                  (event) => {
                    const htmlInput = event.target
                    const newDescription = htmlInput.value
                    this.handleChangeItemDescription(itemIndex, newDescription)
                  }
                }
              />
            )
          })
        }
      </main>
    );
  }
}

export default App;
