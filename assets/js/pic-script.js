// section for api management
var picsUrl = 'https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true'

fetch(picsUrl)

.then(function(response){
    console.log(response);
    response = response.json();
    console.log(response);
})

chroma({ h:120, s:1, l:0.75});
//section for pagination

// section for timers

// section handling page transition