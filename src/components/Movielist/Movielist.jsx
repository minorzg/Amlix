import {useEffect,useState} from 'react'
import '../../CSS/Movielist.css'
import MovieCard from './MovieCard'
import Filtergroup from './Filtergroup';
import _ from 'lodash';

const Movielist = ({type, title}) => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [rating, setRating] = useState(0);
    const [sort, setSort] = useState({by: 'default', order: 'asc'});


    const getdata = async () => {
       const res =await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=a56b4732ea114da8005fba28fb9d8279`)
         const data = await res.json();
         setMovies(data.results);
         setFilteredMovies(data.results);
    }
    
    useEffect(() => {
        getdata()
    }, []);

    const handlefilter = rate => {
        if(rate === rating){
            setRating(0);
            setFilteredMovies(movies);
        }
        else{
        setRating(rate);
        const filtred = movies.filter(movie => movie.vote_average >= rate);
        setFilteredMovies(filtred);
        }
    };

    useEffect(() => {
        if(sort.by !== 'default'){
            const sortedmovies= _.orderBy(filteredMovies, [sort.by], [sort.order]);
            setFilteredMovies(sortedmovies);
        }
    }, [sort])


    const handlesort = e => {
        const {name, value} = e.target;
        setSort(prev => ({...sort, [name]: value}));
    };

  return (
    
    <section className="movielist" id={type}>
        <header className="movielist__header">
            <h2 className="movielist__heading">{title}</h2>

        <div className="movielist_fs">
            <Filtergroup rating={rating} handlefilter={handlefilter} ratings={[8, 7, 6]}/>
            <select name="by" id="" onChange={(e) => setSort({...sort, by: e.target.value})} className="movie_sorting">
                <option value="default">Sort by</option>
                <option value="vote_average">Rating</option>
                <option value="release_date">Release Date</option>
            </select>
            <select name="order" id="" onChange={(e) => setSort({...sort, order: e.target.value})} className="movie_sorting">
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>

        </header>
        <div className="movie_cards">
           {
            filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
           }
        </div>
    </section>
  )
}

export default Movielist
