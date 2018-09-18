import React, { Component } from 'react';
import Lists from "./Components/List";
import data from "./Data/data"


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>List Of Users</h2>
        <Lists data={data}/>
      </div>
    );
  }
}

export default App;
