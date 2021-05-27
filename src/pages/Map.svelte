<script>
    import 'leaflet/dist/leaflet.css';
    import {mainBar, navBar, subTitle, title} from "../stores"
    import {LeafletMap} from '../services/leaflet-map';
    import {getContext, onMount} from "svelte";

    const geoheritageService = getContext("GeoheritageService")

    let lat = 53.1424;
    let lng = -7.6921;

    let map;
    onMount(async () => {
        const mapConfig = {
            location: {lat: lat, lng: lng},
            zoom: 8,
            minZoom: 1,
        };
        map = new LeafletMap("geosite-map", mapConfig, 'Terrain');
        map.addLayerGroup('Geosites');
        map.showZoomControl();
        map.showLayerControl();
        const geosites = geoheritageService.geositeList;
        geosites.forEach(geosite=>{
            const geositeStr = `${geosite.siteName} - ${geosite.theme.themeTitle}`;
            if (geosite.lat) {
                map.addMarker({lat: geosite.lat, lng: geosite.lng}, geositeStr, 'Geosites');
            }
        });
    });

    title.set("Geological Survey Ireland");
    subTitle.set("Map of all Geosites");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-1-1">
        <div id="geosite-map" class="ui embed" style="height:800px"></div>
    </div>
</div>