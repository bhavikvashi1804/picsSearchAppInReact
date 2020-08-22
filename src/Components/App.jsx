import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

import unsplash from '../helper/unsplash';

class App extends React.Component {
  state = { images: [] };
 onSearchSubmit=async(term)=> {
    var response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({images:response.data.results});
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitReq={this.onSearchSubmit} />
        Found {this.state.images.length} Images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
