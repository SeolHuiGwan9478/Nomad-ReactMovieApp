import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const {id} = useParams();
    const [movie, setMovie] = useState({});
    const getMovie = async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        console.log(json.data.movie);
        setMovie(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    },[]);
    return(
        <div>
            <h3>Title : {movie.title}</h3>
            <img src={movie.medium_cover_image}/>
            <p>Downloads : {movie.download_count}</p>
        </div>
    );
}
export default Detail;