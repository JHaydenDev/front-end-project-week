import React, { Component } from "react";
import Note from "./Note";
import styled from "styled-components";
import { Route, Link, NavLink } from "react-router-dom";
import axios from "axios";

//Styling//

const Title = styled.h3`
overflow-wrap: break-word;
`;

const Body = styled.div`
overflow-wrap: break-word;
`;

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
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      loading:true,
    };
  }


  
  //Get request to get notes for the list.//

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)

      .then(response => {
        console.log(response);
        this.setState({
          notes: response.data,
          loading: false
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <StyledList>
        <Header>Your Notes:</Header>
        {this.state.notes.map(note => {
          return (
            <StyledLink to={`Note/${note._id}`}>
              <Title>{note.title}</Title>
              <hr />
              <Body>{note.textBody.substr(0, 100)} </Body>
            </StyledLink>
          );
        })}
      </StyledList>
    );
  }
}

export default NotesList;
