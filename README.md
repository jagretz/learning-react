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
"Learning React" by Kirupa Chinnathambi from which notes and examples were paraphrased from.


# React

* Only the "v" in mvc (view in model view controller). This makes react useful not only for new apps but for existing apps as well.
* State managment is dificult and resource intensive. With React you only need to worry about the final state of your dom.
* With React we never modifies the dom directly, instead we modify an in-memory virtual dom. The virtural dom is extermely fast. React figures out when chnages to the actual dom need to happen and makes the least amount of changes necessary to keep the state of the dom in sync with the state of the virtual dom.
* React encourages composition through the use of react components; self-contained, reusable and modular pieces of code. Components are meant to be small and reusable so they can be combined into more complex UIs.

h3. Breaking down UI into components

**DRY: Don't Repeat Yourself**
You can easily get carried away with compartmentalizing your application. On one hand you want to make sure you break about your UI into reusably parts, on the otherhand, we can also break them down too far. It is best to keep a happy medium between the two. The general of thumb and a common best practice is to define your component and once you notice a portion of duplication, split it out into a separate component. Many times we can do this as a pre-caution for many larger components. This best practice is known as **DRY: Don't Repeat Yourself**.
Remember, **a function should do one thing and one thing only**. It's a good idea to think the same way when defining your components.

**Break out your UI into individual parts**
A great way to break down your UI is to take a step back and see which parts would make sense to break out into reusable components. This can often lead to faster development with more flexible and reusable components right off the bat.


# JSX

* Before jsx, web developers used html templates for rendering javascript. This worked but suffered one major problem; the variety of things you could apply within the templating language of your chose was always limited.
JSX on the otherhand is defined directly inside your javascript file which means you get all the functionality of javascript within your templates; you are limited only by what javascript or the framework you are using supports.
* You can write your templates with plain old javascript but it is much faster to use the jsx syntax to define your template. It is slightly different than normal html but close enough so as not to worry.
* Caveat: JSX must have only one root node; Without a root node, the `createElement` function wouldn't know where to apply css and other values. Having multiple root nodes would break how the `createElement` function would work. It's important to remember, unlike other templating langauges, `createElement` won't provide a default wrapper html element (like a <div> tag). -- With jsx you can't output multiple adjacent elements without a wrapping element. This is a requirement of jsx. In other words, each component requires a wrapping element. This single element might compose the entire react component, but if you need to have more you'll need to wrap it in another html tag.  For example, if you wanted to have a title and descript you might write something like this:
```javascript
var destination = document.querySelector("#container");
ReactDOM.render(
<h1>Header goes here</h1>
<p>Descript goes here</p>
destination
);
```
Althoguh this is valid html, it isnt' valid jsx. JSX only allows you to output a single element but that single containing element can have as many children as needed. To fix the above code you could simply wrap the prior html in a div tag:
```javascript
ReactDOM.render(
<div>
    <h1>Header goes here</h1>
    <p>Descript goes here</p>
</div>
destination
);
* to evaluate an expression in JSX wrap it in curly braces, `{exampleExpression}`.
```

* JSX also allows us to define inline CSS as well. Defining css in your jsx will transpile down to inline styles directly within your html. This has it's uses but it is generally better to keep your css outside of your react components for reusability etc.

* see pg 93 for what JSX gets turned into. Fun fact, you can write all of your render blocks in this react-style syntax (just js) but it's much mroe concise to just use JSX. We can utilize the Babel compiler to transpile JSX into Javascript.
  - JSX is only what we return from our render function.
  - Babel transpiles JSX into plain old javascript. eg

```javascript
// JSX
<div style={cardStyle}>
	<Square color={this.props.color}/>
	<Label color={this.props.color}/>
</div>

// JSX transpiled into JS
React.createElement(
	"div",
	{ style: cardStyle },
	React.createElement(Square, { color: this.props.color }),
	React.createElement(Label, { color: this.props.color })
);
```

  - You can't specify inline styles CSS via `style` html attribute like you do with normal html. Remember, you are writing jsx, not HTML. Instead, provide the `style` with an object literal, eg

```javascript
	// Defining css as inline styles via an object literal.
	// - All word combinations are converted from dash-case to lowerCamelCase.
	// - Vendor prefixes start with an Uppercase letter.
	// - Javascript reserved words are replaced with JSX equivlents: `class` becomes `className`
	<Square className="blender-bender"
		style = {
		display: flex,
		color: green,
		fontFamily: "Georgia",
		WebkitSomething: "yeah"
		/*
		 * Standard markup for javascript comments inside JSX :)
		 */

		{/* However, if i were a child of another html tag you would need to be placed inside curly braces like this one is */}
	}/>
```

  - @see list of supported tabs and attributes https://facebook.github.io/react/docs/dom-elements.html
  - Writing comments remain simiar to standard JS unless they nested inside other html tags. In that case, they must be wrapped in curly braces.
  - React components **MUST** be defined as UpperCamelCase in order to be understood during transpilation.

* JSX is +not+ HTML. It looks like and behaves (for the most part) like HTML but is only html-like.

# 3. Components

@see https://facebook.github.io/react/docs/components-and-props.html

* Components are reusable js functions that output HTML (via JSX).
* Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
* Conceptually, components are JavaScript functions. They accept arbitrary inputs (called "props" in the form of an single object) and return React elements describing what should appear on the screen.
* Must return a render function. Components have been updated for ease of use so that you can use either the class-based syntax or the function-based syntax:
```javascript
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

h3. Passing Properties

* React works in a unidirectional fashion. That is, one-way data flow; `props` can only be passed down from a parent, children cannot pass data bak to the parent.
* Each property has to be passed down manually, however as you might have thought, in a complex deeply nested component architecture this could get out of hand quickly. Utilizing the es6 spread opertator allows us to get around passing numerous propertise (and having to remember add/change every occurance). ie.
Instead of `{this.props.a} {this.props.b} {this.props.c} {this.props.d}` we can use `{...this.props}` and the children will recieve all the props!

# 4. Styling in React


# Modifying the state of your component

Each component is defined with an object called `state` that maintains the current state of your component.
React components expose 3 primary functions for modifying the state of your component:

1. `getInitialState()` runs **before** the component mounts (renders). The value returned sets the initial state of the components `state` object. eg
    ```javascript
    getInitialState() {
        return {
            name: "n/a",
            number: 0
        }
    }
    ```
    _Caveat_, `getInitialState` is not used with ESNext, instead define the state inside your class `constructor`
1. `componentDidMount()` runs **after** the component gets mounted (rendered)
1. `setState()` allows you to modify the value of the `state` object. `setState` takes a single argument, the updated value of the `state` object.

Whenever you call `setState()` **AND** _change the value of your `state` object_, reacts `render` function will be called automatically.
