import React from 'react';
import Search from './Search.jsx';
import MovieElement from './MovieElement.jsx'

function MovieList (props) {

  let moviesToRender = [null];

  if (props.plsRender.filteredMovieList) {
    //making a list of movie titles from filtered list
  moviesToRender = props.plsRender.filteredMovieList.map((movie) => movie.title)
  }

  let movieXML = moviesToRender.map((title) => {
    return <MovieElement plsRender = {title}/>
  })

  console.log(movieXML)


  return(
    <div>
      {movieXML}
    </div>
  )

}

export default MovieList;


