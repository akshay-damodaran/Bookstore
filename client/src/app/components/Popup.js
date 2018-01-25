import React from 'react';

const Popup = ({ children, closePopup = f => f, showPopup = false }) => (
  <React.Fragment>
    {showPopup &&
      <React.Fragment>
        <div id="popup-overlay" onClick={() => closePopup()} />
        <div id="popup-container">
          {children}
          <span
            id="popup-close"
            onClick={() => closePopup()}
          >
            <i className="fa fa-times fa-2x" aria-hidden="true" />
          </span>
        </div>

      </React.Fragment>
    }
  </React.Fragment>
);

export default Popup;
