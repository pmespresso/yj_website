/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  licenseMessage: {
    id: 'yj_homepage.components.Footer.license.message',
    defaultMessage: 'This project is licensed under the MIT license.'
  },
  authorMessage: {
    id: 'yj_homepage.components.Footer.author.message',
    defaultMessage: ''
  },
  socialLinks: {
      id: 'yj_homepage.components.Footer.social.message',
      defaultMessage: `Follow me on {github} {linkedin} {instagram} {facebook} {email} and I'll follow you back!`
  }
});
