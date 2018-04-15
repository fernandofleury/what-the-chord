import React, { PureComponent } from 'react';
import Home from '../../pages/Home';
import Game from '../../pages/Game';
import Logo from '../../components/Logo';
import { PAGES } from '../../constants';
import './App.css';

class App extends PureComponent {
  state = {
    currentPage: PAGES.game,
  };

  render() {
    const { currentPage } = this.state;

    return (
      <React.Fragment>
        <Logo />
        <div className="container">
          {currentPage === PAGES.home && <Home />}
          {currentPage === PAGES.game && <Game />}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
