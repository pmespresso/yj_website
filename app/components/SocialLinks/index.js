import React from 'react';
import { FormattedMessage } from 'react-intl';

import FontAwesome from 'react-fontawesome';

import Button from 'components/Button';

class SocialLinks extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <div>
            <FontAwesome
                name='rocket' />
        </div>
    );
  }
}

export default SocialLinks;
