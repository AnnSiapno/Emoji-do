import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    items: [
      {
        completed: false,
        description: "Buy food"
      },
      {
        completed: true,
        description: "Invest in bitcoin"
      }
    ]
  }
  render() {
    const items = this.state.items
    return (
      <main>
        <h1>EmojiDo</h1>
        {
          items.map((item) => {
            const completed = item.completed
            const description = item.description
            return (
              <div>
              <input type='checkbox' checked={ completed }/>
                { description }
              </div>
            )
          })
        }
      </main>
    );
  }
}

export default App;
