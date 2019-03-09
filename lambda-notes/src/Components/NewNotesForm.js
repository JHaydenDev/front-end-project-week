import React, { Component } from "react";
import axios from "axios";
import { Route, Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  text-decoration: none;
  background-color: lightseagreen;
  margin: 10% auto;
  height: 30px;
  display: flex;
  justify-content: center;
  padding: 2%;
  width: 80%;
  font-weight: bold;
  padding-top: 10px;
`;

const InputTitle = styled.input`
  height: 30px;
  width: 200px;
  margin: 5%;
`;

const InputBody = styled.input`
  width: 90%;
  height: 445px;
  margin: 5%;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

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
        <h1> Create New Note: </h1>{" "}
        <Form className="form" onSubmit={this.addNew}>
          <InputTitle
            className="title"
            type="textarea"
            name="title"
            placeholder="Note Title"
            onChange={this.inputChangeHandler}
            value={this.state.title}
          />
          <InputBody
            className="textBody"
            type="textarea"
            name="textBody"
            placeholder="Note Content"
            onChange={this.inputChangeHandler}
            value={this.state.textBody}
          />{" "}
          <Button type="submit"> Save </Button>{" "}
        </Form>{" "}
      </div>
    );
  }
}

export default NewNote;
