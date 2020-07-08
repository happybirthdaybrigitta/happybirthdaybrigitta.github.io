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
    ["I am beautiful in every single way!! Words cant bring me downnn", "Mbak Christina Aguilera"],
    ["Wowww really nice scarf, i like how you used it as a skirt!", "Random Auntie di National Gallery"],
    ["Ikutan sexting bareng Tata dong", "Pippo"],
    ["Goodnight Ta", "Raymond"],
    ["Sending u hugs from here and hoping that u have an awesome day cos u deserve it", "Raymond (2/11/2019 via WA)"],
    ["HEHEHEHEHEE  thank you for this taa. hopefullyy we learn from our fights yaaa jadi lebih understanding dan appreciative of each other. Semoga kamu tetep semangat jugaa in everything u doo. Stay happyy stay healthy", "Raymond (5/20/2020 via WA)"]
    ["hope u have a greeeaaaat dayyy", "Raymond All Day Errday"],
    ["Thank you for making me happy and for listening to me even when I don't", "Sappy Raymond"],
    ["Hottie", "Horny Raymond"],
    ["No matter what happens, we are proud of you!!!!", "Ibu dan Bapak (Ditafsirkan)"],
    ["You deserve to be happy!!!!", "Raymond"],
    ["Semangattttt Boiiiii, you got this", "Raymond"],
    ["You Are Enough", "The Sock from Somerset Orchard"],
    ["You only live once, but if you do it right, once is enough.", "Not Raymond Victorio"],
    ["The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.", "Not Raymond Victorio"]
    ["Trust yourself. You know more than you think you do.", "Not Raymond Victorio"],
    ["No one can make you feel inferior without your consent.", "Not Raymond Victorio"],
    ["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "Ralph Waldo Emerson"],
    ["Its not easy to be such a caring and empathetic towards everyone you know", "Raymond"],
    ["beban hidup boleh padet asal jadwal poop dan turu lancar", "naomi"],
    ["kalo bosen ketemu pasien, aku tunggu di kmart", "naomi"],
    ["Anyways i feel rlly bad about this morning ta. I guess we wanna call each other tapi selalu ga pas kalo kita mau call dan internetnya juga jelek. Sorry i came across as not trying to to call u back cos i misread ur reply and i thought u were busy with ur friends and ya i didnt wanna disturb. tapi aku tadi ngomongnya ngeselin ya, im sorry. Just reply me when u feel better ok. Wishing u lots of joy and love today too, pardon the long ass message i wanna show i care bout u and i mean it hehehe. Have a good dai Brigitta", "Raymond (7/26/2019) via WA "],
    ["hehehe dear tata, i appreciate how meskipun semalem kamu kesel kamu tetep convey your feelings in a very mature way and i really appreciate this message. thanks for making time to talk to mee ya. and thanks for waking me up this morning to talk to me. thankful for you and hope u dont get too burned out karena koas, get some resttt today biar minggu depan semangat hehehe. sorry for really showing the attention yang u deservee and hope we can work on this despite our schedules this summer. i love you tataaa. hope u forgive me too luv, hugs from moi. yeboii", "Raymond (5/10/2020) via WA"],
    ["If you can’t love yourself, how in the hell you’re gonna love somebody else}", "maybe rupaul, maybe domi"],
    ["Senandungkanlah terus lagumu ini, karena perjalananmu baru saja dimulai, kawan", "Domi’s Shoes and The Couples Company"],
    ["Thank you for making me happy and for listening to me even when I don't", "Sappy Raymond"],
    ["Anxiety makes your titty no biggy, so stop!", "Some psychologist somewhere"],
    ["If they ain’t paying your bills, pay them bitches no mind!", "Not Dominic"],
    ["kalo raymond tidak bisa memuaskan kamu, tenang masih ada aku di sini", "stefanus"],
    ["Dear Tata, you are 22 years old, 2 + 2 = 4, 4 + 4 = 8, 8 diputer jadi infinity. Wishing you an infinite number of blessings and love", "raymond's awesome song"],
    ["Ray remember to be home. It is a pity for Tata to go home so late. I am worried if she is driving too late alone. Besides, we also need to go to the church early", "Ibu Yustina (Concerned karena Remen tidak pulang pulang pas di Jogja hohoho"],
    ["Who are you with ? Make sure that you are not home too late so Tata won’t be home too late", "Concerned Ibu Yustina"],


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
