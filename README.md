# Startup Specification

Have you ever wanted to look up information about a pokemon while also being able to see realtime information about that day's weather? By expanding on a training project I did to learn how to do API calls, I intend to deliver just that.
You'll be able to find all kinds of detailed info about a pokemon you search for, while also having a search history you can pull from. Additionally, a widget will update live with everything you might want to know with the weather for that day.

## Styling

![startupmockup](https://github.com/user-attachments/assets/ab58a50e-33a2-4539-b17f-cc854206994f)

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

## Deliverables:

### HTML Deliverable: 

**HTML pages** - I created two HTML pages (index.html and search.html) that will prompt the user to login or create an account and then be taken to a page where they can conduct searches. I also deployed the Simon HTML at [simon.pokesearch.click](https://simon.pokesearch.click).

**Links** - I have a nav bar that allows for easy navigation between the two pages. I also have a footer on each page that links to my github repo.

**Text** - There is text instructing the user on what to do or what they're being prompted for, as well as placeholder text for where information will be populated from API calls and database info. The page will also display the user's username after they log in.

**Images** - I have held off on this until after I do CSS styling so I know for sure where would make sense for images to be.

**DB/Login** - the landing page prompts you to login or create an account so that the user's searches can be logged in a database, which will allow my most recent searches section to work.

**Websocket** - There is a placeholder section for the day's most popular search to populate when multiple users are using the application.

### CSS Deliverable: 

CSS to make the website look nice has been deployed to my production environment. The Simon CSS has also been deployed to [simon.pokesearch.click](https://simon.pokesearch.click).

**Navigation elements** - I created tabs to switch between pages in the corners of the site. I also got rid of underlines and made the links change color when the mouse hovers over them.

**Responsive to window resizing** - I used flexbox to keep all content properly centered and resized when the window is resized.

**Application elements** - each element has its own section and box that is clear to see so you know where everything will populate

**Application text content** - the same font is used throughout the website with consistent formatting

**Application images** - added images to the login page to decrease unused whitespace and make the site look better

### React Deliverable:

I converted my entire backend to use React by first bundling it with Vite, and then converting all html files I was using into jsx files that used React js functions to deploy html text as well as interactive functions. The Simon React repo has also been deployed to [simon.pokesearch.click](https://simon.pokesearch.click).

I mocked up app functionality by creating functions that would navigate between pages and display queried information in the following ways:

**React router** - I used React path routing to create a navbar that would allow for quick navigation between my login page and my app page. The login button now also takes you to the app page using routing.

**React hooks** - I used React hook functions such as useState() to accept input from the search text box and populate the box with placeholder information on whatever input you searched. Once I have my 3rd party service calls functional, the information will be pulled from a 3rd party API call rather than generic placeholder text.

**NOTE: this deliverable was *not* graded before I worked on and submitted the service deliverable. Some things may be slightly different (such as an updated Simon deployment and working API calls instead of placeholder text)**

### Service Deliverable:

I created an HTTP servce using Express and setup frontend and backend calls. I also deployed the updated Simon code to [simon.pokesearch.click](https://simon.pokesearch.click).

**Frontend served up using Express** - I followed the directions and created a service using Express similar to the Simon code, and included the necessary lines of code for it to use Express static middleware.

**Third party service calls** - the heart of the application is its use of API calls from pokeapi.co. By searching for a specific pokemon, it pulls information from that website about that pokemon and displays that info on the application page. It also informs you if you spelled something wrong by throwing an error instead of populating with weird or nonexistent information.

**Backend endpoints** - I set up a test backend endpoint at http://localhost:4000/api/test to hold test data that I sent there utilizing my service.

**Frontend calls to backend** - I have a function that pulls that testdata and displays it as placeholder text on my app for an unfinished function that will display the last searched item by *any* user on the site.
