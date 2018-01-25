// Loader Component that shows a Loader on screen with message provided to it through props
// By default, the message is 'Loading...'
// The loader will be visible only if the isVisible prop is set true

import React from 'react';

const Loader = ({ isVisible = false, message = 'Loading...' }) => (
  isVisible ? (
    <div>
      <div id="loaderOverlay" />
      <div id="loaderContainer">
        <div id="loader" />
        <p id="loader-message">
          <span>{message}</span>
        </p>
      </div>
    </div>
  ) : <div />
);

export default Loader;
