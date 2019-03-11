import React from "react";
import axios from "axios";
import { Route, Link, NavLink } from "react-router-dom";
import styled from "styled-components";

//Styling
const DeleteMod = styled.div`
  height: 175px;
  background-color: white;
  border: solid 1px;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  padding: 3%;
  margin: 10%;
`;

const ButtonHouse = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const DeleteButton = styled.button`
  width: 30%;
  background-color: red;
  color: white;
  font-size: 1.1rem;
  margin: 5%;
`;

const NoButton = styled.button`
  width: 30%;
  background-color: lightseagreen;
  color: white;
  font-size: 1.1rem;
  margin: 5%;
`;

class DeleteNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false
    }
  }

  //delete request//

  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        this.props.history.push("/NotesList");
      })
      .catch(err => {
        console.log(err);
      });
  };

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <DeleteMod>
        <h2>Are you sure you want to Delete this?</h2>
        <ButtonHouse>
          <DeleteButton onClick={() => this.deleteNote(this.props.id)}>
            Delete
          </DeleteButton>
          <NoButton onClick={this.toggleHidden}> No </NoButton>
          
        </ButtonHouse>
      </DeleteMod>
    );
  }
}

export default DeleteNote;
