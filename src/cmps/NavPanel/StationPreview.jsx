import { Link } from "react-router-dom"
import { Thumbnail } from "../Thumbnail"
export function StationPreview({station, isActiveId, onClick }) {
  
  const handleClick = (e) => {
    e.stopPropagation()
    onClick(station._id)
  }
  return (
    <article className={`station-preview station-hover  ${isActiveId ? 'station-active' : ''} bg-transparent`} onClick={() => onClick(station._id)}>
        <Link to={`/station/${station._id}`} onClick={handleClick}>
            <div className="station-image-container">
                <Thumbnail url={station.imgUrl} />
            </div>
            <div className="station-info">
                <h2>{station.name}</h2>
                <h4>Playlist • {station.createdBy.fullname} </h4>
            </div>
        </Link>

    </article>
  )
}

