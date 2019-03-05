import React, { Component } from "react";
import axios from "axios";
import { Route, Link, NavLink } from "react-router-dom";
import styled from "styled-components";

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }

  //Change Handler//

  inputChangeHandler = e => {
    console.log(e);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addNew = e => {
    e.preventDefault();
    axios
      .post(`https://fe-notes.herokuapp.com/note/create`, this.state)
      .then(response => {
        this.props.addNoteOnServer(response.data);
      })
      .catch(err => console.log("Error", err));
    this.setState({
      title: "",
      textBody: ""
    });
  };

  render() {
    return (
      <div className="createContainer">
        <h1>Create New Note:</h1>
        <form className="form" onSubmit={this.addNew}>
          <input
            className="title"
            type="textarea"
            name="title"
            placeholder="Note Title"
            onChange={this.inputChangeHandler}
            value={this.state.title}
          />

          <input
            className="textBody"
            type="textarea"
            name="textBody"
            placeholder="Note Content"
            onChange={this.inputChangeHandler}
            value={this.state.textBody}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default NewNote;
