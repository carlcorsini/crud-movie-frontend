let baseURL = 'http://localhost:3000'

renderMovies = movies => {
  movies.forEach(a => {
    $('#movies-table').append(`
      <tr id="${a.title}" >
      <td><a id="title-button" href="#/${a.id}">${a.title}</a></td>
      <td>${a.director}</td>
      <td>${a.year}</td>
      <td>${a.rating} Stars</td>
      <td><a class="btn btn-primary btn-large" href="#/${
        a.id
      }" id="edit-button">Edit</a></td>
      <td><a class="btn btn-primary btn-large" href="#/${
        a.id
      }" id="delete-button">Delete</a></td>
      </tr>
      `)
  })
}

getAllMovies = async () => {
  let result = await axios.get(`${baseURL}/movies`)
  return result.data.movies
}

document.addEventListener('DOMContentLoaded', async event => {
  let movies = await getAllMovies()
  renderMovies(movies)

  $('#movies-table').delegate('#title-button', 'click', event => {
    let almostId = event.target.href.split('/index.html#/')
    let id = almostId[1]
    localStorage.setItem('movie_id', JSON.stringify(id))
    window.location.replace('show.html')
  })

  $('#movies-table').delegate('#edit-button', 'click', event => {
    let almostId = event.target.href.split('/index.html#/')
    let id = almostId[1]
    localStorage.setItem('movie_id', JSON.stringify(id))
    window.location.replace('edit.html')
  })

  $('#movies-table').delegate('#delete-button', 'click', event => {
    let almostId = event.target.href.split('/index.html#/')
    let id = almostId[1]
    axios.delete(`${baseURL}/movies/${id}`)
    window.location.replace('index.html')
  })
})
