let id = JSON.parse(localStorage.getItem('movie_id'))
baseURL = 'http://localhost:3000'

renderSingleMovie = movie => {
  $('#movie-container').append(
    `
    <h3 id="title">Title: ${movie.title}</h3>
    <h3 id="director">Director: ${movie.director}</h3>
    <h3 id="year">Year Realeased: ${movie.year}</h3>
    <h3 id="my-rating">Rating: ${movie.rating} Stars</h3>
    <img width="65%" height="40%" id="poster-url" src="${
      movie.image_url
    }" alt="">
    `
  )
}

getMovieById = () => {
  axios.get(`${baseURL}/movies/${id}`).then(result => {
    renderSingleMovie(result.data.movie[0])
  })
}

document.addEventListener('DOMContentLoaded', event => {
  getMovieById()
})
