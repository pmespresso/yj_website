import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Card, CardImg, CardText, CardTitle, CardSubtitle, Button, Container} from 'reactstrap';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import A from 'components/A';

export default class ProjectCard extends React.Component { // eslint-disable-line react/prefer-stateless-function

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            imgs: null
        };

      }

      componentDidMount() {
          this.setState({
              imgs: this.props.card_imgs
          });
      }


  render() {
    return (
      <div>
          <Card style={{display: 'flex', margin: '10px', padding: '10px', justifyContent: 'spaceBetween', alignItems: 'center'}}>
                <CardTitle>{this.props.card_title}</CardTitle>
                {
                    this.state.imgs
                    ?
                    <CardImg top width="100%" src={this.state.imgs[0]} alt="hi"  />
                    :
                    null
                }
                <div style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                    <CardText>{this.props.card_text}</CardText>

                    {
                        this.props.complete
                        ?
                        <Button href={this.props.target} style={{marginLeft: '5px'}} > {this.props.card_button_text} </Button>
                        :
                        <Button href={this.props.target} style={{marginLeft: '5px', background:'red'}} > {'Under Construction'} </Button>

                    }
                </div>
          </Card>
      </div>
    );
  }
}
