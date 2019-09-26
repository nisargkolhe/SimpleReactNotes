import React, { Component } from "react";
import Note from './Note';

class NotesList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let notes = this.props.notes.map((note, index) => <Note key={index} note={note} index={index} selectNote={this.props.selectNote}/>);

    return <div id="notecardList" className="container">{notes}</div>;
  }
}

export default NotesList;
