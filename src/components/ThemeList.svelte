<script>
    import {onMount, getContext} from 'svelte'
    import { GeoheritageService } from "../services/geoheritage-service";
    const geoheritageService = getContext("GeoheritageService");

    let themeList;
    onMount(async () => {
        themeList = await geoheritageService.getThemes()
    })
</script>

<h3 class="uk-heading-divider">
    Irish Geological Heritage Themes
</h3>
<div class="uk-margin uk-width-auto@m uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
    <table class="uk-table">
        <thead>
            <th>Theme Number</th>
            <th>Theme Title</th>
            <th>Theme Details</th>
        </thead>
        <tbody class="uk-text-left">
            {#if themeList}
                {#each themeList as theme}
                    <tr>
                        <td>{theme.themeNo}</td>
                        <td>{theme.themeTitle}</td>
                        <td>{theme.themeDetails}</td>
                    </tr>
                {/each}
            {/if}
        </tbody>
    </table>
</div>