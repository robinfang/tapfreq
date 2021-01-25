import React from 'react';
import { Button } from '@material-ui/core/';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { time_list: [] };
    }

    tap() {
        this.setState(state => ({
            time_list: [...state.time_list, Date.now()]
        }));
    }
    render() {
        return (
            <div className="App">
      <Button size="large" variant="contained" color="primary" onClick={this.tap}>
        Tap
      </Button>
      <p>
      {this.state.time_list}
      </p>
    </div>
        );
    }
}

export default App;