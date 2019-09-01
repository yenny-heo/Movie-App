import React from 'react';
import PropTypes from 'prop-types';
import LineEllipsis from 'react-lines-ellipsis';
import './Movie.css';


class Movie extends React.Component{
    render(){
        return(
            <div className="Movie">
                <div className="Movie_Columns">
                    <MoviePoster poster = {this.props.poster} alt={this.props.title} />
                </div>
                <div className="Movie_Columns">
                    <h1>{this.props.title}</h1>
                    <div className="Movie_Genres">
                        {this.props.genres.map((genre, index) => <MovieGenre genre = {genre} key = {index}/>)}
                    </div>
                    <div className="Movie_Synopsis">
                        <LineEllipsis
                        text={this.props.synopsis}
                        maxLine='3'
                        ellipsis=' ...'
                        trimRight
                        basedOn='letters'
                        />
                    </div>
                </div>
            </div>
            
        )
    }
}

function MoviePoster(props){
    return(
        <img src={props.poster} alt={props.alt} title={props.alt} className="Movie_Poster"/>
    )
}
function MovieGenre(props){
    return(
        <span className="Movie_Genre">{props.genre} </span>
    )
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired,
}
export default Movie;