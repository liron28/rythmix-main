import { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";

import { togglePlay, playNext, playPrev } from "../../store/actions/player.action";
import { utilService } from "../../services/util.service";

import { PlayIcon } from "../icons/PlayIcon";
import { PauseIcon } from "../icons/PauseIcon";
import { PrevIcon } from "../icons/PrevIcon";
import { NextIcon } from "../icons/NextIcon";
import { SkipBackwardIcon } from "../icons/SkipBackwardIcon";
import { SkipForwardIcon } from "../icons/SkipForwardIcon";

export function PlaybackControls({ ready, isPlaying, duration, elapsedTime, handleSetTime }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (duration) {
      setProgress(elapsedTime / duration);
    }
  }, [ready, elapsedTime]);

  function handleSliderChange(ev) {
    const percent = ev.target.value;
    handleSetTime(percent * duration);
    setProgress(percent);
  }

  function handleSkip(diff) {
    let newElapsedTime = progress * duration + diff;
    newElapsedTime = newElapsedTime < 0 ? 0 : newElapsedTime;
    newElapsedTime = newElapsedTime > duration ? duration : newElapsedTime;
    handleSetTime(newElapsedTime);
    setProgress(newElapsedTime / duration);
  }

  function handlePrevClick() {
    const SECONDS_THRESHOLD = 2;
    handleSetTime(0);
    setProgress(0);
    if (progress * duration < SECONDS_THRESHOLD) {
      playPrev();
    }
  }

  return (
    <div className="playback-controls flex column align center justify-center">
      <div className="playback-buttons flex row align-center justify-center">
        <button className="skip-backward-btn flex row align-center justify-center" onClick={() => handleSkip(-15)}>
          <SkipBackwardIcon />
        </button>
        <button className="prev-btn flex row align-center justify-center" onClick={handlePrevClick}>
          <PrevIcon />
        </button>
        <button className="play-btn flex row align-center justify-center" onClick={() => togglePlay()}>
          {isPlaying && <PauseIcon />}
          {!isPlaying && <PlayIcon />}
        </button>
        <button className="next-btn flex row align-center justify-center" onClick={() => playNext()}>
          <NextIcon />
        </button>
        <button className="skip-forward-btn flex row align-center justify-center" onClick={() => handleSkip(15)}>
          <SkipForwardIcon />
        </button>
      </div>
      <div className="progress flex row align-center justify-center">
        <span className="elapsed fs12">{utilService.formatSeconds(elapsedTime)}</span>
        <Slider
          className="slider"
          min={0.0}
          max={1.0}
          step={0.001}
          value={progress}
          onChange={handleSliderChange}
          aria-labelledby="continuous-slider"
        />
        <span className="duration fs12">{utilService.formatSeconds(duration)}</span>
      </div>
    </div>
  );
}
