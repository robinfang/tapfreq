import React from 'react';
import { Button } from '@material-ui/core/';
import './App.css';

const tapFreq = (time_list) => {
    if (time_list.length >= 2) {
        const last_ten = time_list.slice(-11)
        const start = last_ten[0]
        const end = last_ten[last_ten.length-1]
        const interval = (end - start) / (last_ten.length-1)  /1000
        console.log(interval)
        return 60 / interval
    }else{
      return "No enough tap."
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { time_list: [] };
        this.tap = this.tap.bind(this);
    }

    tap() {
        window.navigator.vibrate(200);
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
      <h1>
      {tapFreq(this.state.time_list)}
      </h1>
    </div>
        );
    }
}

export default App;