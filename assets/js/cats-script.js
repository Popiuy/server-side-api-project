// JavaScript section for api management
var picsUrl = 'https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true';
var input = document.querySelector("#search");
var form = document.querySelector("#searchInputField");
var resultsDisplay = document.querySelector("#resultsDisplay");
var searchTerm = "cats"; // Initialize with default search term "cats"
var pictureUrl = "";
var searchField = $('#searchInputField');
var pageCounter = 1;
var pageURL = window.location.href;

function pullPicture(url) {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function (picInfo) {
      pictureUrl = "https://www.artic.edu/iiif/2/" + picInfo.data.image_id + "/full/843,/0/default.jpg";
      printPicture(pictureUrl);
      console.log(pictureUrl);
    });
}

function printPicture(url) {
  var newPicture = document.createElement("img");
  newPicture.setAttribute("src", url);
  resultsDisplay.append(newPicture);
}

function renderCatData(data) {
  var catList = data.data;
  for (var i = 0; i < catList.length; i++) {
    var currentCatData = catList[i];
    var catDataEl = document.createElement("div");
  }
}

// fetch call to return information from the API
fetch(picsUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (picInfo) {
    console.log(picInfo);
    for (var i = 0; i < picInfo.data.length; i++) {
      pullPicture(picInfo.data[i].api_link);
    }
  })
  .catch(function (error) {
    console.log("Error:", error);
  });

// event listener to check what the user is interested in
$('#form').submit(function(event) {
  event.preventDefault();
  var searchTerm = $('#input').val();
  $('#input').val('');
  fetchData(searchTerm);
});

// function to handle the information we returned and append api_link to the page
function fetchData(searchInput) {
  var searchUrl = 'https://api.artic.edu/api/v1/artworks/search?q=' + searchInput + '&query[term][is_public_domain]=true&limit=10&page=' + pageCounter;
  fetch(searchUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (picInfo) {
    console.log(picInfo);
    for (var i = 0; i < picInfo.data.length; i++) {
      pullPicture(picInfo.data[i].api_link);
    }
  })
  .catch(function (error) {
    console.log("Error:", error);
  });
}

//Timer Section

var timeDisplay = document.querySelector('#catTimer');
var counter = 0;
//on page load, update timer text from localStorage


counter = store.get('catTime');

// Update frozen timer from localStorage
$('#newsTimer').text(store.get('newsTime'));

//Update news timer every second
var timer = setInterval(function() {
  timeDisplay.textContent = counter;
  counter++;
}, 1000);

//Allows button to stop timer, store timer info for current page, and swap to news page
$('#news-btn').on('click', function() {
  clearInterval(timer);
  store.set('catTime', counter);
  window.location = './news-results.html';
});

//listeners for pagination Forward uses same code as back, but increments the page counter instead
//of reducing it.
$('#back').on('click', function() {
  //stopping the back button from working when on page 1
  if (pageCounter === 0) {
    return;
  }
  //making the back button visibly unusable when on page 1
  else if (pageCounter === 1) {
    $('#back').addClass('disabled');
  }

  pageCounter--;
  //reset search results
  $('#resultsDisplay').html('');
  $('#search').val('');

  //reloading search query with new page count
  fetchData(searchTerm);

  $('#pageCount').text('Page ' + (pageCounter + 1));
  //store search info in url
  window.history.pushState({}, '', '?q=' + searchTerm + "&limit=100" ,'&page='       + pageCounter);
});

$('#forward').on('click', function(){
  pageCounter++;
  $('#resultsDisplay').html('');
  $('#search').val('');
  fetchData(searchTerm);
  console.log(searchTerm);
  $('#pageCount').text('Page ' + (pageCounter + 1));
  $('#back').removeClass('disabled');
  window.history.pushState({}, '', '?q=' + searchTerm + "&limit=100" ,'&page=' + pageCounter);
});

//Timer Section

var timeDisplay = document.querySelector('#catTimer');
var counter = 0;
//on page load, update timer text from localStorage
counter = store.get('catTime');


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
$('#newsTimer').text(toHHMMSS(store.get('newsTime')));


//Update news timer every second
var timer = setInterval(function() {
  timeDisplay.textContent = toHHMMSS(counter);
  counter++;
}, 1000);

//Allows button to stop timer, store timer info for current page, and swap to news page
$('#news-btn').on('click', function() {
  clearInterval(timer);
  store.set('catTime', counter);
  window.location = './news-results.html';
});
