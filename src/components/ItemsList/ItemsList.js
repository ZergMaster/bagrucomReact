import React, { PureComponent } from 'react';
import items from '../../db/items';
import Item from '../Item/Item';
import { Grid, Row } from 'react-bootstrap';

export class ItemsList extends PureComponent {
    constructor(props) {
        super();
        this.props = props;
    }

    addItemsToBasket = (item) => {
        this.props.addItemsToBasket(item);
    }

    getItems = () => {
        return items.map(elem => (
            <Item key={elem.id} item={elem}
                click={this.addItemsToBasket}
            />
        ));
    };

    render() {
        return (
            <Grid>
                <Row>
                </Row>
                <Row>
                    {this.getItems()}
                </Row>
                <Row>
                </Row>
            </Grid>
        );
    }
}

export default ItemsList;