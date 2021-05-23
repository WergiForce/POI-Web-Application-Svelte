import axios from "axios";
import { user } from "../stores";

export class GeoheritageService {
    themeList = [];
    geositeList = [];
    baseUrl = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getThemes() {
        try {
            const response = await axios.get(this.baseUrl + "/api/themes")
            this.themeList = response.data;
            return this.themeList;
        } catch (error) {
            return [];
        }
    }

    async getGeosites() {
        try {
            const response = await axios.get(this.baseUrl + "/api/geosites")
            this.geositeList = response.data;
            return this.geositeList;
        } catch (error) {
            return [];
        }
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            user.set(response.data);
            return response.status == 200;
        } catch (error) {
            return false;
        }
    }

    async logGeosite(siteName, lat, long, description, theme) {
        try {
            const logGeosite = {
                siteName: siteName,
                lat: lat,
                long: long,
                description: description,
                theme: theme,
            };
            const response = await axios.post(this.baseUrl + "/api/themes/" + theme._id + "/geosites", logGeosite);
            return response.status == 200;
        } catch (err) {
            return false;
        }
    }
}