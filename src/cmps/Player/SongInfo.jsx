import { useEffect, useState } from "react";
import { Thumbnail } from "../Thumbnail";
import { searchService } from "../../services/search.service";

export function SongInfo({ songId }) {
  const [songTitle, setSongTitle] = useState("");
  const [authorTitle, setAuthorTitle] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  useEffect(() => {
    if (songId) {
      getSongDetails();
    }
  }, [songId])

  async function getSongDetails() {
    const songInfo = await searchService.getSongInfo(songId);
    if (songInfo) {
      setSongTitle(songInfo.songTitle);
      setAuthorTitle(songInfo.authorTitle);
      setThumbnailUrl(songInfo.thumbnailUrl);
    }
  }

  return (
    <div className="song-info flex row align-center">
      <Thumbnail url={thumbnailUrl} />
      <div className="title-wrapper flex column">
        <span className="song-title fs14">{songTitle}</span>
        <span className="author-title fs12">{authorTitle}</span>
      </div>
    </div>
  );
}
