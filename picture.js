var pictureUrl = 'https://api.artic.edu/api/v1/artworks/24645' 

fetch(pictureUrl)

.then(function(response){
    console.log(response);
    response = response.json();
    console.log(response);
}

)