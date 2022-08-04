import React from 'react';
import MovieList from './MovieList.jsx';


//jk stateful :)
class Search extends React.Component {
  constructor(props) {
    super(props);
    let handleSearch = this.handleSearch.bind(this)
    this.state = {
      query: "",
      filteredList: props.movies.slice(),
    }
    // console.warn('SEARCH PROPS', props)
    // console.log(this.state.filteredList)
    // this.handleSearch()
  }


  handleSearch(e) {
    e.preventDefault();

    // let userInput = document.getElementById('form_movie_search').value;
    //"search" being the value of the name attr of e.target
    let userInput = e.target.search.value || '';
    let filteredMovieList = [];

    // ! this is ASYNC !
    this.setState({query: {userInput}})
    let movieMatches = 0;

    this.props.movies.map(function(movie) {
      if (movie.title.toLowerCase().includes(userInput.toLowerCase())) {
        filteredMovieList.push(movie);
        movieMatches++;
      }
    })

    // if (movieMatches===0) {
    //   alert("Sorry, It Looks Like We Don't Have That Movie :(")
    // }

    this.setState({filteredList: {filteredMovieList}})

  }

  render() {
    return(

      <div className='form_and_list'>

        <form
        className='form_search'
        onSubmit={(e) => this.handleSearch(e)}
        >
          <input type="text" id="form_movie_search" name="search" placeholder='Search for A Movie'>
          </input>

          <button type="submit">Search!
          </button>
        </form>

        <div className='movie_list'>
          <MovieList plsRender={this.state.filteredList}/>
        </div>

      </div>
    )
  }

}

export default Search;