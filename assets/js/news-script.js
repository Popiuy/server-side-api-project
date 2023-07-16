
//section for api management 
var resultsDisplay = $('#resultsDisplay');
var cardTemplate = $('#entryCard');
var searchField = $('#searchInputField');
var searchTerm = '';

// Creating new cards for articles and 
var createEntries = function(apiData){
    for(var i = 0; i < apiData.response.docs.length; i++){
        //clones card element from html
        var newEntry = cardTemplate.clone();
        //add info from article
        newEntry.find('p').text(apiData.response.docs[i]['abstract'])
        newEntry.find('a').attr('href', apiData.response.docs[i]['web_url']);
        newEntry.find('h3').text(apiData.response.docs[i].headline.main)
        //remove hidden tag from cloned card element
        newEntry.attr('style','');
        resultsDisplay.append(newEntry);
    }
}

//Function for grabbing search terms and printing the results to screen
var searchDisplay = function(searchInput){

    var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchInput + '&api-key=Eulq1k1mu9GVwfHXAOmphojyaTQWGIGu'

    fetch(url)

    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data.response);
        //create new a item, make the content the abstract, and add an href
        createEntries(data);
    })
}

//listener for search field
searchField.submit(function(event){
    event.preventDefault();
    //clear previous search results
    resultsDisplay.html('');
    searchTerm = $('#search').val();
    $('#search').val('');
    searchDisplay(searchTerm);
})



//section for timer - on page load, timer starts counting for the page you're on, timer for other page 
// is displayed but not counting. Count up every second.
// on page transition, timers are stored in localStorage

//section for pagination

//section handling page transitions