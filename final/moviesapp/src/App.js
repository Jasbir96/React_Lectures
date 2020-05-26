import React, { Component } from "react";
import "./App.css";
import { getMovies } from "./services/MovieService";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/login";
class App extends Component {
  state = {
    movies: getMovies()
  };
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Switch>
          <Route path="/movies/new" component={MovieForm}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Route
            path="/movies"
            render={(rest) => {
              return <Movies myprop="some prop" history={rest.history} location={rest.location} match={rest.match} ></Movies>;
            }}
          ></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Redirect from="/" to="/movies"></Redirect>
          <Redirect to="/not-found"></Redirect>
          {/* <Route component={Movies}></Route> */}
        </Switch>
      </div>
    );
  }
}
export default App;
