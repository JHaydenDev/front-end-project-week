import React from "react";


class Note extends React.Component {
  render() {
    return (
      <div className="note">
        <Title>{this.props.note.title} </Title>
        <Body> {this.props.note.textBody} </Body>
      </div>
    );
  }
}
export default Note;
