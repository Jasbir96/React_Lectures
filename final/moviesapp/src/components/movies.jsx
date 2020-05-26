import React, { Component } from "react";
import Like from "../common/like";
import Pagination from "../common/pagination";
import { paginate } from "./../utils/paginate";
import ListGroup from "./listgroup";
import Axios from "axios";
import { Link } from "react-router-dom";
import { getMovies } from "../services/MovieService";
class Movies extends Component {
  state = {
    movies: getMovies(),
    selectedGenre: "All Genres",
    genres: [{ _id: "", name: "All Genres" }],
    pageSize: 4,
    currentPage: 1,
    searchQuery: ""
  };
  async componentDidMount() {
    //  const movies = await Axios.get("https://my-json-server.typicode.com/abhishekv24/testServer/movies");
    //  this.setState({movies:movies.data});
    const genres = await Axios.get(
      "https://my-json-server.typicode.com/abhishekv24/testServer/genres"
    );
    this.setState({ genres: [...this.state.genres, ...genres.data] });
  }
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
    // this.props.history.replace("/login");
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1, searchQuery: "" });
  };
  handleSearch = event => {
    this.setState({
      searchQuery: event.currentTarget.value,
      selectedGenre: null,
      currentPage: 1
    });
  };

  render() {
    if (this.state.movies.length === 0)
      return <p className="moviesTable">There are no movies in the database</p>;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
      searchQuery
    } = this.state;
    let filteredMovies = allMovies;
    if (searchQuery)
      filteredMovies = allMovies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filteredMovies = allMovies.filter(m => m.genre._id === selectedGenre._id);
    const movies = paginate(filteredMovies, currentPage, pageSize);
    return (
      <div className="moviesTable">
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <p>Showing {filteredMovies.length} movies from the database</p>
            <Link to="/movies/new">
              <button className="btn btn-primary">New</button>
            </Link>
            <input
              type="text"
              name="query"
              className="form-control my-3"
              placeholder="Search..."
              value={searchQuery}
              onChange={this.handleSearch}
            />
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rate</th>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                {movies.map(movie => (
                  <tr key={movie._id}>
                    <td>
                      <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
                    </td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like
                        onClick={() => this.handleLike(movie)}
                        liked={movie.liked}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(movie)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              itemsCount={filteredMovies.length}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
