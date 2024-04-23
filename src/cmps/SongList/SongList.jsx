import { DurationIcon } from "../icons/DurationIcon";
import { SongPreview } from "./SongPreview";

export function SongList({ songs = [] }) {
  return (
    <section className="song-list">
      <header className="w-100 p-8 fs13">
        <span className="song-number flex align-center justify-center">#</span>
        <span className="song-title">Title</span>
        <span className="song-date-added">Date added</span>
        <span className="song-duration flex row align-center justify-center"><DurationIcon /></span>
      </header>
      <hr />
      {songs.map((song, idx) => <SongPreview key={song.id} song={song} number={idx + 1} />)}
    </section>
  );
}
