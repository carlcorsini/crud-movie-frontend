baseURL = 'http://localhost:3000'

document.addEventListener('DOMContentLoaded', event => {
  $('#form-container').delegate('#submit-button', 'click', event => {
    let title = document.querySelector('#title-form').value
    let director = document.querySelector('#director-form').value
    let year = document.querySelector('#year-form').value
    let rating = document.querySelector('#rating-form').value
    let imageUrl = document.querySelector('#image-url-form').value
    axios
      .post(`${baseURL}/movies/`, {
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
