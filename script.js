function inIframe() {

    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

var colors = [
    '#490A3D',
    '#BD1550',
    '#E97F02',
    '#F8CA00',
    '#8A9B0F',
    '#69D2E7',
    '#FA6900',
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#77B1A9',
    '#73A857'
];

var quotes = [
    ["You only live once, but if you do it right, once is enough.", "Mae West"],
    ["I am so clever that sometimes I don't understand a single word of what I am saying.", "Oscar Wilde"],
    ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein"],
    ["The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.", "Albert Einstein"]
    ["It is our choices, Harry, that show what we truly are, far more than our abilities.", "J.K. Rowling, Harry Potter and the Chamber of Secrets"],
    ["All men who have turned out worth anything have had the chief hand in their own education.", "Walter Scott"],
    ["Trust yourself. You know more than you think you do.", "Benjamin Spock"],
    ["No one can make you feel inferior without your consent.", "Eleanor Roosevelt, This is My Story"],
    ["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "Ralph Waldo Emerson"],
    ["Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.", "H. Jackson Brown Jr., P.S. I Love You"]
];



const spinner = document.querySelector('#js-spinner');



$(document).ready(function () {
    var currentQuote = "";
    var currentAuthor = "";
    var randomquote = "";
    var randomcolor = "";


    function getQuote() {
        // // remove the "hidden" class on the spinner
        // spinner.classList.remove('hidden');
        // // disable the quote button
        // newQuoteButton.disabled = true;

        randomquote = Math.floor(Math.random() * quotes.length);

        randomcolor = Math.floor(Math.random() * colors.length);

        currentQuote = quotes[randomquote][0];
        console.log(currentQuote);
        currentAuthor = quotes[randomquote][1];
        console.log(currentAuthor);

        $('#quote').text(currentQuote);
        $('#author').text('- ' + currentAuthor);
        if (inIframe()) {
            $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=aLamm&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
        }


        // // enable the quote button
        // newQuoteButton.disabled = false;
        // // add the "hidden" class back again
        // spinner.classList.add('hidden');

    }

    getQuote();


    $('.get-quote').on('click', function () {
        getQuote();
    })

    $('.share-quote').on('click', function (even) {
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(currentQuote + " - " + currentAuthor));
    })



})
