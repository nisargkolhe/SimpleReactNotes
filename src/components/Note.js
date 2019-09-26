import React, { Component } from "react";

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let {note} = this.props;
    let cardClass = 'card';

    if (note.selected) {
        cardClass += ' bg-danger'
    }

    return (
      <div className={cardClass} onClick={() => this.props.selectNote(this.props.index)}>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.comment}</p>
        </div>
      </div>
    );
  }
}

export default Note;
