import React, { Component } from 'react';
import {getMovies} from "./db/fakeMovieService";
class App extends Component {
  state = {movies:getMovies()  }
  render() { 
    let {movies}=this.state;
    return(
    <React.Fragment>
      {movies.map(function(movie){
        return <ul>
       <li>{movie["title"]}</li> 
       <li>{movie["genre"]["name"]}</li> 
       <li>{movie["numberInStock"]}</li> 
       <li>{movie["dailyRentalRate"]}</li> 
        </ul> 
      })}
      </React.Fragment>
      )
  }
}
 
export default App;