import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from '../../images/banner.jpg';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar style={{display: 'flex', flexDirection: 'column', alignItems: 'marginLeft'}}>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/mission">
            <FormattedMessage {...messages.mission} />
          </HeaderLink>
          <HeaderLink to="/faq">
            <FormattedMessage {...messages.faq} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
