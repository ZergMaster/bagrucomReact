import React, { PureComponent } from 'react';
import items from '../../db/items';
import Item from '../Item/Item';
import { Grid, Row } from 'react-bootstrap';

export class ItemsList extends PureComponent {
    constructor(props) {
        super();
        this.props = props;
        console.log(props);
    }

    addItemsToCart = (item) => {
        alert('buy me!!');
        console.log(item);
    }

    getItems = () => {
        return items.map(elem => (
            <Item key={elem.id} item={elem}
                click={this.addItemsToCart}
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