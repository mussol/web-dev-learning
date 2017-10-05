import React from 'react';
import ReactDOM from 'react-dom';

//define a simple component
class App extends React.Component {
    render() {
        return <h1>Hello!</h1>
    }
}

ReactDOM.render(<App />, document.getElementById('app'));