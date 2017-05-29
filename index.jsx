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

    // @component
    function Display(props) {
        return (
            <div>
                <p>{props.color}</p>
                <p>{props.num}</p>
                <p>{props.size}</p>
            </div>
        );
    };

    // @component Label has-a Display
    // Exapmle using the more concise function syntax
    function Label(props) {
        return (
            <Display {...props} />
        );
    }

    // @component Shirt has-a Label
    // Example using the class syntax
    class Shirt extends React.Component {
        render() {
            return (
            <Label {...this.props} />
            );
        }
    };

    ReactDOM.render(
        // The JSX to render
        <section>
            <Shirt color="steelblue" num="3.14" size="medium" />
        </section>,
        // Place the rendered JSX in here
        document.querySelector("#container")
    );

  }());
  </script>
</body>

</html>
