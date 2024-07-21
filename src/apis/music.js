import axios from "../axios";

export const apiGetSong = (songId) => new Promise( async (resolve, reject) => {
    try {
        const response = await axios({
            url: "/song",
            method: "get",
            params: { id: songId },
        })
        resolve(response)
    } catch (error) {
        reject(error);
    }
})

export const apiGetDetailSong = (songId) => new Promise( async (resolve, reject) => {
    try {
        const response = await axios({
            url: "/infosong",
            method: "get",
            params: { id: songId },
        })
        resolve(response)
    } catch (error) {
        reject(error);
    }
})

export const apiGetDetailPlaylist = (pid) => new Promise( async (resolve, reject) => {
    try {
        const response = await axios({
            url: "/detailplaylist",
            method: "get",
            params: { id: pid },
        })
        resolve(response)
    } catch (error) {
        reject(error);
    }
})
