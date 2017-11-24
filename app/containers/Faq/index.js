/*
 * FAQ
 *
 * List all the faq
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import SideNav from 'components/SideNav';

import { Container, Col, Row } from 'reactstrap';


import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

export default class Faq extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>FAQ</title>
          <meta name="description" content="FAQ" />
        </Helmet>

        <Container >
            <Row>
                <SideNav page={'faq'}/>

                <Col xs="12" sm="12" md="8" lg="8" >
                    <H1>
                      <FormattedMessage {...messages.header} />
                    </H1>
                    <List>
                      <ListItem>
                        <ListItemTitle>
                            Tell me about yourself.
                        </ListItemTitle>
                        <p>
                          <FormattedMessage {...messages.Awho} />
                        </p>
                      </ListItem>
                      <ListItem>
                        <ListItemTitle>
                            Life philosophy?
                        </ListItemTitle>
                        <p>
                          <FormattedMessage {...messages.Ahow} />
                        </p>
                      </ListItem>
                      <ListItem>
                        <ListItemTitle>
                            Degree?
                        </ListItemTitle>
                        <p>
                          <FormattedMessage {...messages.Adegree} />
                        </p>
                      </ListItem>
                      <ListItem>
                        <ListItemTitle>
                            When?
                        </ListItemTitle>
                        <p>
                          <FormattedMessage {...messages.Awhen} />
                        </p>
                      </ListItem>

                      <ListItem>
                        <ListItemTitle>
                            What do you do?
                        </ListItemTitle>
                        <p>
                          <FormattedMessage {...messages.Awhat} />
                        </p>
                      </ListItem>
                      <ListItem>
                        <ListItemTitle>
                            Why?
                        </ListItemTitle>
                        <p>
                          <FormattedMessage {...messages.Awhy} />
                        </p>
                      </ListItem>
                      <ListItem>
                        <ListItemTitle>
                            Where are you from?
                        </ListItemTitle>
                        <p>
                          <FormattedMessage {...messages.Awhere} />
                        </p>
                      </ListItem>

                  </List>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
}
