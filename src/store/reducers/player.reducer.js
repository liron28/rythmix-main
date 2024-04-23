export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const ADD_SONGS_TO_QUEUE = "ADD_SONGS_TO_QUEUE";
export const CLEAR_SONG_QUEUE = "CLEAR_SONG_QUEUE";
export const PLAY_NEXT_SONG = "PLAY_NEXT_SONG";
export const PLAY_PREV_SONG = "PLAY_PREV_SONG";
export const PLAY_LAST_SONG = "PLAY_LAST_SONG";

const initialState = {
  isPlaying: false,
  currSongIdx: -1,
  songQueue: []
};

export function playerReducer(state = initialState, cmd = {}) {
  const isPlaying = state.isPlaying;
  const currSongIdx = state.currSongIdx;
  const songQueue = state.songQueue;

  switch (cmd.type) {
    case TOGGLE_PLAY:
      return {
        ...state,
        isPlaying: !isPlaying,
      };
    case ADD_SONGS_TO_QUEUE:
      return {
        ...state,
        currSongIdx: currSongIdx === -1 ? 0 : currSongIdx,
        songQueue: [...songQueue, ...cmd.songs],
      };
    case CLEAR_SONG_QUEUE:
      return {
        ...state,
        currSongIdx: -1,
        songQueue: [],
      };
    case PLAY_NEXT_SONG:
      return {
        ...state,
        currSongIdx: currSongIdx < songQueue.length - 1 ? currSongIdx + 1 : currSongIdx,
      };
    case PLAY_PREV_SONG:
      return {
        ...state,
        currSongIdx: currSongIdx > 0 ? currSongIdx - 1 : currSongIdx,
      };
    case PLAY_LAST_SONG:
      return {
        ...state,
        currSongIdx: songQueue.length - 1,
      };
    default:
      return state;
  }
}
