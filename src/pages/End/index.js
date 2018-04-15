import React from 'react';
import { func } from 'prop-types';
import Button from '../../components/Button';
import { PAGES } from '../../constants';
import './End.css';

const End = ({ changePage }) => (
  <div className="container">
    <div className="end">
      <h1 className="title">
        <strong>Time's up!</strong>
      </h1>
      <div className="button-grid">
        <Button onClick={() => changePage(PAGES.game)}>play again</Button>
        <Button onClick={() => changePage(PAGES.home)}>go home</Button>
      </div>
    </div>
  </div>
);

End.propTypes = {
  changePage: func.isRequired,
};

export default End;
