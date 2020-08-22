import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log("Pass the data up");
    console.log(term);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitReq={this.onSearchSubmit}/>
        <ImageList />
      </div>
    );
  }
}

export default App;
