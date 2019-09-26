import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NotesList from "./components/NotesList";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      filteredNotes: [],
      currTitle: '',
      currComment: '',
      query: '',
    }
  }

  handleTitleChange = (event) => {
    this.setState({currTitle: event.target.value});
  }

  handleCommentChange = (event) => {
    this.setState({currComment: event.target.value});
  }

  handleQueryChange = (event) => {
    let query = event.target.value;

    let filteredNotes = this.state.notes.filter((note) => {
      return note.title.includes(query) || note.comment.includes(query);
    })

    this.setState({query, filteredNotes});
    this.forceUpdate();
  }

  addNote = () => {
    let note = {
      title: this.state.currTitle,
      comment: this.state.currComment,
      selected: false,
    }

    let { notes } = this.state;

    notes.push(note);

    this.setState({
      notes: notes,
      currComment: '',
      currTitle: ''
    })
  }

  selectNote = (index) => {
    let { notes } = this.state;
    notes[index].selected = !notes[index].selected;
    this.setState({notes});    
  }

  deleteNotes = () => {
    let { notes } = this.state;
    notes = notes.filter(note => !note.selected);
    this.setState({notes});
  }


  render() {
    return (
      <>
        <div id="sidebar" className="sidenav">
          <div className="input-group">
            <input
              id="searchBar"
              className="form-control"
              placeholder="Search"
              type="text"
              value={this.state.qeury}
              onChange={this.handleQueryChange}
            />
            <button id="deleteButton" type="button" className="btn btn-outline-dark" onClick={this.deleteNotes}>
              Delete
            </button>
          </div>
          <NotesList notes={this.state.query ? this.state.filteredNotes : this.state.notes} selectNote={this.selectNote}></NotesList>
        </div>

        <div className="main">
          <div id="interface" className="card">
            <div className="card-body">
              <input
                id="titleInput"
                className="form-control"
                value={this.state.currTitle}
                onChange={this.handleTitleChange}
                type="text"
              />
              <hr />
              <textarea
                id="inputArea"
                className="form-control"
                rows="5"
                id="comment"
                value={this.state.currComment}
                onChange={this.handleCommentChange}
              ></textarea>
              <button
                id="submitButton"
                type="button"
                className="btn btn-outline-primary"
                onClick={this.addNote}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
