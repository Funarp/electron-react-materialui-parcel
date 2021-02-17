import React from "react";
import ReactDOM from "react-dom";

import 'fontsource-roboto';

import Button from '@material-ui/core/Button';

// Uncomment when using IPC
// const { ipcRenderer } = window.require('electron');


function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));