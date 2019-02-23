import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router";
import axios from 'axios';


import List from './Components/List';


 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {notes: []}
  }

   componentDidMount() {
    this.getNotes()
  }

   getNotes = () => {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => {
      this.setState({
        notes: response.data
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

   render() {
    return(
    <div>
      <h1>Lambda Notes</h1>
   
      <Route exact path='/'
          render={(props) => <List {...props} notes={this.state.notes}/>}
      />
     
    </div>
    )}
}

 export default App;