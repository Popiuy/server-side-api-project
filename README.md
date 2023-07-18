# Ignorance is Bliss: A Site About Doomscrolling

## Description

This is a simple site that will give you two very distinct forms of content - current news,
or pictures of cats. <br>

Our goal is to help people notice the effect that consuming content has on their mood and
wellbeing. Being an informed citizen is a stressful task in 2023, and we want to help people
find their balance.<br>

Disclaimer: Neither Derek, Ryan, or Theodore are medical experts. IiB is not intended to
diagnose, treat, or cure any disease. Talk to your doctor. 

## Usage

Visit URL and choose your path. You can switch paths any time with the buttons at the
top of the screen. <br>

The webpage will track the amount of time you spend on news versus cats. After a while, 
take note of how you feel compared to the proportions of time you've spent on each page. <br>

(In browser stat tracking will come in a future version)

## Technologies Used
- HTML
- CSS
- JavaScript
- Jquery - https://jquery.com/
- Materialize CSS - https://materializecss.com/
- Store.js  - https://github.com/marcuswestin/store.js/

## Ackowledgements
- News API provided by The New York Times - https://developer.nytimes.com
- Picture API provided by The Art Institute of Chicago - http://api.artic.edu/docs/

<!-- Create 3 HTML pages: 1 home page, then two results pages, one for each site type -->
<!-- Home Page needs:
    Header with a welcome banner that explains how the site works
    Two buttons, one for each results page -->
<!-- Each results page needs
    Header with the two options
    Input field and submit button - with an autofilled option
    Div for appending our api results
    Nav bar at the bottom to move through multiple pages of content
    Its own formatting w/ background colors, header colors, font families?
    Div with timer?
    -->

<!-- Create JS pages for each results page -->
<!-- Each results page needs
    initialization:
        (re)start timer, check local storage for existing time
        Load CSS
    Function for parsing the search input
    Function for dynamically creating html elements and then fill them with the response info, then append to page
    Function for tracking time spent on page
    Function for transitioning between pages
        stops timer, stores locally
    Function for pagination-->

<!-- Create CSS pages for each page? (Tailwind) -->

<!-- Reach for the moon -->
<!-- Additional HTML page for results -->
<!-- Asks user to rate their mood, displays time spent on each site -->
<!-- stores results, displays existing results later -->