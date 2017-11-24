import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import NavBar from './NavBar.js';
import messages from './messages';

import HeaderLink from 'components/HeaderLink';
import SocialLinks from 'components/SocialLinks';

import FontAwesome from 'react-fontawesome';

class NavButtons extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar style={{display: 'flex', flexDirection: 'column', alignItems: 'marginLeft'}}>
          <HeaderLink to="/" activeClassName='active' {...this.props} >
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/philosophy">
            <FormattedMessage {...messages.philosophy} {...this.props} />
          </HeaderLink>
          <HeaderLink to="/faq">
            <FormattedMessage {...messages.faq} {...this.props} />
          </HeaderLink>

          <SocialLinks />
        </NavBar>
      </div>
    );
  }
}

export default NavButtons;
