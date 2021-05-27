<script lang="ts">
    import { onMount, getContext } from "svelte";
    const geoheritageService = getContext("GeoheritageService");
    import Coordinates from "./Coordinates.svelte";

    export let justLogged;

    let themeList = [];
    let siteName = "";
    export let lat = 0.0;
    export let lng = 0.0;
    let description = "";
    let selectedTheme=0;
    let errorMessage = "";

    onMount(async () => {
        themeList = await geoheritageService.getThemes()
    });

    async function logGeosite() {
        const success = await geoheritageService.logGeosite(siteName, lat, lng, description, themeList[selectedTheme])
        if (success) {
            if (justLogged) justLogged(siteName, themeList[selectedTheme])
        } else {
            errorMessage = "Log not completed - some error occurred";
        }
    }
</script>

<form on:submit|preventDefault={logGeosite} class="uk-form-stacked uk-text-left">
    <div class="uk-grid uk-grid-stack">
        <div class="uk-width-1-1@m">
            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Site Name</label>
                <div class="uk-form-controls">
                    <input bind:value={siteName} class="uk-input" id="form-stacked-text" type="text" name="siteName" placeholder="Site Name" />
                </div>
            </div>
            <div class="uk-margin">
                <Coordinates bind:lat={lat} bind:lng={lng}/>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Description</label>
                <div class="uk-form-controls">
                    <input bind:value={description} class="uk-input" type="text" name="description" placeholder="Description" />
                </div>
            </div>
            <div class="uk-margin uk-text-left">
                <div class="uk-form-label">Select Theme</div>
                <div class="uk-form-controls ">
                    {#each themeList as theme, i}
                        <label> <input bind:group={selectedTheme} value={i} class="uk-radio" type="radio" name="theme"/>
                            {theme.themeNo} - {theme.themeTitle}
                        </label> <br>
                    {/each}
                </div>
            </div>
            <div class="uk-margin uk-text-center">
                <button class="submit uk-button uk-button-primary uk-button-large uk-width-auto">Submit</button>
            </div>
            {#if errorMessage}
                <div class="uk-text-left uk-text-small">
                    {errorMessage}
                </div>
            {/if}
        </div>
    </div>
</form>