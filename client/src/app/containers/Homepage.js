import React from 'react';

const Homepage = ({ history }) => (
  <div id="homepage-container">
    <div
      className="home-div"
      id="home-buy-div"
      onClick={() => history.push('/buy')}
    >
      <p>Buy</p>
    </div>
    <div
      className="home-div"
      id="home-sell-div"
      onClick={() => history.push('/sell')}
    >
      <p>Sell</p>
    </div>
  </div>
);

export default Homepage;
