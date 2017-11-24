/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import A from 'components/A';
import H1 from 'components/H1';
import H2 from 'components/H2';
import H3 from 'components/H3';

import AtPrefix from './AtPrefix';

import space_dao1 from '../../images/space_dao1.jpg';
import space_dao2 from '../../images/space_dao2.jpg';
import space_dao3 from '../../images/space_dao3.jpg';
import space_dao4 from '../../images/space_dao4.jpg';
import space_dao5 from '../../images/space_dao5.jpg';
import space_dao6 from '../../images/space_dao6.jpg';

import FontAwesome from 'react-fontawesome';

import bm_hero from '../../images/bm-hero.png';
import bm_logo from '../../images/bm-logo.png';
import bm_home from '../../images/bm-home.png';

import  { Container, Row, Col } from 'reactstrap';
import ProjectCard from 'components/ProjectCard';


import CenteredSection from './CenteredSection';
import List from 'components/List';
import ListItem from 'components/ListItem';
import SideNav from 'components/SideNav';
import Input from './Input';
import Img from 'components/Img'
import Section from './Section';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error } = this.props;

    const reposListProps = {
      loading,
      error
    };

    return (

      <article>
        <Helmet>
          <title>YJ Kim</title>
          <meta name="description" content="YJ Kim's Website of sorts..." />
        </Helmet>
        <div>

          <Container>
              <br/>
              <Row>
                <SideNav/>

                <Col xs="12" sm="12" md="8" lg="8" >
                    <Section>
                        <H2>Shenanigans Update</H2>
                        <p>October - November</p>
                    </Section>

                    <Section id="projects" style={{display: 'flex', flexDirection: 'column'}}>
                        <ProjectCard style={{flex: '1'}} complete={false} card_title={<FormattedMessage {...messages.neuralNetProjectTitle}/>} card_text={<FormattedMessage {...messages.neuralNetProjectExcerpt}/>} card_button_text={'View Demo'} target={''} />
                            <ProjectCard style={{flex: '1'}} complete={true} card_title={<FormattedMessage {...messages.spaceProjectTitle}/>} card_text={<FormattedMessage {...messages.spaceProjectExcerpt}/>} card_button_text={'Learn More'} target={'https://devpost.com/software/space-dao'} />
                            <ProjectCard style={{flex: '1'}} complete={true} card_title={<FormattedMessage {...messages.bmMullerTitle}/>} card_text={<FormattedMessage {...messages.bmMullerExcerpt}/>} card_button_text={'Have a Listen'} target={'https://www.bearmindspodcast.com/listen/2017/11/13/richard-muller-climate-change-the-physics-of-time'} />
                            <ProjectCard style={{flex: '1'}} complete={true} card_title={<FormattedMessage {...messages.bmFilipenkoTitle}/>} card_text={<FormattedMessage {...messages.bmFilipenkoExcerpt}/>} card_button_text={'Have a Listen'} target={'https://www.bearmindspodcast.com/listen/2017/11/7/alex-filippenko-the-accelerating-expansion-of-the-universe'} />
                            <ProjectCard style={{flex: '1'}} complete={false} card_title={<FormattedMessage {...messages.implicitBiasProjectTitle}/>} card_text={<FormattedMessage {...messages.implicitBiasProjectExcerpt}/>} card_button_text={'Check it out'} target={''} />
                    </Section>
                </Col>
            </Row>
        </Container>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ])
};

export function mapDispatchToProps(dispatch) {
  return {

  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
