import React, { Component } from "react";
import NotesList from "./Components/NotesList";
import axios from "axios";
import { Route, Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import NewNote from "./Components/NewNotesForm";
import ViewNote from "./Components/ViewNote";

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

  //Rendering NotesList.  Need to refactor into using React Router.

  render() {
    return (
      <MainApp>
        <SideBar>
          <SideBarHeader>Lambda Notes</SideBarHeader>
          <ButtonBox>
            <Button to="/NotesList">View Your Notes</Button>
            <Button to="/NewNote">+ Create a new note</Button>
          </ButtonBox>
        </SideBar>
        <MainPage>
          <Route
            path="/NotesList"
            exact
            render={props => <NotesList {...props} />}
          />
          <Route path="/NewNote" exact component={NewNote} />
          <Route exact path="/note/:id" render={props => <ViewNote {...props} />}/>
        </MainPage>
      </MainApp>
    );
  }
}

export default App;
