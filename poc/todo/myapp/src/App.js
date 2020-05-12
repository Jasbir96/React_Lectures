
import React, { Component } from 'react';
class App extends Component {
  state = {
    tasks: [{
      name: "Make Coffee", id: 1
    }, { name: "Learn React", id: 2 }, {
      name: "Learn JavaScript", id: 3
    }]
  }
  render() {
    return (
      <ul>
        {this.state.tasks.map((task) => {
          return <li>{task.name}</li>
        })}
      </ul>

    );
  }
}
export default App;
// npm install create-react-app -g
// create-react-app todo