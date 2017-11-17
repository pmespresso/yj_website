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


import bm_hero from '../../images/bm-hero.png';
import bm_logo from '../../images/bm-logo.png';
import bm_home from '../../images/bm-home.png';

import yj_profile from '../../images/yj_profile.jpg';


import  { Container, Row, Col } from 'reactstrap';
import ProjectCard from 'components/ProjectCard';
import Header from 'components/Header';

import CenteredSection from './CenteredSection';
import List from 'components/List';
import ListItem from 'components/ListItem';

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
    const { loading, error, repos } = this.props;

    const reposListProps = {
      loading,
      error,
      repos,
    };

    //TODO: move this shit to S3 or just redux with local storage.

    const space_imgs = [
        {
            src: space_dao1,
            caption: '',
            altText: ''
        },
        {
            src: space_dao2,
            caption: '',
            altText: ''
        },
        {
            src: space_dao3,
            caption: '',
            altText: ''
        },
        {
            src: space_dao4,
            caption: '',
            altText: ''
        },
        {
            src: space_dao5,
            caption: '',
            altText: ''
        },
        {
            src: space_dao6,
            caption: '',
            altText: ''
        }
    ];

    const bm_imgs = [
        {
            src: bm_home,
            caption: '',
            altText: ''
        },
        {
            src: bm_hero,
            caption: '',
            altText: ''
        }
    ]

    return (
      <article>
        <Helmet>
          <title>YJ's Website of sorts....</title>
          <meta name="description" content="YJ Kim's Website of sorts..." />
        </Helmet>
        <div>

          <Container style={{paddingTop: '90px'}}>
              <br/>
              <Row>
                <Col xs="4" sm="4">
                    <Section style={{width: '30%', position: 'fixed'}}>
                        <Img src={yj_profile} alt="yj profile" style={{alignItems: 'center', justifyContent: 'center', borderRadius: '50', height: '50', width: '50'}}/>

                        <H1>
                          <FormattedMessage {...messages.startProjectHeader} />
                        </H1>
                        <p>
                          <FormattedMessage {...messages.startProjectMessage} />
                        </p>
                        <Header />
                    </Section>
                </Col>
                <Col xs="1" sm="1"></Col>
                <Col xs="7" sm="7">
                    <H2 style={{textDecoration: 'bold'}}>
                        Yj's Shenanigans | Update: October - November 2017
                    </H2>
                    <Section id="projects" style={{display: 'flex', flexDirection: 'column'}}>
                            <ProjectCard style={{flex: '1'}} card_imgs={space_imgs} card_title={<FormattedMessage {...messages.spaceProjectTitle}/>} card_text={<FormattedMessage {...messages.spaceProjectExcerpt}/>} card_button_text={'Learn More'} target={'https://www.devpost.com'} />
                            <ProjectCard style={{flex: '1'}} card_imgs={bm_imgs} card_title={<FormattedMessage {...messages.bmProjectTitle}/>} card_text={<FormattedMessage {...messages.bmProjectExcerpt}/>} card_button_text={'Have a Listen'} target={'https://www.bearmindspodcast.com'} />
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
