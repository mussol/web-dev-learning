import React from 'react';
import ReactDOM from 'react-dom';

//define a simple component
class App extends React.Component {
    render() {
        return <h1>Hello!</h1>
    }
}

//the above App component will be attached to the div element #app in index.html
ReactDOM.render(<App />, document.getElementById('app'));