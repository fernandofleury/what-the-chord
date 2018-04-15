import React, { PureComponent } from 'react';
import Home from '../../pages/Home';
import Game from '../../pages/Game';
import Logo from '../../components/Logo';
import { PAGES } from '../../constants';
import './App.css';

class App extends PureComponent {
  state = {
    currentPage: PAGES.home,
  };

  changePage = (page) => this.setState({
    currentPage: page
  });

  render() {
    const { currentPage } = this.state;

    return (
      <React.Fragment>
        <Logo />
        {currentPage === PAGES.home && <Home changePage={this.changePage} />}
        {currentPage === PAGES.game && <Game changePage={this.changePage} />}
      </React.Fragment>
    );
  }
}

export default App;
