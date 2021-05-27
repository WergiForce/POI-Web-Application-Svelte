<script>
  import { setContext } from "svelte";
  import {GeoheritageService} from "./services/geoheritage-service";
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Themes from "./pages/Themes.svelte"
  import Geosites from "./pages/Geosites.svelte"
  import logGeosite from "./pages/logGeosite.svelte";
  import Map from "./pages/Map.svelte";
  import Settings from "./pages/Settings.svelte";
  import Navigator from "./components/Navigator.svelte";
  import Router from "svelte-spa-router";

  setContext("GeoheritageService", new GeoheritageService("https://shielded-hamlet-17254.herokuapp.com/"));

  let routes = {
    "/" : Main,
    "/login": Login,
    "/signup": Signup,
    "/themes": Themes,
    "/geosites": Geosites,
    "/logGeosite": logGeosite,
    "/map": Map,
    "/settings": Settings,
    "/logout": Main
  }
</script>

<div class="uk-container">
  <Navigator/>
  <Router {routes}/>
</div>