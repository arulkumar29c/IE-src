

import React from 'react';
import ReactDOM from 'react-dom';

import {MuiThemeProvider,createMuiTheme} from 'material-ui/styles';

import Home from './home';
const theme = createMuiTheme({
  palette: {
    type: 'light', // Switching the dark mode on is a single property value change.
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
   <Home/>
  </MuiThemeProvider>
);




ReactDOM.render(<App/>, document.getElementById("base"));
