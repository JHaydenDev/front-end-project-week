import React from "react";
import axios from "axios";
import { Route, Link, NavLink } from "react-router-dom";
import styled from "styled-components";
//Styling
// const DeleteMod = styled.div`
//   height: 175px;
//   background-color: white;
//   border: solid 1px;
//   flex-wrap: wrap;
//   display: flex;
//   justify-content: space-around;
//   padding: 3%;
// `;

// const ButtonHouse = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
// `;

// const DeleteButton = styled.button`
//   width: 30%;
//   background-color: red;
//   color: white;
//   font-size: 1.1rem;
//   margin: 5%;
// `;

// const NoButton = styled.button`
//   width: 30%;
//   background-color: lightseagreen;
//   color: white;
//   font-size: 1.1rem;
//   margin: 5%;
// `;

class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
  }


  //Axios request//

  // EditNote = id => {
  //     axios
  //       .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
  //       .then(response => {
  //         this.props.history.push("/NotesList");
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   };

  render() {
    return (
      <div>
          <h2>Edit Note:</h2>
        <form>
          <textarea 
                // type='text' 
                // name='title'
                // onChange={}
                // value={} 
                />
  
            <textarea
                // type='text' 
                // name='textBody'
                // onChange={}
                // value={}
                 />
            <button>Update</button>       
        </form>
      </div>
    )}
}

export default EditNote;
