import React from 'react';

var AddMovie = (props) => {
  return(
    <form className='form_add'
    onSubmit={(e) => {props.catalogMovie(e)}}>
      <input type="text" placeholder="Add Movie" name='add'></input>
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddMovie;