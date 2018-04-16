import React, { PureComponent } from 'react';
import Home from '../../pages/Home';
import Game from '../../pages/Game';
import End from '../../pages/End';
import Logo from '../../components/Logo';
import { PAGES, QUALITIES } from '../../constants';
import './App.css';

class App extends PureComponent {
  state = {
    currentPage: PAGES.home,
    qualities: QUALITIES,
  };

  changePage = page =>
    this.setState({
      currentPage: page,
    });

  changeQualities = qualities =>
    this.setState({
      qualities: {
        ...this.state.qualities,
        ...qualities,
      },
    });

  render() {
    const { currentPage, qualities } = this.state;

    return (
      <React.Fragment>
        <Logo />
        {currentPage === PAGES.home && (
          <Home
            qualities={qualities}
            changeQualities={this.changeQualities}
            changePage={this.changePage}
          />
        )}
        {currentPage === PAGES.game && (
          <Game qualities={qualities} changePage={this.changePage} />
        )}
        {currentPage === PAGES.end && <End changePage={this.changePage} />}
      </React.Fragment>
    );
  }
}

export default App;
