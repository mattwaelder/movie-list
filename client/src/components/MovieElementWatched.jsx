import React from 'react'

var MovieElementWatched = (props) => {
  return(
    <div className="entry_container">
      <div className="movie_title">{props.plsRender}</div>
      <div className="watch_btn">watched</div>
    </div>
  )
}

export default MovieElementWatched;