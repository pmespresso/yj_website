import React from 'react';

import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';


function Footer() {
  return (
    <Wrapper>

      <section>
        <FormattedMessage {...messages.socialLinks}
        values={{
            github: <A href="https://github.com/yjkimjunior"> Github </A>,
            linkedin: <A href="https://linkedin.com/in/yjkim96"> Linkedin </A>,
            instagram: <A href="https://instagram.com/yjkimjunior"> Instagram </A> ,
            facebook: <A href="https://facebook.com/yjkim"> Facebook </A>,
            email: <A href="mailto:yjkimjunior@berkeley.edu"> Email </A>
        }} />
      </section>

      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://instagram.com/yjkimjunior">YJ</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
