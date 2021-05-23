<script>
    import {navBar, mainBar, subTitle, title} from "../stores"
    import GeositeForm from "../components/GeositeForm.svelte";

    title.set("Geological Survey Ireland");
    subTitle.set("Log a new site");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <img src="https://res.cloudinary.com/poi-web-application-v1-geoheritage/image/upload/v1616522629/image-resources/GSI-Symbol_hflhdc.png" width="60" alt="img" />
        </div>
    </div>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <GeositeForm/>
        </div>
    </div>
</div>