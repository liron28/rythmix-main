import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

import { setLastPlayedSong, playNext, playPrev } from "../../store/actions/player.action";

import { PlaybackControls } from "./PlaybackControls";
import { VolumeControls } from "./VolumeControls";
import { SongInfo } from "./SongInfo";

export function Player() {
  const songQueue = useSelector((storeState) => storeState.playerModule.songQueue);
  const currSongIdx = useSelector((storeState) => storeState.playerModule.currSongIdx);
  const isPlaying = useSelector((storeState) => storeState.playerModule.isPlaying);

  const [ready, setReady] = useState(false);
  const [duration, setDuration] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [volume, setVolume] = useState(1.0);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!songQueue.length) {
      setLastPlayedSong();
    }
  }, []);

  function handleSetTime(desiredTime) {
    if (desiredTime >= 0 || desiredTime <= duration) {
      setElapsedTime(desiredTime);
      playerRef.current.seekTo(desiredTime);
    }
  }

  const currSongId = songQueue[currSongIdx];

  return (
    <section className="player-panel">
      <SongInfo songId={currSongId}/>
      <PlaybackControls
        ready={ready}
        isPlaying={isPlaying}
        duration={duration}
        elapsedTime={elapsedTime}
        handleSetTime={handleSetTime}
      />
      <VolumeControls volume={volume} setVolume={setVolume} />
      <ReactPlayer
        ref={playerRef}
        url={`https://www.youtube.com/watch?v=${currSongId}`}
        width="0"
        height="0"
        playing={isPlaying}
        volume={volume}
        onReady={() => setReady(true)}
        onDuration={(duration) => setDuration(duration)}
        onProgress={({ playedSeconds }) => setElapsedTime(playedSeconds)}
      />
    </section>
  );
}
