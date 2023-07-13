var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=Eulq1k1mu9GVwfHXAOmphojyaTQWGIGu'

fetch(url)

.then(function(response){
    console.log(response);
    response = response.json();
    console.log(response);
}

)