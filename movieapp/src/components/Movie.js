import { Link } from "react-router-dom";

function Movie({id, medium_cover_image, title, summary, genres}){
    return(
        <div>
            <img src={medium_cover_image}/>
            <h2>
              <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary.length > 255 ? `${summary.slice(0,255)}...` : summary}</p>
            <ul>
              {genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
        </div>
    )
}
export default Movie;