import React, { Component } from "react";
import axios from "axios";
import { Link, Route, NavLink } from "react-router-dom";
import DeleteNote from "./DeleteNote";
import EditNote from "./EditNote";
import styled from "styled-components";

//Styling//
const ViewNoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const EditDelete = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin:15%;
`;

const NoteBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Edit = styled(NavLink)`
  width:50%
`;
const Delete = styled.a`
width:50%
`;
const Title = styled.h2`
width:100%
`;


class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      loading: true,
      isHidden: true
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState({
          note: response.data,
          loading: false
        });
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
      <ViewNoteContainer>
        <EditDelete>
          <Edit to={`/note/edit/${this.props.match.params.id}`}>
            Edit
          </Edit>

          <div>
            <Delete href="#" onClick={this.toggleHidden.bind(this)}>
              Delete
            </Delete>
            {!this.state.isHidden && (
              <DeleteNote id={this.props.match.params.id} {...this.props} />
            )}
          </div>
          <NoteBox>
            <Title>{this.state.note.title}</Title>
            <p>{this.state.note.textBody}</p>
          </NoteBox>
        </EditDelete>
      </ViewNoteContainer>
    );
  }
}

export default ViewNote;
