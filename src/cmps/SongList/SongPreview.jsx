import { utilService } from "../../services/util.service";
import { Thumbnail } from "../Thumbnail";


export function SongPreview({song = stationService.getEmptySong(), number = 0}) {

  const title = song.title.split("-");
  const authorName = title[0].trim();
  const songName = title[1].trim();

  return <article className="song-preview song-hover pv-8 fs13">
    <span className="flex align-center justify-center">{number}</span>
    <span className="title-wrapper flex row align-center justify-start gap-12">
      <Thumbnail url={song.imgUrl} />
      <span className="flex column">
        <span className="song-name fs16">{songName}</span>
        <span>{authorName}</span>
      </span>
    </span>
    <span className="song-date-added flex align-center justify-start">{utilService.formatDate(song.addedAt)}</span>
    <span className="flex align-center justify-center">5:55</span>
  </article>
}