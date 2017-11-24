import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Col } from 'reactstrap';
import Section from './Section';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import Header from 'components/Header';
import NavButtons from 'components/NavButtons';

export default class SideNav extends React.Component {

    render() {
        return (
            <Col xs="12" sm="12" md="4" lg="4">
                <Section style={{position: 'sticky', top: '10px'}}>
                    <Header page={this.props.page} />
                    <NavButtons />
                </Section>
            </Col>
        );
    }
}
