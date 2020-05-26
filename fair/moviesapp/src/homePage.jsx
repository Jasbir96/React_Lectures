import React, { Component } from 'react';
import { getMovies } from "./db/fakeMovieService";
import { getGenres } from "./db/fakeGenreService";
class MoviesPage extends Component {
  state = {
    movies: getMovies(),
    searchQuery: "",
    currentPage: 1,
    limit: 4,
    genres: [{ _id: "1", name: "All Genres" }]
  }
  handleDelete = (toDeleteMovie) => {
    let remainingMovies = this.state.movies.filter((movie) => {
      return movie["_id"] !== toDeleteMovie["_id"];
    })
    this.setState({ movies: remainingMovies });
  }
  toggleLike = (toToggleMovie) => {
    const { movies } = this.state;
    for (let i = 0; i < movies.length; i++) {
      if (toToggleMovie["_id"] === movies[i]["_id"]) {
        movies[i]["liked"] = !movies[i]["liked"];
        // file change 
      }
      this.setState({
        movies: movies
      })
    }
  }
  handleChange = (e) => {
    let value = e.currentTarget.value;
    this.setState({ searchQuery: value });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page })
  }
  // life cycle methods
  componentDidMount() {
    // 
    // /request 
    // genres update 
    // array destructuring
    // console.log(getGenres());
    // console.log(...getGenres());
    let NewGArray = [...this.state.genres, ...getGenres()];
    // console.log(NewGArray);
    this.setState({
      genres: NewGArray
    })


  }
  
  render() {
    let { movies, searchQuery, currentPage, limit, genres } = this.state;
    if (searchQuery) {
      movies = movies.filter((movie) => {
        let uCaseMovie = movie["title"].toUpperCase();
        let uSQuery = searchQuery.toUpperCase();
        return uCaseMovie.startsWith(uSQuery);
      })
    }
    // to print
    let pageslength = movies.length / limit;
    let pagesArr = [];
    for (let i = 0; i < pageslength; i++) {
      pagesArr.push(i + 1);
    }
    // pagination=> movies, start ,ending index
    let sIndex = (currentPage - 1) * limit;
    let eIndex = sIndex + limit;

    movies = movies.slice(sIndex, eIndex);

    return (
      <div className="row">
        <div className="col-3">
          <ul className="list-group">
            {genres.map((genre) => {
              return <li className="list-group-item">{genre.name}</li>
            })}
          </ul>
        </div>
        <div className="col">
          <input type="text" value={searchQuery} onChange={this.handleChange} />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {
                movies.map((movie) => {
                  return <tr>
                    <td>{movie["title"]}</td>
                    <td>{movie["genre"]["name"]}</td>
                    <td>{movie["numberInStock"]}</td>
                    <td>{movie["dailyRentalRate"]}</td>
                    <td><i class={movie["liked"] == true ? "fas fa-heart" : "far fa-heart"} onClick={() => {

                      this.toggleLike(movie)
                    }} ></i></td>
                    <td><button className="btn btn-danger" onClick={() => {
                      this.handleDelete(movie)
                    }}>Delete</button></td>
                  </tr>
                })
              }
            </tbody>
          </table>
          <ul className="pagination">
            {pagesArr.map((page) => {
              return <li className="page-item"><a href="javascript:;" className="page-link" onClick={() => { this.handlePageChange(page) }}>{page}</a></li>

            })}
          </ul>

        </div>

      </div>

    );
  }
}
export default MoviesPage;