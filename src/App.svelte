<script>
  import { setContext } from "svelte";
  import {GeoheritageService} from "./services/geoheritage-service";
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Themes from "./pages/Themes.svelte"
  import Geosites from "./pages/Geosites.svelte"
  import logGeosite from "./pages/logGeosite.svelte";
  import Navigator from "./components/Navigator.svelte";
  import Router from "svelte-spa-router";

  setContext("GeoheritageService", new GeoheritageService("http://localhost:4000"));

  let routes = {
    "/" : Main,
    "/login": Login,
    "/themes": Themes,
    "/geosites": Geosites,
    "/logGeosite": logGeosite,
    "/logout": Main
  }
</script>

<div class="uk-container">
  <Navigator/>
  <Router {routes}/>
</div>