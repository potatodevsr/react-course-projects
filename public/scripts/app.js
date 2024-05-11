"use strict";

console.log('App.js is running!');
// create a app objact title/subtitle
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer'
};

// JSX -Javascript XML
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item one"), /*#__PURE__*/React.createElement("li", null, "Item two")));

// create a templateTwo var JSX expression
var user = {
  name: 'Chadapohn',
  age: 26,
  location: 'Thailand'
};
// var userName = 'Chadapohn';
// var userAge = 26;
// var userLocation = 'Thailand';
var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.name), /*#__PURE__*/React.createElement("p", null, "Age: ", user.age), /*#__PURE__*/React.createElement("p", null, "Location: ", user.location));
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
