import React, { Component } from 'react';
import './Cards.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, Col
} from 'reactstrap';

export default class Style extends Component {  
  render() {
    console.log(this.props.apidata)
    return (
      <React.Fragment>
        {this.props.apidata.map((eventCard, index) => (
          <Col md={4}>
        <Card key={index}>
          
          <CardImg top width="100%" src={eventCard.description.images.length ? eventCard.description.images[0].url : null } alt="Card image cap" />
          <CardBody>
            <CardTitle>Event name: {eventCard.name.fi}</CardTitle>
            
            <CardText>Event descriptions: {eventCard.description.intro}</CardText>
          </CardBody>
          <Button>More</Button>
        </Card>
        </Col>
        ))}
      </React.Fragment>
    );
  }

}