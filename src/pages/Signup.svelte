<script lang="ts">
    import {title, subTitle, navBar, welcomeBar} from "../stores"
    import SignupForm from "../components/SignupForm.svelte"

    title.set("Geological Survey Ireland");
    subTitle.set("Please Sign up");

    navBar.set({
        bar: welcomeBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <img width="300" src="https://res.cloudinary.com/poi-web-application-v1-geoheritage/image/upload/v1616522629/image-resources/GSI-Symbol_hflhdc.png" />
    </div>
    <div class="uk-width-1-2@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge">
            <h3 class="uk-card-title uk-text-center">Fill in your details below</h3>
            <SignupForm />
        </div>
    </div>
</div>
