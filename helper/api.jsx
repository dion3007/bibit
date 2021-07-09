import axios from 'axios'
import constant from '../constant'

export const findMovies = async (search, page) => {
    let result
    const movies = await axios.get(`${constant.BASE_URL}s=${search}&page=${page}`)
    if (movies.data) {
        result = movies.data.Search 
    } else {
        result = []
    }
    return result
}

export const movieDetail = async (id) => {
    let result
    const movies = await axios.get(`${constant.BASE_URL}i=${id}`)
    if (movies.data) {
        result = movies.data
    } else {
        result = []
    }
    return result
}