import React from 'react';

import Navbar from '../components/Navbar';

class BuyPage extends React.Component {
  componentDidMount() {
    // Fetch ad and book details
  }

  render() {
    return (
      <div>
        <Navbar loggedIn="true" username="Akshay" />
        <p>Buy Page</p>
      </div>
    );
  }
}

export default BuyPage;
