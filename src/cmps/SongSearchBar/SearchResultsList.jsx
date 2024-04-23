import { SearchResult } from "./SearchResult";

export function SearchResultsList({ songs = [] }) {
  return (
    <section className="search-results-list">
      {songs.map((song) => {
        const {title, id, imgUrl} = song;
        return <SearchResult key={song.id} title={title} id={id} imgUrl={imgUrl}/>
      })}
    </section>
  );
}
