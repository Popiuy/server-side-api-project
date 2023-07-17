store.set('newsTime', 0);
store.set('catTime', 0);

$('#pics').on('click', function(event){
    window.location = './assets/html/pics-results.html'
})

$('#news').on('click', function(event){
    window.location = './assets/html/news-results.html'
})
