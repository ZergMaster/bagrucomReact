import React, { PureComponent } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import '../../bootstrap.css';
import './HeaderMenu.css';
import { Basket } from '../Basket/Basket';

class HeaderMenu extends PureComponent {
    constructor(props) {
        super();
        this.props = props;
    }

    handleScroll = (event) => {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        const parall = document.getElementById('parall');

        parall.setAttribute("style", 'background-position-y: ' + ((scrolled / 2) - 100) + 'px;');
    };

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    };

    render() {
        return (
            <Grid>
                <Row className="show-grid header">
                    <Col sm={11}>
                        <Grid>
                            <Row >
                                <Col xs={6} md={3}>
                                    <h3 className="logo">BAG.ru.com</h3>
                                </Col>
                                <Col xs={6} md={5}>
                                    <h5 className="only-best">Только самые стильные рюкзаки!</h5>
                                </Col>
                                <Col xs={6} md={4}>
                                    <h5 className="number">+7 (911) 704-73-52</h5>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                    <Col sm={1}>
                        <Basket basket={this.props.basket}/>
                    </Col>
                </Row>
                <Row className="parallax wrapper" id="parall"></Row>
            </Grid>
        );
    }
}

export default HeaderMenu;   