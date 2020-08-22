import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import ACCESS_KEY from "../secure";
import SECRET_KEY from "../secure";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
      },
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitReq={this.onSearchSubmit} />
        <ImageList />
      </div>
    );
  }
}

export default App;
