import React from 'react';
import { FormattedMessage } from 'react-intl';

import yj_profile from '../../images/yj_profile.jpg';

import H1 from 'components/H1';
import Img from './Img';
import HeaderLink from 'components/HeaderLink';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  dynamicallySetMessage() {
      switch (this.props.page) {
          case 'home':
            return (
                <div>
                    <H1>
                        I'm hungry...
                    </H1>
                    <p>
                        for opportunities to help fix a broken world. My passions are in Blockchain for social restructuring (cautiously optimistic), applied AI (just getting started), and alternative media (fun). I\'m a fast learner and fearless risk taker.
                    </p>
                </div>
            );
              break
          case 'faq':
                return (
                    <div>
                        <H1>
                            This really an About page in the form of a FAQ. (pronounced: pha qyu)
                        </H1>
                        <p>

                        </p>
                    </div>
                );
                  break;
          case 'mission':
                return (
                    <div>
                        <H1>

                        </H1>
                        <p>

                        </p>
                    </div>
                );
                  break;
          default:
            return (
                <div>
                    <H1>
                        I'm hungry...
                    </H1>
                    <p>
                        for opportunities to help fix a broken world. My passions are in Blockchain for social restructuring (cautiously optimistic), applied AI (just getting started), and alternative media (fun). I\'m a fast learner and fearless risk taker.
                    </p>
                </div>
            );
      }
  }

  render() {
    return (
      <div>
          <Img src={yj_profile} alt="yj profile"/>

          {
              this.dynamicallySetMessage()
          }

      </div>
    );
  }
}

export default Header;
