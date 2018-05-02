
import * as configs from './../constants/Config';
import axios from 'axios';

const queryString = require('query-string');


export default class SpotifyAxios {
    static getConfig(token) {
        let config = null;
        config = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        return config
    }

    static getArtists(query, token) {
        let strParams = queryString.stringify({
            type: 'artist',
            limit: 4,
            offset: 0
        });

        let url = `${configs.BASE_URL}search?q=${query}&${strParams}`;
        return axios.get(url, this.getConfig(token)).catch(error => this.handleError(error))
    }
    static getOneArtist(id, token) {
        let url = `${configs.BASE_URL}artists/${id}`;
        return axios.get(url, this.getConfig(token)).catch(error => this.handleError(error))
    }

    static getAblums(id, token) {
        let strParams = queryString.stringify({
            limit: 4,
            offset: 0
        });

        let url = `${configs.BASE_URL}artists/${id}/albums?${strParams}`;
        return axios.get(url, this.getConfig(token)).catch(error => this.handleError(error))
    }

    static getOneAlbum(id, token) {
        let url = `${configs.BASE_URL}albums/${id}`;
        return axios.get(url, this.getConfig(token)).catch(error => this.handleError(error))
    }

    static getTracks(id, token) {
        let url = `${configs.BASE_URL}albums/${id}/tracks`;
        return axios.get(url, this.getConfig(token)).catch(error => this.handleError(error))
    }

    static handleError(error) {
        console.log(error);
    }
}