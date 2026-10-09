import { Link } from 'react-router-dom';
import LikeButton from '../LikeButton/LikeButton';
import './MovieCard.css';

function MovieCard({ movie }) {
  const { imdbID, Title, Year, Poster, Type } = movie;
  const hasPoster = Poster && Poster !== 'N/A';
  const typeLabel = Type === 'series' ? 'Сериал' : 'Фильм';

  return (
    <article className="movie-card">
      <Link
        to={`/movie/${imdbID}`}
        className="movie-card__poster-button"
        aria-label={`Открыть страницу фильма «${Title}»`}>
        {hasPoster ? (
          <img className="movie-card__poster" src={Poster} alt={Title} />
        ) : (
          <span className="movie-card__poster movie-card__poster--empty">
            Постер отсутствует
          </span>
        )}
        <span className="movie-card__type">{typeLabel}</span>
      </Link>

      <div className="movie-card__like">
        <LikeButton />
      </div>

      <div className="movie-card__info">
        <h3 className="movie-card__title" title={Title}>{Title}</h3>
        <p className="movie-card__year">{Year}</p>
      </div>
    </article>
  );
}

export default MovieCard;