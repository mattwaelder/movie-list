import React from 'react'

var MovieElement = (props) => {
  return(
    <div className="entry_container">
      <div className="movie_title">{props.plsRender}</div>
      <div className="watch_btn">not watched</div>
    </div>
  )
}

export default MovieElement;