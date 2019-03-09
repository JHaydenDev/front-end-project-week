import React, { Component } from "react";
import axios from "axios";
import { Link, Route, NavLink } from "react-router-dom";
import DeleteNote from "./DeleteNote";
import EditNote from "./EditNote";

class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
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
          note: response.data,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // displayModal(){
  //   document.getElementById('DeleteNote').style.cssText = 'display: flex';
  // }

  EditNoteHandler;

  render() {
    return (
      <div>
        <div>
          <NavLink to={`/note/edit/${this.props.match.params.id}`}>
            Edit
          </NavLink>
          <Route path="/note/edit/:id" component={EditNote} />
          <button>Delete</button>

          <DeleteNote id={this.props.match.params.id} {...this.props} />
          <h3>{this.state.note.title}</h3>
          <p>{this.state.note.textBody}</p>
        </div>
      </div>
    );
  }
}

export default ViewNote;
