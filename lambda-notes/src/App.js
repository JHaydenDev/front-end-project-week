import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          notes: [{


              "tags": [],
              "title": "",
              "textBody": ""

          },
          ]
      }

  }


  render() {
  return (
    <div className="App">
      
    </div>
  );
}
}

export default App;