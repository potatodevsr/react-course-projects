console.log('App.js is running!');
// create a app objact title/subtitle
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
}

// JSX -Javascript XML
var template =
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>;

// create a templateTwo var JSX expression
var user = {
    name: 'Chadapohn',
    age: 26,
    location: 'Thailand'
}
// var userName = 'Chadapohn';
// var userAge = 26;
// var userLocation = 'Thailand';
var templateTwo =
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>;

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);