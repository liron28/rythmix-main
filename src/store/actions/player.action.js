import {
  TOGGLE_PLAY,
  ADD_SONGS_TO_QUEUE,
  CLEAR_SONG_QUEUE,
  PLAY_NEXT_SONG,
  PLAY_PREV_SONG,
} from "../reducers/player.reducer";
import { store } from "../store";
import { utilService } from "../../services/util.service";

const STORAGE_KEY = "LAST_PLAYED_SONG_ID";

export function setLastPlayedSong() {
  const songId = utilService.loadFromStorage(STORAGE_KEY);
  store.dispatch({ type: CLEAR_SONG_QUEUE });
  store.dispatch({ type: ADD_SONGS_TO_QUEUE, songs: [songId] });
}

export function addSongsToQueue(songs) {
  store.dispatch({ type: ADD_SONGS_TO_QUEUE });
}

export function setQueue(songs) {
  store.dispatch({ type: CLEAR_SONG_QUEUE });
  store.dispatch({ type: ADD_SONGS_TO_QUEUE, songs });
}

export function togglePlay() {
  store.dispatch({ type: TOGGLE_PLAY });
}

export function playNext() {
  store.dispatch({ type: PLAY_NEXT_SONG });
  const newState = store.getState();
  const { currSongIdx, songQueue } = newState.playerModule;
  utilService.saveToStorage(STORAGE_KEY, songQueue[currSongIdx]);
}

export function playPrev() {
  store.dispatch({ type: PLAY_PREV_SONG });
  const newState = store.getState();
  const { currSongIdx, songQueue } = newState.playerModule;
  utilService.saveToStorage(STORAGE_KEY, songQueue[currSongIdx]);
}
