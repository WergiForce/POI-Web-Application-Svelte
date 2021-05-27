<script>
    import {title, subTitle, navBar, welcomeBar} from "../stores";
    import {getContext} from 'svelte';
    const geoheritageService = getContext("GeoheritageService");

    title.set("Geological Survey Ireland");
    subTitle.set("Sign up or Log in");

    navBar.set({
        bar: welcomeBar
    });
    geoheritageService.logout();
</script>

<div class="uk-container uk-margin">
    <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
        <div class="uk-width-auto@m">
            <img width="300" src="https://res.cloudinary.com/poi-web-application-v1-geoheritage/image/upload/v1616522624/image-resources/GSI-logo_tswoaw.png" />
        </div>
        <div class="uk-width-expand@m">
            <h1 class="uk-heading-small">Welcome to the GeoHeritage Site Web Application!</h1>
            <p>Discover Ireland's historical geological sites</p>
        </div>
    </div>
</div>