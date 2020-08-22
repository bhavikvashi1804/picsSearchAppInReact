import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import ACCESS_KEY from "../secure";

class App extends React.Component {
  state = { images: [] };
 onSearchSubmit=async(term)=> {
    var response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });
    this.setState({images:response.data.results});
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitReq={this.onSearchSubmit} />
        Found {this.state.images.length} Images
        <ImageList />
      </div>
    );
  }
}

export default App;
