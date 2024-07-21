/* eslint-disable react-hooks/exhaustive-deps */
import './Home.scss'
import MovieListing from '../MovieListing/MovieListing'
import {apiKey} from '../../Common/Api/MovieApiKey'
import MovieApi from'../../Common/Api/MovieApi'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../Features/Movies/MovieSlice'
const Home = () => {
  const dispatch = useDispatch()
  const movieText = 'Harry';
  useEffect(()=>{
    const fetchMovies = async ()=>{
      try
      {
        const response = await MovieApi.get(`?apiKey=${apiKey}&s=${movieText}&type=movie`)
        dispatch(addMovies(response.data))
      }
      catch(err)
      {
        console.log('Error' , err)
      }
    }
    fetchMovies()
  }, [])

  return (
    <div className='home'>
    <div className="banner-img"></div>
    <MovieListing/>
    </div>
  )
}

export default Home
