
//section for api management 
var resultsDisplay = $('#resultsDisplay');
var cardTemplate = $('#entryCard');
var searchField = $('#searchInputField');
var searchTerm = '';
var pageCounter = 0;

// Creating new cards for articles and adding to page
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

    var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchInput + '&page=' + pageCounter + '&api-key=Eulq1k1mu9GVwfHXAOmphojyaTQWGIGu' 

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
    pageCounter = 0;
    searchTerm = $('#search').val();
    $('#search').val('');
    searchDisplay(searchTerm);
    //display pagination html
    $('.pagination').attr('style','');
})

//listener for pagination
$('#back').on('click', function(){
    //stopping the back button from working when on page 1
    if (pageCounter === 0){
        return;
    }
    //making the back button visibly unusable when on page 1
    else if (pageCounter === 1){
        $('#back').addClass('disabled');
    }
    pageCounter--;
    resultsDisplay.html('');
    $('#search').val('');
    searchDisplay(searchTerm);
    $('#pageCount').text('Page ' + (pageCounter + 1));
})


$('#forward').on('click', function(){
    pageCounter++;
    resultsDisplay.html('');
    $('#search').val('');
    searchDisplay(searchTerm);
    console.log(searchTerm);
    $('#pageCount').text('Page ' + (pageCounter + 1));
    $('#back').removeClass('disabled');
})

//section for timer - on page load, timer starts counting for the page you're on, timer for other page 
// is displayed but not counting. Count up every second.
// on page transition, timers are stored in localStorage

//on page load, update timer text from localStorage

//setInterval runs on page load
// every 1 sec:
// increases timer by 1
// updates text field on page
// stores current time in localStorage

//section for pagination

//section handling page transitions
