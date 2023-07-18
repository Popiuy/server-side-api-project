var resultsDisplay = $('#resultsDisplay');
var cardTemplate = $('#entryCard');
var searchField = $('#searchInputField');
var searchTerm = '';
var pageCounter = 0;
var pageURL = window.location.href;

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
    $('#pageCount').text('Page ' + (pageCounter + 1));


    //perform new search
    searchTerm = $('#search').val();
    $('#search').val('');
    searchDisplay(searchTerm);

    //store search info in url
    window.history.pushState( {} , '', '?q=' + searchTerm + '&page=' + pageCounter);
    //display pagination html
    $('.pagination').attr('style','');
})

//listeners for pagination: Forward uses same code as back, but increments the page counter instead
//of reducing it.
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
    //reset search results
    resultsDisplay.html('');
    $('#search').val('');

    //reloading search query with new page count
    searchDisplay(searchTerm);

    $('#pageCount').text('Page ' + (pageCounter + 1));
    //store search info in url
    window.history.pushState( {} , '', '?q=' + searchTerm + '&page=' + pageCounter);
})


$('#forward').on('click', function(){
    pageCounter++;
    resultsDisplay.html('');
    $('#search').val('');
    searchDisplay(searchTerm);
    console.log(searchTerm);
    $('#pageCount').text('Page ' + (pageCounter + 1));
    $('#back').removeClass('disabled');
    window.history.pushState( {} , '', '?q=' + searchTerm + '&page=' + pageCounter);
})

//Timer Section

var timeDisplay = document.querySelector('#newsTimer');
var counter = 0;

//on page load, update timer text from localStorage
counter = store.get('newsTime');



// formatting our timer in a more user friendly way
var toHHMMSS = function (sec_num) {
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    
    
    // adding a leading 0 digit infront the single 0 digits
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

// Update frozen timer from localStorage
//Need to get the saved time from the local storage along with it being formatted
$('#catTimer').text(toHHMMSS(store.get('catTime')));



//Update news timer every second
timer = setInterval(function(){
    timeDisplay.textContent = toHHMMSS(counter);
    counter ++;
}, 1000); 



//Allows button to stop timer, store timer info for current page, and swap to cats page
$('#cats-btn').on('click', function(){
    clearInterval(timer);
    store.set('newsTime', counter);
    window.location = './cats-results.html';
})





