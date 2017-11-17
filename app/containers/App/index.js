/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Faq from 'containers/Faq/Loadable';
// import Mission from 'containers/Mission/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import ProjectPage from 'containers/ProjectPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - YJ Kim"
        defaultTitle="YJ Kim"
      >
        <meta name="description" content="I made a website!" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/faq" component={Faq} />
        {/* <Route path="/mission" component={Mission} /> */}
        <Route path="" component={NotFoundPage} />
        <Route path="/projects" component={ProjectPage} />
      </Switch>

      <Footer />
    </AppWrapper>
  );
}
