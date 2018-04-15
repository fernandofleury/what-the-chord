import React from 'react';
import { func } from 'prop-types';
import Ruleset from '../../components/Ruleset';
import Button from '../../components/Button';
import { PAGES } from '../../constants';
import './Home.css';

const Home = ({ changePage }) => (
  <div className="container auto">
    <div className="home">
      <h1 className="title">
        Test your <strong>chord</strong> skills
      </h1>
      <Button onClick={() => changePage(PAGES.game)}>start already</Button>
      <Ruleset />
    </div>
  </div>
);

Home.propTypes = {
  changePage: func.isRequired,
};

export default Home;
