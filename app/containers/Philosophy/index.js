/**
 *
 * Mission
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import SideNav from 'components/SideNav';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { compose } from 'redux';

import H1 from 'components/H1';

import { Container, Col, Row } from 'reactstrap';

export class Philosophy extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <div>
            <Helmet>
                <title>Philosophy</title>
                <meta name="description" content="My life philosophy explained in a blog post" />
            </Helmet>

            <Container>
                <Row>
                    <SideNav page={'philosophy'} />

                    <Col xs='12' sm='12' md='8' lg='8' style={{overflow: 'scroll'}}>
                        <H1>My Philosophy of Life</H1>

                        <div style={{padding: '20px'}}>
                            <p> I was born with a spoon in my mouth.</p>
                            <p>
                                Now, it wasn't quite so fancy. There's not a speck of silver on this spoon - stainless steel at best.
                            </p>

                            <p>
                                But I have never worried about how to get my next meal,
                                nor will I graduate college with student debt. I've been blessed to have enough leisure and abundance to
                                afford to ponder such things as the likelihood of my being born into such fortunate
                                circumstances.
                            </p>
                            <p>
                                Whether our purpose (either one God given or realized retrospectively by a post-human civilizaion)
                                is to expand the light of human consciousness, to uncover all the mysteries of our world,
                                or nothing at all, it seems rational to conclude that it is the
                                <b> duty</b> (not a choice) for people born to a certain level of privilege to expend much (perhaps proportional to their privilege) of each of
                                their life's energy into improving the lives of those who were less fortunate in the genetic lottery, i.e. the golden rule.
                            </p>

                            <p><b>This, I believe, is the rightful attitude of a citizen of democratic nations.</b></p>

                            <p>It is downright impossible for any implementation of democracy to approach its ideal if its citizens are apathetic, ungrateful, and fat.Maybe not the last bit, but it drives home the point I'm making.</p>
                        </div>

                    </Col>
                </Row>
            </Container>

        </div>
    );
  }
}

Philosophy.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(Philosophy);
