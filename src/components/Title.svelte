<script>
    import {title, subTitle, user} from "../stores.js"
</script>

<div class="uk-width-2-3@m  uk-card uk-card-default uk-padding-small uk-visible@m">
    <div class="uk-grid">
        <div class="uk-width-1-6@m">
            <img src="https://res.cloudinary.com/poi-web-application-v1-geoheritage/image/upload/v1616522629/image-resources/GSI-Symbol_hflhdc.png" width="60" alt="img" />
        </div>
        <div class="uk-width-expand@m uk-text-left">
            <div class="title">
                {$title}
            </div>
            <div class="uk-text-muted uk-text-small">
                {$subTitle}
            </div>
            <div class="uk-text-muted uk-text-right uk-text-small">
                {$user.email}
            </div>
        </div>
    </div>
</div>