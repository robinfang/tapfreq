import React from 'react';
import {Button} from '@material-ui/core/';
import './App.css';

function App() {
   const [state, setState] = React.useState({
     time_list : []
   });
   const tap = () => {
     setState({...state, time_list:[...state.time_list, Date.now()]})
   }
  return (
    <div className="App">
      <Button size="large" variant="contained" color="primary" onClick={tap}>
        Tap
      </Button>
      <p>
      {this.state.time_list}
      </p>
    </div>
  );
}

export default App;

