let id = JSON.parse(localStorage.getItem('movie_id'))
baseURL = 'http://localhost:3000'

getMovieById = () => {
  axios.get(`${baseURL}/movies/${id}`).then(result => {
    renderEditForm(result.data.movie[0])
  })
}

renderEditForm = movie => {
  $('#form-container').append(
    `
      <form class="form-group" action="index.html" method="post">
            title <br>
            <textarea id="title-form" name="title" rows="2" cols="40">${
              movie.title
            }</textarea><br>
            director <br>
            <textarea id="director-form" name="director" rows="2" cols="40">${
              movie.director
            }</textarea><br>
            year <br>
            <textarea id="year-form" name="year" rows="2" cols="40">${
              movie.year
            }</textarea><br>
            rating <br>
            <textarea id="rating-form" name="rating" rows="2" cols="40" >${
              movie.rating
            }</textarea><br>
            image url: <br>
            <img width="65%" src="${movie.image_url}"/>
            <textarea id="image-url-form" name="url" rows="2" cols="40" >${
              movie.image_url
            }</textarea><br>
            <button id="submit-button" type="button" name="button">Submit</button>
          </form>
          `
  )
}

document.addEventListener('DOMContentLoaded', event => {
  getMovieById()
  $('#form-container').delegate('#submit-button', 'click', event => {
    let title = document.querySelector('#title-form').value
    let director = document.querySelector('#director-form').value
    let year = document.querySelector('#year-form').value
    let rating = document.querySelector('#rating-form').value
    let imageUrl = document.querySelector('#image-url-form').value
    axios
      .put(`${baseURL}/movies/${id}`, {
        title,
        director,
        year,
        rating,
        imageUrl
      })
      .then(response => {
        window.location.replace('index.html')
      })
  })
})
