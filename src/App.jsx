import { BrowserRouter , Route , Routes} from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import MovieDetails from './Components/MovieDetails/MovieDetails'
import PageNotFound from './Components/PageNotFound/PageNotFound'
import '../src/App.scss'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Header/>
          <div className="container">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movie/:imdbID' element={<MovieDetails/>}/>
            <Route element={<PageNotFound/>}/>
        </Routes>
          </div>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
