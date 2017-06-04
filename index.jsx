<!DOCTYPE html>
<html>

<head>
  <title>React! React! React!</title>
  <script src="https://unpkg.com/react@latest/dist/react.js"></script>
  <script src="https://unpkg.com/react-dom@latest/dist/react-dom.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>

  <link rel="stylesheet" type="text/css" href="./styles.css">
</head>

<body>
  <div id="container"></div>

  <script type="text/babel">
var destination = document.querySelector("#container");

class Counter extends React.Component {
    render() {
        return (
            <div className="text">
                {this.props.display}
            </div>
        );
    }
};

class CounterParent extends React.Component {
    // Within es classes, we replace getInitialState with the constructor function and
    // pass the props arguments to the parent (super) class.
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        // If we don't execute this line of code, the value `this` inside the `increase` func would refer to
        // the element the event was triggered on.
        this.increase = this.increase.bind(this);
    }
    //
    increase(event) {
        let count = this.state.count;

        if (event.shiftKey) {
            count += 10;
        } else {
            count += 1;
        }

        this.setState({
            count
        });
    }
    //
    render() {
        return (
            <div className="bg">
                <Counter display={this.state.count} />
                {/* Events won't work when applied directly to components!
                <ComponentName className="btn" onClick={this.increase} /> */}
                <AddButton clickHandler={ this.increase } />
            </div>
        );
    }
};

class AddButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <button onClick={ this.props.clickHandler } className="btn">+</button>
    }
}

ReactDOM.render(
    <div>
        <CounterParent/>
    </div>,
    destination
);

  </script>
</body>

</html>
