<script lang="ts">
    import {mainBar, navBar, subTitle, title} from "../stores";
    import SettingsForm from "../components/SettingsForm.svelte";

    title.set("Geological Survey Ireland");
    subTitle.set("Edits and then save your settings");

    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <img width="300" src="https://res.cloudinary.com/poi-web-application-v1-geoheritage/image/upload/v1616522629/image-resources/GSI-Symbol_hflhdc.png" />
    </div>
    <div class="uk-width-1-2@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge">
            <h3 class="uk-card-title uk-text-center">Edit any entry and press save</h3>
            <SettingsForm/>
        </div>
    </div>
</div>
