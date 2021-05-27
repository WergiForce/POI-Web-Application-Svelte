<script>
    import {getContext, onMount} from 'svelte'

    const geoheritageService = getContext("GeoheritageService");
    let geositeList = [];

    onMount(async () => {
        geositeList = await geoheritageService.getGeosites();
    });
</script>

<h3 class="uk-heading-divider">Geological Heritage Site List</h3>
<div class="uk-margin uk-width-auto@m uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
    <table class="uk-table">
        <thead>
        <th>Title</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th>Description</th>
        <th>IGH Theme</th>
        <th>Added By</th>
        </thead>
        <tbody class="uk-text-left">
            {#each geositeList as geosite}
                <tr>
                    <td>{geosite.siteName}</td>
                    <td>{geosite.lat}</td>
                    <td>{geosite.long}</td>
                    <td>{geosite.description}</td>
                    <td>{geosite.theme.themeTitle}</td>
                                        <td>{geosite.geologist.firstName} {geosite.geologist.lastName}</td>
                    <!--
                                                                               <td>
                                                                                   <a href="/gallery/{{_id}}" class="uk-card uk-card-small uk-card-hover" >
                                                                                       <i class="fas far fa-images fa-2x" pos="top" title="open gallery" uk-tooltip></i>
                                                                                   </a>
                                                                               </td>
                                                                               <td>
                                                                                   <a href="/update-site/{{_id}}" class="uk-card uk-card-small uk-card-hover">
                                                                                       <i class="fas far fa-edit fa-2x" title="Edit Site" uk-tooltip></i>
                                                                                   </a>
                                                                               </td>
                                                                               <td>
                                                                                   <a href="/delete-site/{{_id}}" class="uk-card uk-card-small uk-card-hover" >
                                                                                       <i class="fas far fa-trash fa-2x uk-position-relative uk-position-right " title="Delete Site" uk-tooltip></i>
                                                                                   </a>
                                                                               </td> -->
                </tr>
            {/each}
        </tbody>
    </table>
</div>