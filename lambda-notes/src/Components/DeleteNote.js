import React from "react";
import axios from "axios";
import { Route, Link, NavLink } from "react-router-dom";
import styled from "styled-components";

//delete request//

class DeleteNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        let newNotes = this.state.notes.filter(note => id !== note._id);
        this.setState({
          notes: newNotes
        })
      })
      .catch(err => {
        console.log(err);
      })
    }
    
  //Delete Handler
  deleteHandler = () => {
    this.props.deleteNote(this.state.noteId);
  };

  render() {
    return (
      <div>
        <h2>Are you sure you want to Delete?</h2>
        <div className="btn">
          <button onClick={this.deleteHandler}>Delete</button>
          <button> No </button>
        </div>
      </div>
    );
  }
}

export default DeleteNote;
