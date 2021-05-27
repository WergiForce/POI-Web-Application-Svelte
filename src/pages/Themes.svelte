<script>
    import ThemeList from "../components/ThemeList.svelte";
    import {navBar, mainBar, subTitle, title} from "../stores"

    title.set("Geological Survey Ireland");
    subTitle.set("All Irish Geological Heritage Themes");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-container uk-margin">
    <div class="uk-width-auto@m uk-flex-left uk-flex-middle uk-text-center" uk-grid>
        <div class="uk-width-auto">
            <ThemeList/>
        </div>
    </div>
</div>