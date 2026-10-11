import Movielist from './components/Movielist/Movielist'
import Navbar from './components/navbar/Navbar'
import './CSS/app.css'

function App() {


  return (
    <div className="app">
      <Navbar />
      <Movielist type="popular" title="Popular" />
      <Movielist type="top_rated" title="Top Rated" />
      <Movielist type="upcoming" title="Upcoming" />
    </div>
  )
}

export default App
