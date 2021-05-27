<script>
    import GeositeList from "../components/GeositeList.svelte";
    import {navBar, mainBar, subTitle, title} from "../stores";

    title.set("Geological Survey Ireland");
    subTitle.set("Geosites Logged to Date");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-width-auto@m uk-flex-left uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-auto">
        <div >
            <GeositeList/>
        </div>
    </div>
</div>