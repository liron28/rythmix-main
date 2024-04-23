// import { Link } from "react-router-dom"
import { StationPreview } from "./StationPreview"

export function StationList({stations =[], isActiveId, onStationClick, onContextMenu  }) {

  return (
    <ul className="station-list m-0 p-0">
      {
        stations.map(station => <ul className="station-map m-0 p-0 " key={station._id} onContextMenu={(event) => onContextMenu(event, station)}>
          <StationPreview station={station}
           isActiveId={station._id === isActiveId}
           onClick={onStationClick}  />
        </ul>)
      }
    </ul>
  )
}

