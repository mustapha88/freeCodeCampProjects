"use strict";

var myApp = React.createClass({
  displayName: "myApp",

  getInitialState: function getInitialState() {
    return { value: 'hello world React.js\n!!!!!!!!!!\n\n React world is awesome\n?????????\n \n### \n \nevery thing is a component\n\n\n  \nline break\n\n React use methode render() .\n\nexemple:\n\n render:\n function()\n {\n return \n<div>\n Hello \n{this.props.name}\n</div>\n;}\n\nmy favourite about it \n\n **Learn Once, Write Anywhere**' };
  },
  handleChange: function handleChange() {
    this.setState({ value: this.refs.textarea.value });
  },
  rawMarkup: function rawMarkup() {
    var md = new Remarkable();
    return { __html: md.render(this.state.value) };
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "myApp" },
      React.createElement(
        "h3",
        null,
        "Input"
      ),
      React.createElement("textarea", {
        onChange: this.handleChange,
        ref: "textarea",
        rows:"20",
        
        defaultValue: this.state.value }),
      React.createElement(
        "h3",
        null,
        "Output"
      ),
      React.createElement("div", {
        className: "content",
        dangerouslySetInnerHTML: this.rawMarkup()
      })
    );
  }
});
let mountNode = document.getElementById('mount-node')
ReactDOM.render(React.createElement(myApp, null), mountNode);