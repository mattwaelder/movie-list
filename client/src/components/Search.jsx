import React from 'react';


//jk stateful :)
class Search extends React.Component {
  constructor(props) {
    super(props);
    // let handleSearch = this.handleSearch.bind(this)
    this.state = {
      query: "",
    }
    // console.warn('SEARCH PROPS', props)
    // console.log(this.state.filteredList)
    // this.handleSearch()
  }


  // handleSearch(e) {
  //   e.preventDefault();

  //   // let userInput = document.getElementById('form_movie_search').value;
  //   //"search" being the value of the name attr of e.target
  //   let userInput = e.target.search.value || '';
  //   let filteredMovieList = [];

  //   // ! this is ASYNC !
  //   this.setState({query: {userInput}})
  //   let movieMatches = 0;

  //   this.props.movies.map(function(movie) {
  //     if (movie.title.toLowerCase().includes(userInput.toLowerCase())) {
  //       filteredMovieList.push(movie);
  //       movieMatches++;
  //     }
  //   })

    // if (movieMatches===0) {
    //   alert("Sorry, It Looks Like We Don't Have That Movie :(")
    // }

  //   this.setState({filteredList: {filteredMovieList}})

  // }
                  //the issue im having is that id like to use the state of this module to filter
                  //so im using a fn from props, calling a property of this modules state to do that filter
                  //the issue is that if i were to update the state of this module that is async
                  //so updating the state then calling the filter fn wouldnt be good right?

                  //why again is this stateful?
                  //considering we want the full movie list to render by default, it then seems unlikely
                  //than using a second filtered list of movies is the play -- as with my first attempt
  render() {
    return(

      <div className='form_and_list'>

        <form
        className='form_search'
        onSubmit={(e) => this.props.handleSearch(e)}
        >
          <input type="text" id="form_movie_search" name="search" placeholder='Search for A Movie'>
          </input>

          <button type="submit">Search!
          </button>
        </form>
{/*
        <div className='movie_list'>
          <MovieList plsRender={this.state.filteredList}/>
        </div> */}

      </div>
    )
  }

}

export default Search;