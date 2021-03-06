import React from 'react';
import { func, objectOf, bool } from 'prop-types';
import Ruleset from '../../components/Ruleset';
import Button from '../../components/Button';
import { PAGES } from '../../constants';
import './Home.css';

const Home = ({ changePage, changeQualities, qualities }) => (
  <div className="container auto">
    <div className="home">
      <h1 className="title">
        Test your <strong>chord</strong> skills
      </h1>
      <Button onClick={() => changePage(PAGES.game)}>start already</Button>
      <Ruleset changeQualities={changeQualities} qualities={qualities} />
    </div>
  </div>
);

Home.propTypes = {
  changePage: func.isRequired,
  changeQualities: func.isRequired,
  qualities: objectOf(bool),
};

export default Home;
