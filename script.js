var beers = [];
var switchSort = 0;

var sortBeer = function () {

    if (switchSort === 0) {
        beers.sort(function (a, b) { return a.rating - b.rating });
        switchSort = 1;
    } else if (switchSort === 1) {
        beers.sort(function (a, b) { return b.rating - a.rating });
        switchSort = 0;
    }
}

var renderBeers = function () {

    $('.beers-list').find('li').remove();
    for (let i = 0; i < beers.length; i++) {
        $('.beers-list').append('<li>' + beers[i].name + "  rated: " + beers[i].rating + '</li>');
    }
} // end of renderBeersFunction

var addBeer = function () {
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
$('.sort-beer').click(sortBeer)