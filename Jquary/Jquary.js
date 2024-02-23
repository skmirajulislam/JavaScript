/*

Query is a lightweight, "write less, do more", JavaScript library.

The purpose of jQuery is to make it much easier to use JavaScript on your website.

jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.

*/

// Normal Js fetching Dom

// const para1 = document.querySelector('#para1');
// para1.textContent = 'Welcome to Jquery';

// IN Jquery it returns Jquery object not an dom object

$('#para1').html('Welcome to Jquery');
$('#para2').text('Jquery');
$('#para0').hide(); // remove or hide dom

/*
   function $(query){
      return document.querySelector(query);
   }

   its just understanding real not work like that
*/

const width = $('#para1').width(); // get width
console.log(width)

const height = $('#para1').height(); // get height
console.log(height)

$('#para1').width('1000px'); // set width

$('#para1').height('100px'); // set height


$('h1').html('Hello Guys'); // tag select

// JQuery object // its having lots of feature

const jQobj = $('p');

console.log(jQobj);

console.log(jQobj.eq(1)); // no 1 index para selected return jquery object

const Jqobj = jQobj.eq(1)

Jqobj.html('Welcome to Jquery With Miraj')


// how to return Dom object ?

const domObj = jQobj[1];
console.log(domObj) // converted into dom object
domObj.textContent = 'Welcome to Jquery With Miraj';

// select multiple element

const div = $('div.box-id');
div.text('i am selected by mapping');

// CSS use 

div.css('color', 'red');
$('p').css('color', 'green');

$('h1').css({ //multiple css its accorinding JQcss
    fontSize: '90px',
    color: 'blue'
});

$('.box').css({ //multiple css its accorinding JQcss
    height: '100px',
    width: '100px',
    backgroundColor: 'cyan',
    "margin-top": '20px'// or we can use original css in Jquery rather then keywords
});

// Event handeling through Jquery

// $('.box').click(()=>{
//     alert('Clicked through Jquery'); // normal
// })


$('.box').on('click', () => {
    const Hg = $('.box');
    Hg.height('200px');
    Hg.width('200px');
    alert('Clicked through Jquery Evnthandeler'); // addEventlisener copy in Jquery
})

$('a').on('click', (evntObj) => {
    evntObj.preventDefault()
    alert('Clicked But operation stopped'); // addEventlisener copy in Jquery
})


// Jquery has 2 more liberary {jquery ui} and {jquery mobile}
// for ui design its is more effective and developement also.