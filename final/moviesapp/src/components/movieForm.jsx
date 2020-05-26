import React, { Component } from "react";
import { saveMovie } from "../services/MovieService";
class MovieForm extends Component {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    }
  };
  validate = () => {
    if (
      this.state.data.title === "" ||
      this.state.data.genreId === "" ||
      this.state.data.numberInStock === "" ||
      this.state.data.dailyRentalRate === ""
    )
      return true;
  };
  handleSubmit = e => {
    e.preventDefault();
    saveMovie(this.state.data);
    // console.log(movies);
    // to redirect the user to movies page

    this.props.history.push("/movies");
  };




  
  handleChange = e => {
    const input = e.currentTarget;
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  render() {
    const styles = {
      padding: "50px"
    };
    return (
      <div style={styles}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              autoFocus
              type="text"
              value={this.state.data.title}
              onChange={this.handleChange}
              className="form-control"
              name="title"
              id="title"
              placeholder="Enter title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="genreId">Genre</label>
            
            <select
              id="genreId"
              name="genreId"
              className="form-control"
              value={this.state.data.genreId}
              onChange={this.handleChange}
            >
              <option value=""></option>
              <option
                id="5b21ca3eeb7f6fbccd471818"
                value="5b21ca3eeb7f6fbccd471818"
              >
                Action
              </option>
              <option
                id="5b21ca3eeb7f6fbccd471814"
                value="5b21ca3eeb7f6fbccd471814"
              >
                Comedy
              </option>
              <option
                id="5b21ca3eeb7f6fbccd471820"
                value="5b21ca3eeb7f6fbccd471820"
              >
                Thriller
              </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="numberInStock">Number in Stock</label>
            <input
              value={this.state.data.numberInStock}
              onChange={this.handleChange}
              type="number"
              className="form-control"
              name="numberInStock"
              id="numberInStock"
              min="10"
              max="100"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dailyRentalRate">Rate</label>
            <input
              value={this.state.data.dailyRentalRate}
              onChange={this.handleChange}
              type="number"
              className="form-control"
              name="dailyRentalRate"
              id="dailyRentalRate"
              placeholder=""
              min="0"
              max="10"
            />
          </div>
          <button
            disabled={this.validate()}
            type="submit"
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default MovieForm;
