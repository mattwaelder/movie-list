import React from 'react';
import Search from './Search.jsx';
import MovieElement from './MovieElement.jsx';
import MovieElementWatched from './MovieElementWatched.jsx';

function MovieList (props) {
  // let moviesToRender = [null];

  // if (props.plsRender.filteredMovieList) {
  //   //making a list of movie titles from filtered list
  // moviesToRender = props.plsRender.filteredMovieList.map((movie) => movie.title)
  // }

  // let movieXML = moviesToRender.map((title) => {
  //   return <MovieElement plsRender = {title}/>
  // })

  // console.log(movieXML)

  // console.warn('MOVIELISTPROPS', props)

  let moviesToRender = [];

  //if there search yields results
  if (props.filteredMovies.length) {
    moviesToRender = props.filteredMovies.map((movie) => {
      let isWatched;
      movie.watched ? isWatched = true : isWatched = false;
      if (isWatched) {
        return <MovieElementWatched plsRender = {movie.title} />
      } else {
        return <MovieElement plsRender = {movie.title} />
      }
    })
  //if search does not yield results
  } else {
    moviesToRender = props.allMovies.map((movie) => {
      let isWatched;
      movie.watched ? isWatched = true : isWatched = false;
      if (isWatched) {
        return <MovieElementWatched plsRender = {movie.title} />
      } else {
        return <MovieElement plsRender = {movie.title} />
      }
    })
  }



  return(
    <div className="list_sub_container">
      {moviesToRender}
    </div>
  )

}

export default MovieList;


