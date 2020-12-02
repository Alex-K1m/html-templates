import 'fontsource-kumbh-sans/300-normal.css';
import 'fontsource-kumbh-sans/400-normal.css';
import 'fontsource-kumbh-sans/700-normal.css';

import { create as createJss } from 'jss';
import preset from 'jss-preset-default';
import { useContext } from 'react';
import { JssProvider, ThemeProvider } from 'react-jss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reset from 'reset-jss';

import Header from './components/Header';
import Search from './components/Search';
import Wrapper from './components/Wrapper';
import { store } from './store';
import theme from './theme';

const globalStyles = {
  '@global': {
    '*, *::before, *::after': {
      boxSizing: 'inherit',
    },

    html: {
      boxSizing: 'border-box',
      fontSize: '62.5%',
    },

    body: {
      fontFamily: 'Kumbh Sans, sans-serif',
      fontSize: '1.6rem',
    },

    'button, input': {
      fontFamily: 'inherit',
    },

    '.sr-only': {
      border: 0,
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: 1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: 1,
    },
  },
};

const jss = createJss(preset());
jss.createStyleSheet(reset).attach();
jss.createStyleSheet(globalStyles).attach();

const App = () => {
  const [state] = useContext(store);

  return (
    <JssProvider jss={jss}>
      <ThemeProvider theme={{ ...theme, colors: theme.colors[state.theme] }}>
        <Wrapper>
          <Header />
          <Router>
            <Switch>
              <Route exact path='/:id'>
                Position
              </Route>
              <Route exact path='/'>
                <Search />
              </Route>
            </Switch>
          </Router>
        </Wrapper>
      </ThemeProvider>
    </JssProvider>
  );
};

export default App;
