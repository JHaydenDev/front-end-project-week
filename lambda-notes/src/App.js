import React, { Component } from "react";
import NotesList from "./Components/NotesList";
import axios from "axios";
import { Route, Link, NavLink } from "react-router-dom";
import styled from "styled-components";

//styling.///
const MainApp = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 900px;
  margin: auto;
  background-color: whitesmoke;
`;
const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: #d3d2d3;
`;

const SideBarHeader = styled.h1`
word-spacing: 8px;
margin: 4% 8%;
`;

const MainPage = styled.div`
  width: 90%;
  display: flex;
`;
const Button = styled(NavLink)`
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

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
`;

//Class Component for App//

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  //Get request to get notes for the list.//

  componentDidMount() {
    axios.get(`https://fe-notes.herokuapp.com/note/get/all`).then(res => {
      const notes = res.data;
      this.setState({ notes: res.data });
    });
  }

  //Delete a note//

  deleteNote = id => {
    axios
      .delete("https://fe-notes.herokuapp.com/note/delete/" + id)
      .then(res => {
        console.log("DELETE NOTE", res);
        if (res.data.success === "Note successfully deleted") {
          let newNotes = this.state.notes.filter(note => {
            return note._id != id;
          });
          this.setState({ notes: newNotes });
        }
      })
      .catch(err => {
        console.log("DELETE Error", err);
      });
  };

  //Rendering NotesList.  Need to refactor into using React Router.

  render() {
    return (
      <MainApp>
        <SideBar>
          <SideBarHeader>Lambda Notes</SideBarHeader>
          <ButtonBox>
            <Button to="/">View Your Notes</Button>
            <Button to="/NoteForm">+ Create a new note</Button>
          </ButtonBox>
        </SideBar>
        <MainPage>
          <NotesList notes={this.state.notes} />
        </MainPage>
      </MainApp>
    );
  }
}

export default App;
