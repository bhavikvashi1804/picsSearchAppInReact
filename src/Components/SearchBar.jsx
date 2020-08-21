import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }
  //the name of the event is as
  //{on}{nameOfElement}{Event}
  //some time on = handle
  onInputClick(){
    console.log('I got clicked');
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange} onClick={this.onInputClick}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
