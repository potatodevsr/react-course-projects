"use strict";

console.log('App.js is running!');
// JSX -Javascript XML
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Indecision App"), /*#__PURE__*/React.createElement("p", null, "This is some info"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item one"), /*#__PURE__*/React.createElement("li", null, "Item two")));

// create a templateTwo var JSX expression
var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Name: Chadapohn Sorakanit"), /*#__PURE__*/React.createElement("p", null, "Age: 26"), /*#__PURE__*/React.createElement("p", null, "Location: Thailand"));
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
