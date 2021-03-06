import React from 'react';
import MainRouter from './MainRouter';
import {BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import {orange} from 'material-ui/colors';
import { hot } from 'react-hot-loader';

// Create a theme instance.
//TODO switching between Dark and before fixing the styling
const theme = createMuiTheme({
  palette: {
    primary: {
    light: '#52c7b8',
    main: '#111111',
    dark: '#00675b',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ffd95b',
    main: '#ffa726',
    dark: '#c77800',
    contrastText: '#000',
  },
    openTitle: "#111111",
    protectedTitle: orange['700'],
    type: 'light'
  }
});

const App = (props) => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  </BrowserRouter>
);

export default hot(module)(App);