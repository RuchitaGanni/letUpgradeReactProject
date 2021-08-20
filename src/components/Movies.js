
import { useEffect, useState } from 'react';
function Movies() {

    let [movie, setMovie] = useState(null);
    let [initialMovie, setinitialMovie] = useState("Avatar")

    useEffect(() => {
        let srcc = `http://www.omdbapi.com/?t=${initialMovie}&apikey=5b206127`;

        fetch(srcc)
            .then(response => response.json())
            .then(data => {
                setMovie(data)
                //setinitialMovie(data?.Title);
                console.log(data)
            })//console.log(data.Actors))
            .catch(error => console.log(error))
    })

    function getTitle(value) {
        console.log(value);
        //console.log('here');
        setinitialMovie(value);
        //setMovie(value)
    }
    return (
        <div className="h1-container">
            <h1>Movies List</h1>
            <div className="search-div">
                <input type="text" placeholder="Search Movie" className="search" onChange={(event) => { getTitle(event.target.value) }}></input>
            </div>
            {
                movie?.Error === undefined ? (

                    <div className="display-movie">
                        <div >
                            <img src={movie?.Poster} className="image-div" alt={movie?.Title}></img>
                        </div>
                        <div className="title">

                            <h3>{movie?.Title}</h3>
                            <p><strong>Actors</strong> : {movie?.Actors}</p>
                            <p><strong>Director</strong>: {movie?.Director}</p>
                            <p><strong>Production </strong>: {movie?.Production}</p>
                            <p><strong>Runtime </strong>: {movie?.Runtime}</p>
                            <p><strong>Plot</strong>: {movie?.Plot}</p>
                            <p><strong>imdbRating</strong>: {movie?.imdbRating}</p>
                        </div>

                    </div>
                ) :
                    (<h1>{movie?.Error}</h1>)
                }
        </div>

    )
}

export default Movies;