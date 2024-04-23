import { MusicNote } from "./icons/MusicNote";

export function StationImage({ url = "", size = "medium" }) {
  if (url)
    return (
      <div className="station-image br-0">
        <div className="aspect-ratio-box">
          <img src={url} alt="" />
        </div>
      </div>
    );
  else
    return (
      <div className={`station-image br-0`}>
        <div className="aspect-ratio-box flex align-center justify-center">
          <MusicNote />
        </div>
      </div>
    );
}
