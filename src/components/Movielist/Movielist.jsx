import {useEffect,useState,useMemo} from 'react'
import '../../CSS/Movielist.css'
import MovieCard from './MovieCard'
import Filtergroup from './Filtergroup';
import _ from 'lodash';

const Movielist = ({type, title}) => {
    const [movies, setMovies] = useState([]);
    const [rating, setRating] = useState(0);
    const [sort, setSort] = useState({by: 'default', order: 'asc'});


    useEffect(() => {
        let ignore = false;
        const getdata = async () => {
           const res = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=a56b4732ea114da8005fba28fb9d8279`)
             const data = await res.json();
             if (!ignore) setMovies(data.results);
        }
        getdata();
        return () => { ignore = true; };
    }, [type]);

    const handlefilter = rate => {
        if(rate === rating){
            setRating(0);
        }
        else{
        setRating(rate);
        }
    };

    const filteredMovies = useMemo(() => {
        const filtered = rating > 0 ? movies.filter(movie => movie.vote_average >= rating) : movies;
        if(sort.by !== 'default'){
            return _.orderBy(filtered, [sort.by], [sort.order]);
        }
        return filtered;
    }, [movies, rating, sort]);

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
