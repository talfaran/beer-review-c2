var beers = [];

var rating = function(){

}
var renderBeers = function (){

    $('.beers-list').find('li').remove();
    for(let i = 0; i <= beers.length;i++) {
        $('.beers-list').append('<li>' + beers[i].name +  "  rated: " + beers[i].rating  + '</li>');
    }
}

var addBeer = function (){
    var nameOfBeer = $('#nameBeer').val();
    var nameOfCategory = $('.category-input').val();
    var beerRating = $('#rating').val();
    
    var beer = {
        name: nameOfBeer,
        category: nameOfCategory,
        rating: beerRating
    };

    beers.push(beer);
   
}
    
$('#submitButton').click(addBeer);
$('.render-beer').click(renderBeers);
