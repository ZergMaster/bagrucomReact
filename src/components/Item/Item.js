import React from 'react';
import { Button, Jumbotron, Col, Grid, Row, Image } from 'react-bootstrap';
import './item.css';

export default (props) => {
    const elem = props.item;
    const onClick = props.click;
    return (
        <Jumbotron key={elem.id}>
            <h1>{elem.name}</h1>
            <Grid>
                <Row>
                    <Col xs={6} md={6}>
                    <Image className='bag-img' src={elem.foto}></Image>
                    </Col>
                    <Col xs={6} md={6}>
                        <p>{elem.about}</p>
                        <h3>{elem.price+' рублей'}</h3>
                        <Button bsStyle="success"
                            onClick={() => {
                                const obj = { ...elem, cnt: 1 };
                                onClick(obj);
                            }}
                        >
                            Положить в корзину
            </Button>
                    </Col>
                </Row>
            </Grid>
        </Jumbotron>
    )
}