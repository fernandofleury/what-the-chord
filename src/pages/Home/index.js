import React from 'react';
import Ruleset from '../../components/Ruleset';
import './Home.css';

const Home = () => (
  <div className="home">
    <h1 className="title">
      Test your <strong>chord</strong> skills
    </h1>
    <Ruleset />
  </div>
);

export default Home;
