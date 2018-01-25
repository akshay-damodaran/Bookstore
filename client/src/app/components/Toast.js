import React from 'react';

const Toast = (props) => {
  if (props.show) {
    return (
      <div id="toast">
        <p
          style={styles.closeToast}

        >
          x
        </p>
        <p>{props.message}</p>
      </div>
    );
  }
  return (<div />);
};

const styles = {
  closeToast: {
    position: 'absolute',
    right: 5,
    top: 5,
    border: '1px solid black',
    padding: '0 7px',
    borderRadius: '4px',
  },
};

export default Toast;
