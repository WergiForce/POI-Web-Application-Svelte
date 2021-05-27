# Geoheritage Svelte Application

This is an application built to catalogue and view Irish Geological Heritage Sites throughout Ireland. Uses API data from the corresponding Node application

## Application Features

    - User creation, taking parameters including first name, last name, email and creating a password.
      These credentials are saved and authenticated using JWT.
    
    - User login. Use the email you signed up with and password to log in. These must match the details
      recorded.
    
    - Site creation. Irish Geological Heritage sites can be added to the database, which uses MongoDB.
      Simply enter the name of the site, the latitude and longitude of the site, a brief description and
      choose which IGH Theme it belongs to from the drop down list.

    - All sites logged are mapped and visible in the map tab.
      
    - Site views. All sites currently in the database can be viewed with all the appropriate details, along
      with the name of the person who added the site.

    - Themes is a view that displays the details behind the 16 different Irish Geological Heritage themes. These were predefined by the program so user editing is disallowed.

    - Settings is a view where a user can edit their own details. It is advised that only your name be edited
      as changing the email can cause the application to error.

    - Logout will sign the user out of the application so that a new session can commence.

## Future Development

    - Implement delete funciton

    - Introduce Image galleries

    - Introduce social aspect allowing for site commenting and rating

## Current Bugs

    - Current user updating doesn't save changes

    - Deployed Map doesn't work, map is unusable, workaround to be tested