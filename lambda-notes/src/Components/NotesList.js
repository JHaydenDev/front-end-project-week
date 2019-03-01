import React, { Component } from "react";
import Note from "./Note";

class NotesList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.notes.map(note => {
            console.log(note)
          return <Note key={note._id} note={note} />;
        })}
      </div>
    );
  }
}

export default NotesList;
