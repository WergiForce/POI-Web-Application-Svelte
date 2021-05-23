<script lang="ts">
    import { onMount, getContext } from "svelte";
    const geoheritageService = getContext("GeoheritageService");

    let themeList = [];
    let siteName = "";
    let lat = 0;
    let long = 0;
    let description = "";
    let selectedTheme = 0;
    let errorMessage = "";

    onMount(async () => {
        themeList = await geoheritageService.getThemes()
    });

    async function logGeosite() {
        const success = await geoheritageService.logGeosite(siteName, lat, long, description, themeList[selectedTheme])
        if (success) {

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
                <label class="uk-form-label" for="form-stacked-text">Latitude</label>
                <div class="uk-form-controls">
                    <input bind:value={lat} class="uk-input" type="number" name="lat" placeholder="Latitude" />
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Longitude</label>
                <div class="uk-form-controls">
                    <input bind:value={long} class="uk-input" type="number" name="long" placeholder="Longitude" />
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Description</label>
                <div class="uk-form-controls">
                    <input bind:value={description} class="uk-input" type="text" name="description" placeholder="Description" />
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Select Category</label>
                <select class="uk-select" name="theme">
                    <option value="">Please select an IGH Theme</option>
                    {#each themeList as theme }
                    <option value="{theme.themeTitle}">{theme.themeNo} - {theme.themeTitle}</option>
                    {/each}
                </select>
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