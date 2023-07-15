
//section for api management 
var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=obama&api-key=Eulq1k1mu9GVwfHXAOmphojyaTQWGIGu'

fetch(url)

.then(function(response){
    console.log(response);
    response = response.json();
    console.log(response);
})

//section for timer - on page load, timer starts counting for the page you're on, timer for other page 
// is displayed but not counting. Count up every second.
// on page transition, timers are stored in localStorage

//section for pagination

//section handling page transitions