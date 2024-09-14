# Startup Specification

Have you ever wanted to look up information about a pokemon while also being able to see realtime information about that day's weather? By expanding on a training project I did to learn how to do API calls, I intend to deliver just that.
You'll be able to find all kinds of detailed info about a pokemon you search for, while also having a search history you can pull from. Additionally, a widget will update live with everything you might want to know with the weather for that day.

## Styling

!(startupmockup.png)

### HTML/CSS

The login page and main landing page will both be structured using HTML and CSS.

## Functionality

### Javascript

There will be a search bar to click on in order to be able to type in it.

### React

The page will update not only with real-time weather data, but the page will also update with the information on your most recent searches so you don't need to search them again.

## Service

You will search for a specific pokemon and the site will call info from https://pokeapi.co to obtain information on that pokemon. The site will also call to the Weatherstack API to get weather information and put it on the page. After making searches, the few most recent searches with all their main information will be posted on the side of the page as well for quick reference.

### Database

The page will require a login and authenticaiton system, and users will be logged in a database. Searches will also be logged for use in the recent searches section.

### Websocket data

The website will also have info on the most popular searches from other uses posted, in case you are searching for the same info other people are searching for. This will update live as other people make searches.
