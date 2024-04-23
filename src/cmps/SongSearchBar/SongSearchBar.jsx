import { useCallback, useEffect, useState } from "react";

import { SearchIcon } from "../icons/SearchIcon";
import { SearchResultsList } from "./SearchResultsList";
import { utilService } from "../../services/util.service";
import { searchService } from "../../services/search.service";

export function SongSearchBar() {
  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const maxResults = 5;
    debounceSearch(query, maxResults);
  }, [query]);

  const debounceSearch = useCallback(utilService.debounce(async (query, maxResults) => {
    const searchResult = await searchService.searchSongs(query, maxResults);
    setSongs(searchResult);
  }, 500), []);

  return (
    <section className="song-search-bar">
      <hr className="my-16" />
      <h3 className="fs20">Let's find something for your playlist</h3>
      <form>
        <div className="input-wrapper flex row align-center br-4 overflow-hidden box-shadow-medium">
          <SearchIcon />
          <input
            className="bg-transparent border-none font"
            type="text"
            placeholder="Search for songs"
            value={query}
            onChange={(ev) => setQuery(ev.target.value)}
          />
        </div>
      </form>
      {!!songs.length && <SearchResultsList songs={songs} />}
      {!songs.length && query && <div className="no-results-msg w-100 flex column align-center justify-center">
        <span className="fs24 font-bold">No results found for {`"${query}"`}</span>
        <span className="fs14">Please make sure your words are spelled correctly, or use fewer or different keywords.</span>
      </div> }
    </section>
  );
}
