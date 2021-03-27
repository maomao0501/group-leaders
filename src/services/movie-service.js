const findMoviesByTitle = (title) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=481adc0fe1fe4c92d90b3afd667e5e1c&query=${title}`)
        .then(response => response.json())
}

const findMovieByIMDB = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=481adc0fe1fe4c92d90b3afd667e5e1c`)
        .then(response => response.json())
}


export default {
    findMoviesByTitle, findMovieByIMDB
}