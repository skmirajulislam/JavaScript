// JavaScript DOM object :-

// const heading = document.createElement('h2');
// heading.textContent = 'Hello World';
// heading.className = 'header';
// document.getElementById('root').append(heading);
// console.log('JavaScript element : ',heading);

// Resct DOM object :-

// const reactHeading = React.createElement('h1',{className:'Head', id:'reactHead', children: 'Hello React!'}); // its react element not js dom
// console.log('React element : ',reactHeading);

// ReactDOM.createRoot(document.getElementById('root')).render(reactHeading); //Virtual Dom 
// it create virtual tree and compare to original dom tree and render changes.

/* 
    its not a convinient way that's why we bulided one extension of JS structure for
    React js for fendering react functional component. always known as JSX.
    javaScriptXML or when we combine JS + HTML togethrt we get JSX
*/

// const JSX = (<h1> HELLO JSX! </h1>); 

// const JSX = <React.Fragment> 
//             <h1>Hello JSX</h1>
//             <p>Hello how are you</p>
//             </React.Fragment> // component based progmming

const JSX = <>
             <h1>Hello JSX</h1>
             <p>Hello how are you</p> 
            </>; // same as react component
ReactDOM.createRoot(document.getElementById('root')).render(JSX);

/* 
    babel translate the JSX to js object its act as an compiler interpreator
    Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. 
    Here are the main things Babel can do for you: Transform syntax.
*/