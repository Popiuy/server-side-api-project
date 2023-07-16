
//section for api management 
var resultsDisplay = $('#resultsDisplay');
var cardTemplate = $('#entryCard');
var searchField = $('#searchInputField');
var searchTerm = '';

var createEntries = function(apiData){
    for(var i = 0; i < apiData.response.docs.length; i++){
        var newEntry = cardTemplate.clone();
        newEntry.find('p').text(apiData.response.docs[i]['abstract'])
        newEntry.find('a').attr('href', apiData.response.docs[i]['web_url']);
        newEntry.attr('style','');
        resultsDisplay.append(newEntry);
    }
}

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

searchField.submit(function(event){
    event.preventDefault();
    searchTerm = $('#search').val();
    $('#search').val('');
    searchDisplay(searchTerm);
})



//section for timer - on page load, timer starts counting for the page you're on, timer for other page 
// is displayed but not counting. Count up every second.
// on page transition, timers are stored in localStorage

//section for pagination

//section handling page transitions