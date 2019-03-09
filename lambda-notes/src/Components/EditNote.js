import React, { Component } from "react";
import axios from "axios";

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
        <h2>Edit Note:</h2>
        <form className="form" onSubmit={this.submitEditedNote}>
          <input
            className="title"
            type="text"
            name="title"
            onChange={this.updatedTitle}
            value={this.state.noteToEdit.title}
          />

          <input
            className="textBody"
            type="text"
            name="textBody"
            onChange={this.updateTeaxtBody}
            value={this.state.noteToEdit.textBody}
          />
          <button className="button" type="submit">
            Update
          </button>
        </form>
      </div>
    );
  }
}
export default EditNote;
