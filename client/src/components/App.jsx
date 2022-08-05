import React from 'react';
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
    console.warn('INIT STATE', this.state)
  }


    //   this.props.movies.map(function(movie) {
  //     if (movie.title.toLowerCase().includes(userInput.toLowerCase())) {
  //       filteredMovieList.push(movie);

  handleSearch(e) {
    e.preventDefault();
    let userQuery = e.target.search.value;
    let tempList = [];
    let stateCopy = this.state;
    console.log(e)
    //the issue is getting the info (search input)
    //can i pass state into handleSearch? state async?
    console.log(userQuery)

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



  catalogMovie (e) {
    e.preventDefault();
    let newMovie = {title: e.target.add.value}
    let stateCopy = this.state;
    stateCopy.movies.push(newMovie)
    this.setState({stateCopy})

    // document.getElementById('form_add_movie').value = ''
    // e.target.name.value = '';

    // console.warn('NEW STATE', this.state)
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