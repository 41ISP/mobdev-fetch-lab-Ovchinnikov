import './SearchBar.css';

function SearchBar({ query, setQuery, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="search-bar">
      <span className="search-bar__eyebrow">Найти фильм или сериал</span>
      <div className="search-bar__row">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-bar__input"
          placeholder="Например: Joker, Interstellar, Dune…"
        />
        <button type="submit" className="search-bar__button">Искать</button>
      </div>
    </form>
  );
}

export default SearchBar;