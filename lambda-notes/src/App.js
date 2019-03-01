import React, { Component } from "react";
import NotesList from "./Components/NotesList";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios.get(`https://fe-notes.herokuapp.com/note/get/all`).then(res => {
      const notes = res.data;
      console.log(notes)
      this.setState( {notes: res.data});
    });
  }

  render() {
    return <NotesList notes={this.state.notes}/>;
  }
}

export default App;
