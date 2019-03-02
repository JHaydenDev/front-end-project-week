import React, { Component } from "react";
import Note from "./Note";
import styled from "styled-components";
import { Route, Link, NavLink } from "react-router-dom";

//Styling//

const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;
const Header = styled.h2`
  width: 100%;
  padding-left: 5%;
  padding-top: 5%;
  
`;

const StyledLink = styled(Link)`
  border: 2px solid #d3d2d3
  width: 23%;
  margin: 2%;
  background-color:white;
  height: 150px;
  padding: 2%;
  color:black;
  text-decoration: none;
`;

//Component//

class NotesList extends Component {
  render() {
    return (
      <StyledList>
        <Header>Your Notes:</Header>
        {this.props.notes.map(note => {
          return (
            <StyledLink to={`Note/${note._id}`}>
              <h3>{note.title}</h3>
              <hr />
              <div>{note.textBody.substr(0, 100)} </div>
            </StyledLink>
          );
        })}
      </StyledList>
    );
  }
}

export default NotesList;
