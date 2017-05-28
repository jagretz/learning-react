#??? App


###Demo
Checkout a [demo of the working application here](https://jagretz.github.io/)!

###Project Goal(s)


###Technologies
This project uses a mix of different tech including:


###Setup
*(WIP)*

1. Copy or clone project to computer.
1. Install the Node dependencies. Generally, that just means running `npm install` from the repository directory.

# Attributions


# React

* Only the "v" in mvc (view in model view controller). This makes react useful not only for new apps but for existing apps as well.
* State managment is dificult and resource intensive. With React you only need to worry about the final state of your dom.
* With React we never modifies the dom directly, instead we modify an in-memory virtual dom. The virtural dom is extermely fast. React figures out when chnages to the actual dom need to happen and makes the least amount of changes necessary to keep the state of the dom in sync with the state of the virtual dom.
* React encourages composition through the use of react components; self-contained, reusable and modular pieces of code. Components are meant to be small and reusable so they can be combined into more complex UIs.

# JSX

* Before jsx, web developers used html templates for rendering javascript. This worked but suffered one major problem; the variety of things you could apply within the templating language of your chose was always limited.
JSX on the otherhand is defined directly inside your javascript file which means you get all the functionality of javascript within your templates; you are limited only by what javascript or the framework you are using supports.
* You can write your templates with plain old javascript but it is much faster to use the jsx syntax to define your template. It is slightly different than normal html but close enough so as not to worry.
* Caveat: With jsx you can't output multiple adjacent elements without a wrapping element. This is a requirement of jsx. In other words, each component requires a wrapping element. This single element might compose the entire react component, but if you need to have more you'll need to wrap it in another html tag.  For example, if you wanted to have a title and descript you might write something like this:
```
var destination = document.querySelector("#container");
ReactDOM.render(
<h1>Header goes here</h1>
<p>Descript goes here</p>
destination
);
```
Althoguh this is valid html, it isnt' valid jsx. JSX only allows you to output a single element but that single containing element can have as many children as needed. To fix the above code you could simply wrap the prior html in a div tag:
```
ReactDOM.render(
<div>
    <h1>Header goes here</h1>
    <p>Descript goes here</p>
</div>
destination
);
* to evaluate an expression in JSX wrap it in curly braces, `{exampleExpression}`.
```

# 3. Components

@see https://facebook.github.io/react/docs/components-and-props.html

* Components are reusable js functions that output HTML (via JSX).
* Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
* Conceptually, components are JavaScript functions. They accept arbitrary inputs (called "props" in the form of an single object) and return React elements describing what should appear on the screen.
* Must return a render function. Components have been updated for ease of use so that you can use either the class-based syntax or the function-based syntax:
```
const WelcomeComponent = React.createClass({
    render: (props) => {
        <p>showing the use of props: {this.props.a} & {this.props.b}</p>
    }
});

// or function based -- generally used for stateless (or dumb) components.

function WelcomeComponent(props) {
    return <p>showing the use of props: {this.props.a} & {this.props.b}</p>;
}

// or using es6 classes

class WelcomeComponent extends React.Component {
    return(props) <p>showing the use of props: {this.props.a} & {this.props.b}</p>;
}
```
* Naming convention: Always name your components in UpperCamelCase to distinguish from other html components. eg. `<WelcomeComponent /` instead of `<welcomeComponent />`.
* `props` are defined on the component `<WelcomeComponent name="jason" number="2"/>` and are passed in via a single argument in the form of a hash `{name: "jason", number: 2}`.
* Components define a single root element; you can't define a component with ajacent siblings! Every component must be wrapped with a root element. See "Caveat" in JSX section.
* `props` are readonly and should **never** modify it's own props. This helps keep react components _pure_.

# 4. Styling in React


