import React from 'react';
import axios from 'axios'

import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import MovieElement from './MovieElement.jsx'
import AddMovie from './AddMovie.jsx'

//CLASS BC STATEFUL
class App extends React.Component {
  constructor(props) {
    super(props);

    this.catalogMovie = this.catalogMovie.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
       movies:
       [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
        {title: 'SunShine'},
      ],
      filteredMovies: [

      ]
    }
    // console.warn('INIT STATE', this.state)
  }


    //   this.props.movies.map(function(movie) {
  //     if (movie.title.toLowerCase().includes(userInput.toLowerCase())) {
  //       filteredMovieList.push(movie);

  handleSearch(e) {
    e.preventDefault();
    let userQuery = e.target.search.value;
    let tempList = [];
    let stateCopy = this.state;
    // console.log(e)
    //the issue is getting the info (search input)
    //can i pass state into handleSearch? state async?
    // console.log(userQuery)

    stateCopy.movies.map(function(movie) {
      if(movie.title.toLowerCase().includes(userQuery.toLowerCase())) {
        tempList.push(movie);
      }
    })

    console.log(tempList)
    //ASYNC!
    this.setState({
      movies: stateCopy.movies,
      filteredMovies: tempList,
    })

  }

/*
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
*/

  catalogMovie (e) {
    e.preventDefault();
    let newMovie = {title: e.target.add.value}
    let stateCopy = this.state;

    //make post call to server with newMovie
    //after successful post, make get call.

    axios.post('/movies', newMovie)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

    stateCopy.movies.push(newMovie)
    this.setState({stateCopy})
  }


  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="add_movie_container">
            <AddMovie catalogMovie = {this.catalogMovie} />
          </div>
          <div className="search_movies_container">
            <Search handleSearch = {this.handleSearch}/>
          </div>
        </div>
        <div className="movie_list_container">
            <MovieList
              allMovies = {this.state.movies}
              filteredMovies = {this.state.filteredMovies}
            />
        </div>
      </div>
    )
  }
}

export default App;