<script>
    import GeositeList from "../components/GeositeList.svelte";
    import {navBar, mainBar, subTitle, title} from "../stores";

    title.set("Geological Survey Ireland");
    subTitle.set("Geosites Logged to Date");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-text-center" uk-grit>
    <div class="uk-width-1-2@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge">
            <GeositeList/>
        </div>
    </div>
    <div class="uk-width-1-2@m">
        <img width="300" src="https://res.cloudinary.com/poi-web-application-v1-geoheritage/image/upload/v1616522629/image-resources/GSI-Symbol_hflhdc.png" />
    </div>
</div>