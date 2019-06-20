import React, { Component } from 'react';
import Cards from './Cards';
import { Container, Row, Col } from 'reactstrap';

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            event: []
        };
    }
    componentDidMount() {
        fetch('/api/events?')
            .then(res => {
                return res.json()
            })
            .then(res => {

                this.setState({ event: res.data, loading: false })
                console.log(res.data);
            });
    }

    render() {
        return (
            <Container fluid>
                <Row>
                  <Cards apidata={this.state.event} />
                </Row>
            </Container>
        )
    }
}

export default Events;