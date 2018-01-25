import React from 'react';
import { Link } from 'react-router-dom';

class SideMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      active: '',
    };
  }

  toggleClass(newState) {
    if (this.state.active === newState) {
      this.setState({
        active: '',
      });
    } else {
      this.setState({
        active: newState,
      });
    }
  }

  render() {
    const icon = 'fa fa-caret-square-o-';
    return (
      <div id="side-menu">

        <p id="appname-parent">
          <a>Notifier</a>
        </p>

        <Link to='/notifier/campaigns'>
          <div>Campaigns</div>
        </Link>

      </div>
    );
  }
}

export default SideMenu;
