
import * as configs from './../constants/Config';
import axios from 'axios';

const queryString = require('query-string');


export default class SpotifyAxios {
    static config = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + configs.API_TOKEN
        }
    }

    static getArtists(query) {
        let strParams = queryString.stringify({
            type: 'artist',
            limit: 4,
            offset: 0
        });

        let url = `${configs.BASE_URL}search?q=${query}&${strParams}`;
        return axios.get(url, this.config).catch(error => this.handleError(error))
    }
    static getOneArtist(id) {
        let url = `${configs.BASE_URL}artists/${id}`;
        return axios.get(url, SpotifyAxios.config).catch(error => this.handleError(error))
    }

    static getAblums(id) {
        let strParams = queryString.stringify({
            limit: 4,
            offset: 0
        });

        let url = `${configs.BASE_URL}artists/${id}/albums?${strParams}`;
        return axios.get(url, this.config).catch(error => this.handleError(error))
    }

    static getOneAlbum(id) {
        let url = `${configs.BASE_URL}albums/${id}`;
        return axios.get(url, SpotifyAxios.config).catch(error => this.handleError(error))
    }

    static getTracks(id) {
        let url = `${configs.BASE_URL}albums/${id}/tracks`;
        return axios.get(url, this.config).catch(error => this.handleError(error))
    }

    static handleError(error) {
        console.log(error);
    }
}