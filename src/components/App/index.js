import React from 'react';
import { withStateHandlers } from 'recompose';
import Home from '../../pages/Home';
import Game from '../../pages/Game';
import End from '../../pages/End';
import Logo from '../../components/Logo';
import { PAGES, QUALITIES } from '../../constants';
import hasOptions from '../../utils/hasOptions';
import './App.css';

const App = ({ currentPage, qualities, changePage, changeQualities }) => (
  <React.Fragment>
    <Logo />
    {currentPage === PAGES.home && (
      <Home
        qualities={qualities}
        changeQualities={changeQualities}
        changePage={changePage}
      />
    )}
    {currentPage === PAGES.game && (
      <Game qualities={qualities} changePage={changePage} />
    )}
    {currentPage === PAGES.end && <End changePage={changePage} />}
  </React.Fragment>
);

const enhance = withStateHandlers(
  {
    currentPage: PAGES.home,
    qualities: QUALITIES,
  },
  {
    changePage: () => page => ({ currentPage: page }),
    changeQualities: ({ qualities }) => newQualities => {
      const mergedQualities = {
        ...qualities,
        ...newQualities,
      };

      if (hasOptions(mergedQualities)) {
        return {
          qualities: {
            ...mergedQualities,
          },
        };
      }
    },
  }
);

export default enhance(App);
