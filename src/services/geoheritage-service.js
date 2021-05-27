import axios from "axios";
import { user } from "../stores";

export class GeoheritageService {
    themeList = [];
    geositeList = [];
    baseUrl = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        if (localStorage.geosite) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.geosite);
        }
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
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set({
                    email: email,
                    token: response.data.token
                });
                localStorage.geosite = JSON.stringify(response.data.token);
                return true;
            }
            return false;
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

    async signup(firstName, lastName, email, password) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            };
            const response = await axios.post(this.baseUrl + "/api/users", userDetails);
            const newUser = await response.data;
            user.set(newUser);
            return true;
        } catch (error) {
            return false;
        }
    }

    async updateSettings(firstName, lastName, email, password, id) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                _id: id
            };
            console.log(userDetails);
            const response = await axios.put(`${this.baseUrl}/api/users/${id}`, userDetails);
            const newUser = await response.data;
            user.set(newUser);
            return true;
        } catch (error) {
            return false;
        }
    }

    async logout() {
        user.set({
            email: "",
            token: ""
        });
        this.geositeList = [];
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.geosite = null;
    }
}