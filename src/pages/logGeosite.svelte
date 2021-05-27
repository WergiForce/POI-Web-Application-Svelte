<script>
    import {navBar, mainBar, subTitle, title} from "../stores"
    import GeositeForm from "../components/GeositeForm.svelte";
    import {LeafletMap} from '../services/leaflet-map';
    import {onMount} from "svelte";
    import 'leaflet/dist/leaflet.css';

    let lat = 52.160858;
    let lng = -7.152420;

    title.set("Geological Survey Ireland");
    subTitle.set("Log a new site");
    navBar.set({
        bar: mainBar
    });

    let map;
    onMount(async () => {
        const mapConfig = {
            location: {lat: lat, lng: lng},
            zoom: 8,
            minZoom: 7,
        };
        map = new LeafletMap("geosite-map", mapConfig, 'Terrain');
        map.showZoomControl();
    });

    function justLogged(geosite, theme) {
        const logStr = `${theme.themeTitle} ${geosite.siteName}`;
        map.addMarker({lat: lat, lng: lng}, logStr);
        map.moveTo(12, {lat: lat, lng: lng})
    }
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <div id="geosite-map" class="ui embed" style="height:600px"></div>
        </div>
    </div>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <GeositeForm {justLogged} bind:lat={lat} bind:lng={lng}/>
        </div>
    </div>
</div>