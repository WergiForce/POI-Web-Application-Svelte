<script>
    import Title from "./Title.svelte";
    import {navBar} from "../stores"
</script>

<div class="uk-flex uk-flex-center uk-flex-middle uk-text-center uk-grid-small" uk-grid>
    <Title title="Geoheritage Sites" subTitle="Please select an option" />
    <div>
        <ul class="uk-iconnav uk-margin-left uk-margin-right">
            {#each $navBar.bar as nav}
                <a href="{nav.link}" class="uk-card uk-card-small uk-card-hover uk-padding-small">
                    <i class="{nav.icon}" style="{nav.colour}" uk-tooltip="title: {nav.title}; pos:bottom"></i>
                </a>
            {/each}

<!--            <a href="/#/home" class="uk-card uk-card-small uk-card-hover uk-padding-small">
                <i class="fas fa-map-marked-alt fa-3x" style="color:rgb(153, 196, 74)" title="Add Site" pos="bottom" uk-tooltip></i>
            </a>

            <a href="/#/geosites" class="uk-card uk-card-small uk-card-hover uk-padding-small">
                <i class="fas fa-th-list fa-3x" style="color:rgb(63, 122, 139)" title="Geosites" pos="bottom" uk-tooltip></i>
            </a>
            <a href="/#/themes" class="uk-card uk-card-small uk-card-hover uk-padding-small">
                <i class="fas fa-info-circle fa-3x" style="color:rgb(14, 168, 160)" title="Themes" pos="bottom" uk-tooltip></i>
            </a>
            <a href="/#/settings" class="uk-card uk-card-small uk-card-hover uk-padding-small">
                <i class="fas fa-sliders-h fa-3x" style="color:rgb(14, 168, 160)" title="Settings" pos="bottom" uk-tooltip></i>
            </a>
            <a href="/#/logout" class="uk-card uk-card-small uk-card-hover uk-padding-small">
                <i class="fas fa-sign-out-alt fa-3x" style="color:rgb(156, 70, 128)" title="Logout" pos="bottom" uk-tooltip></i>
            </a>
            -->
        </ul>
    </div>
</div>