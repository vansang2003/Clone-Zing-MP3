import actionTypes from "./actionTypes";


export const setCurSongId = (songId) => ({
    type: actionTypes.SET_CUR_SONG_ID,
    songId: songId,
})


export const play = (flag) => ({
    type: actionTypes.PLAY,
    flag: flag ,
})