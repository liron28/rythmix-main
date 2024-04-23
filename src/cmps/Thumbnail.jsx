import { MusicNote } from "./icons/MusicNote";

export function Thumbnail({ url = "", alt = "", additionalClasses = [] }) {
  return (
    <div className={`thumbnail square-ratio w-100 h-100 br-4 ${additionalClasses.join(" ")}`}>
      {url && <img src={url} alt={alt} />}
      {!url && <MusicNote />}
    </div>
  );
}
