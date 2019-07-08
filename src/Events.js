import React, { Component } from 'react';
import Cards from './Cards';
import { Container, Row } from 'reactstrap';

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            event: []
        };
    }
    componentDidMount() {
        fetch('http://localhost:3030/api/events?')
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
