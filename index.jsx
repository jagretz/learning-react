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
  (function(){

    class LightningCounter extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                strikes: 0
            }
        }
        // getInitialState is not used with ESNext, instead define the state inside your class constructor
        // getInitialState() {
        //     return { strikes: 0 }
        // }
        timerTick() {
            this.setState({ strikes: this.state.strikes + 100 })
        }
        componentDidMount() {
            // esNext class based syntax does not support reacts auto-bind feature. To achieve this use either
            // the functions `.bind()` function or use Reacts `createReactClass()` syntax.
            // @see https://facebook.github.io/react/docs/react-without-es6.html#autobinding
            setInterval(this.timerTick.bind(this), 1000);
        }
        render() {
            const counterStyle = {
                color: "#66FFFF",
                fontSize: 50
            };

            return (
                <h1 style={counterStyle}>{this.state.strikes.toLocaleString()}</h1>
            );
        }
    };

    class LightningCounterDisplay extends React.Component {
        render() {
            var commonStyle = {
                margin: 0,
                padding: 0
            };

            var divStyle = {
                width: 250,
                textAlign: "center",
                backgroundColor: "#020202",
                padding: 40,
                fontFamily: "sans-serif",
                color: "#999999",
                borderRadius: 10
            };

            var textStyles = {
                emphasis: {
                    fontSize: 38,
                    ...commonStyle
                },
                smallEmphasis: {
                    ...commonStyle
                },
                small: {
                    fontSize: 17,
                    opacity: 0.5,
                    ...commonStyle
                }
            };

            return (
                <div style={divStyle}>
                    <LightningCounter/>
                    <h2 style={textStyles.smallEmphasis}>LIGHTNING STRIKES</h2>
                    <h2 style={textStyles.emphasis}>WORLDWIDE</h2>
                    <p style={textStyles.small}>(since you loaded this example)</p>
                </div>
            );
        }
    };

    ReactDOM.render(
        // The JSX to render
        <section>
            <LightningCounterDisplay />
        </section>,
        // Place the rendered JSX in here
        document.querySelector("#container")
    );

  }());
  </script>
</body>

</html>
