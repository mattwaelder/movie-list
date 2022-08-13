import React from 'react';


//jk stateful :)
class Search extends React.Component {
  constructor(props) {
    super(props);
    // let updateState = this.updateState.bind(this);
    // let handleSearch = this.handleSearch.bind(this)
    this.state = {
      query: "",
    }
  }

  //i may need to change this such that state is updated, and on change
  //the callback to edit app state is called...?

  render() {
    return(

      <div className='form_and_list'>

        <form
        className='form_search'
        onSubmit={(e) => {
          // this.updateState(e)
          this.props.handleSearch(e)}
        }
        >
          <input type="text" id="form_movie_search" name="search" placeholder='Search for A Movie'>
          </input>

          <button type="submit">Search!
          </button>
        </form>

      </div>
    )
  }

}

export default Search;