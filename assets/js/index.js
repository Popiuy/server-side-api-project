//Initialize timers for new session
store.set('newsTime', 0);
store.set('catTime', 0);

//redirect links on buttons
$('#cats').on('click', function(event){
    window.location = './assets/html/pics-results.html';
})

$('#news').on('click', function(event){
    window.location = './assets/html/news-results.html';
})
