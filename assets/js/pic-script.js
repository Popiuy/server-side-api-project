// section for api management
var picsUrl = 'https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true';

var input = document.querySelector("#input");
var form = document.querySelector("#form");
var resultsDisplay = document.querySelector("#resultsDisplay");
var pictureUrl = "";
var searchField = $('#searchInputField');
var pageCounter = 0;

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
    renderCatData(picInfo);
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
  var searchUrl = 'https://api.artic.edu/api/v1/artworks/search?q=' + searchInput + '&query[term][is_public_domain]=true';
  fetch(searchUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderCatData(data);
    })
    .catch(function (error) {
      console.log("Error:", error);
    });
}
//section for pagination

// section for timers

// section handling page transition