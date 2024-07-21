import actionTypes from "../actions/actionTypes"

const initState = {
    currentSongId: null,
    isPlaying: false,
}
const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_CUR_SONG_ID:
          return {
            ...state,
            currentSongId: action.songId || null
          }
        case actionTypes.PLAY:
        return {
          ...state,
          isPlaying: action.flag
        }
        default:
            return state;
    }
}

export default musicReducer