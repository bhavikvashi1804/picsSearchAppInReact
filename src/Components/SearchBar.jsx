import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit(event){
    event.preventDefault();
    //the browser will not discard the value of form field if user press enter 
    console.log("onSubmit is called");
    console.log(this.state.term);
    //this gives you error that state is not defined
    //to get the value use this
    
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(event)=>this.onFormSubmit(event)}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(event) => {
                this.setState({ term: event.target.value.toUpperCase() });
                //this is called controlled component
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
