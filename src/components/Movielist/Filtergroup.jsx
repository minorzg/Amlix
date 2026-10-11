
import '../../CSS/Movielist.css'

const Filtergroup = ({ rating, handlefilter ,ratings}) => {
  return (
    
            <ul className="movie_filter">{
              ratings.map((rate) =>(
                <li className={rating === rate ? "movie_filter_item active" : "movie_filter_item"} key={rate} onClick={() => handlefilter(rate)}>{rate}+ Stars</li>
              ))}
            </ul>
    
  )
}

export default Filtergroup
