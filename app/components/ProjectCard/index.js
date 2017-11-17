import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Card, CardImg, CardText, CardTitle, CardSubtitle, Button, UncontrolledCarousel, Container} from 'reactstrap';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import A from 'components/A';

export default class ProjectCard extends React.Component { // eslint-disable-line react/prefer-stateless-function

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            imgs: null
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.slides = []
      }

      componentDidMount() {
          this.setState({
              imgs: this.props.card_imgs
          });
      }

      onExiting() {
        this.animating = true;
      }

      onExited() {
        this.animating = false;
      }

      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }

      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }

      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }

  render() {
    return (
      <div>
          <Card style={{display: 'inlineBlock', margin: '20px auto', padding: '10px auto'}}>
                <CardTitle>{this.props.card_title}</CardTitle>
                {
                    this.state.imgs
                    ?
                    <UncontrolledCarousel items={this.state.imgs} autoPlay={false} ride={'carousel'} />
                    :
                    null
                }
                <div style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                    <CardText>{this.props.card_text}</CardText>
                    <Button href={this.props.target} style={{marginLeft: '5px'}} > {this.props.card_button_text} </Button>
                </div>
          </Card>
      </div>
    );
  }
}
