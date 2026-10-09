import { Link } from 'react-router-dom';
import LikeButton from '../LikeButton/LikeButton';
import RatingBadge from '../RatingBadge/RatingBadge';
import './MovieDetails.css';

function MovieDetails({ movie }) {
  const {
    Title,
    Year,
    Rated,
    Runtime,
    Genre,
    Plot,
    Director,
    Writer,
    Actors,
    Released,
    Language,
    Country,
    Awards,
    BoxOffice,
    Poster,
    Ratings,
  } = movie;

  const hasPoster = Poster && Poster !== 'N/A';

  return (
    <article className="movie-details">
      <Link to="/" className="movie-details__back">
        ← Ко всем фильмам
      </Link>

      <div className="movie-details__layout">
        <div className="movie-details__poster-col">
          {hasPoster ? (
            <img
              className="movie-details__poster"
              src={Poster}
              alt={Title}
            />
          ) : (
            <div className="movie-details__poster movie-details__poster--empty">
              Постер отсутствует
            </div>
          )}
        </div>

        <div className="movie-details__main">
          <div className="movie-details__heading">
            <div>
              <h1 className="movie-details__title">{Title}</h1>
              <p className="movie-details__meta">
                {Year} · {Rated} · {Runtime}
              </p>
            </div>
            <LikeButton />
          </div>

          <p className="movie-details__genre">{Genre}</p>
          <p className="movie-details__plot">{Plot}</p>

          {Ratings && Ratings.length > 0 && (
            <div className="movie-details__ratings">
              {Ratings.map((rating) => (
                <RatingBadge
                  key={rating.Source}
                  source={rating.Source}
                  value={rating.Value}
                />
              ))}
            </div>
          )}

          <dl className="movie-details__facts">
            <div className="movie-details__fact">
              <dt>Режиссёр</dt><dd>{Director}</dd>
            </div>
            <div className="movie-details__fact">
              <dt>Сценарий</dt><dd>{Writer}</dd>
            </div>
            <div className="movie-details__fact">
              <dt>В ролях</dt><dd>{Actors}</dd>
            </div>
            <div className="movie-details__fact">
              <dt>Дата выхода</dt><dd>{Released}</dd>
            </div>
            <div className="movie-details__fact">
              <dt>Язык</dt><dd>{Language}</dd>
            </div>
            <div className="movie-details__fact">
              <dt>Страна</dt><dd>{Country}</dd>
            </div>
            <div className="movie-details__fact">
              <dt>Награды</dt><dd>{Awards}</dd>
            </div>
            <div className="movie-details__fact">
              <dt>Сборы</dt><dd>{BoxOffice}</dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
}

export default MovieDetails;