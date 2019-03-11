import React, { Component } from "react";
import axios from "axios";
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

const H1 = styled.h1`
  margin: 5%;
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

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteToEdit: {},
      updatedTitle: null,
      updatedText: null,
      loading: true
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
          noteToEdit: response.data,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ loading: false });
        console.log(err);
      });
  };

  submitEditedNote = e => {
    e.preventDefault();
    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/${
          this.props.match.params.id
        }`,
        {
          title: this.state.updatedTitle,
          textBody: this.state.updatedText
        }
      )
      .then(response => {
        this.props.history.push(`/note/${this.props.match.params.id}`);
      })
      .catch(err => console.log(err));
  };

  updatedTitle = e => {
    this.setState({
      updatedTitle: e.target.value,
      noteToEdit: { textTitle: e.target.value }
    });
  };

  updateTeaxtBody = e => {
    this.setState({
      updatedText: e.target.value,
      noteToEdit: { textBody: e.target.value }
    });
  };

  render() {
    console.log(this.state)
    return (
      <div className="contentContainer">
        <H1>Edit Note:</H1>
        <Form className="form" onSubmit={this.submitEditedNote}>
          <InputTitle
            className="title"
            type="text"
            name="title"
            onChange={this.updatedTitle}
            value={this.state.noteToEdit.title}
          />

          <InputBody
            className="textBody"
            type="text"
            name="textBody"
            onChange={this.updateTeaxtBody}
            value={this.state.noteToEdit.textBody}
          />
          <Button className="button" type="submit">
            Update
          </Button>
        </Form>
      </div>
    );
  }
}
export default EditNote;
