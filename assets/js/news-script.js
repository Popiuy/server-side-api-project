
//section for api management 
var resultsDisplay = $('#resultsDisplay')
console.log(resultsDisplay)
var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=obama+ukraine&api-key=Eulq1k1mu9GVwfHXAOmphojyaTQWGIGu'

fetch(url)

.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.response);
    //create new a item, make the content the abstract, and add an href
    for(var i = 0; i < data.response.docs.length; i++){
        var newEntry = $('<div></div>');
        newEntry.attr('href', data.response.docs[i]['web_url']);
        newEntry.addClass('newEntry');
        newEntry.text(data.response.docs[i]['abstract']);
        resultsDisplay.append(newEntry);
    }
})

//section for timer - on page load, timer starts counting for the page you're on, timer for other page 
// is displayed but not counting. Count up every second.
// on page transition, timers are stored in localStorage

//section for pagination

//section handling page transitions