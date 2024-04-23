import { useState } from "react";

import Slider from "@mui/material/Slider";

import { DynamicVolumeIcon } from "../icons/DynamicVolumeIcon";

export function VolumeControls({ volume, setVolume }) {
  const [prevVolume, setPrevVolume] = useState(volume);

  function onVolumeClick() {
    if (volume == 0) {
      setVolume(prevVolume);
    } else {
      setPrevVolume(volume);
      setVolume(0);
    }
  }

  function handleChange(event) {
    setVolume(event.target.value);
  }

  return (
    <div className="volume-controls flex row align-center justify-end">
      <button className="volume-btn flex align-center justify-center" onClick={onVolumeClick}>
        <DynamicVolumeIcon volume={volume} />
      </button>
      <Slider
        className="slider"
        min={0.0}
        max={1.0}
        step={0.01}
        value={volume}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
      />
    </div>
  );
}
