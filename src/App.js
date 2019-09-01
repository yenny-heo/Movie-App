import React from 'react';
import './App.css';
import Movie from './Movie';



class App extends React.Component{

  state = {
    
  }

  componentDidMount(){
    this._getMovies();

  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie 
      title = {movie.title_english} 
      poster = {movie.medium_cover_image} 
      key = {movie.id} 
      genres = {movie.genres}
      synopsis = {movie.synopsis}/>
    })
    return movies;
  }

  _getMovies = async () =>{
    const movies = await this._callAPI();
    this.setState({
      movies // movies: movies
    })
  }

  _callAPI = () =>{
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json()) // json으로 변환
    .then(json => json.data.movies)//리턴값
    .catch(err => console.log(err))
  }

  render()
  {
    return (
      <div className= {this.state.movies ? "App": "App-loading"}>
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
