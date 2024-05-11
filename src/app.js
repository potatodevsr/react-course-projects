console.log('App.js is running!');
// JSX -Javascript XML
var template =
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>;

// create a templateTwo var JSX expression
var templateTwo =
    <div>
        <h1>Name: Chadapohn Sorakanit</h1>
        <p>Age: 26</p>
        <p>Location: Thailand</p>
    </div>;

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);