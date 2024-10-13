# Startup Specification

Have you ever wanted to look up information about a pokemon while also being able to see realtime information about that day's weather? By expanding on a training project I did to learn how to do API calls, I intend to deliver just that.
You'll be able to find all kinds of detailed info about a pokemon you search for, while also having a search history you can pull from. Additionally, a widget will update live with everything you might want to know with the weather for that day.

## Styling

![startupmockup](https://github.com/user-attachments/assets/ab58a50e-33a2-4539-b17f-cc854206994f)

### HTML/CSS

The login page and main landing page will both be structured using HTML and CSS.

### HTML Deliverable: 

HTML pages - I created two HTML pages (index.html and search.html) that will prompt the user to login or create an account and then be taken to a page where they can conduct searches

Links - I have a nav bar that allows for easy navigation between the two pages, and a link to the Simon deployment for my website (simon.pokesearch.click). I also have a footer on each page that links to my github repo.

Text - There is text instructing the user on what to do or what they're being prompted for, as well as placeholder text for where information will be populated from API calls and database info. The page will also display the user's username after they log in.

Images - I have held off on this until after I do CSS styling so I know for sure where would make sense for images to be.

DB/Login - the landing page prompts you to login or create an account so that the user's searches can be logged in a database, which will allow my most recent searches section to work.

Websocket - There is a placeholder section for the day's most popular search to populate when multiple users are using the application.

### CSS Deliverable: 

coming soon

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
