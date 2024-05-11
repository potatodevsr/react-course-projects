"use strict";

console.log('App.js is running!');
// JSX -Javascript XML
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Indecision App"), /*#__PURE__*/React.createElement("p", null, "This is some info"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item one"), /*#__PURE__*/React.createElement("li", null, "Item two")));

// Creacte a templateTwo var JSX expression 

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
