import React from "react";

class Note extends React.Component {
  render() {
      console.log(this.props)
    return (
      <div className="note">
        <h2>{this.props.note.title} </h2>
        <p> {this.props.note.textBody} </p>
      </div>
    );
  }
}
export default Note;
