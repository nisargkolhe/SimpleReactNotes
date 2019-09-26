import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <input
        id="searchBar"
        className="form-control"
        placeholder="Search"
        type="text"
      />
    );
  }
}

export default SearchBar;
