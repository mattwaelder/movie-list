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
    }
    console.warn('INIT STATE', this.state)
  }

  catalogMovie (e) {
    e.preventDefault();
    let newMovie = {title: e.target.add.value}
    let stateCopy = this.state;
    stateCopy.movies.push(newMovie)
    this.setState({stateCopy})

    // document.getElementById('form_add_movie').value = ''
    // e.target.name.value = '';

    console.warn('NEW STATE', this.state)
  }


  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="add_movie_container">
            <AddMovie catalogMovie = {this.catalogMovie} />
          </div>
          <div className="search_movies_container">
            <Search movies = {this.state.movies}/>
          </div>
        </div>
        <div>
            <MovieList />
        </div>
      </div>
    )
  }
}

export default App;