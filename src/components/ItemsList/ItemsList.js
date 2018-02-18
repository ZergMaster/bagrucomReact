import React, { PureComponent } from 'react';
import items from '../../db/items';
import Item from '../Item/Item';
import { Grid, Row } from 'react-bootstrap';

export class ItemsList extends PureComponent {
    constructor(props) {
        super();
        this.props = props;
        console.log(this.props);

        this.state = {
            cartItems: [],
        };
    }

    getTotalPrice = () => {
        return this.state.cartItems.reduce((prev, el) => (prev + (parseInt(el.price, 10) * el.cnt)), 0);
    }

    addItemsToCart = (item) => {
        alert('buy me!!');
        console.log(item);

        const arr = this.state.cartItems.filter(elem => elem.id === item.id);
        if(arr.length) {
            const it = arr[0];
            it.cnt++;
            this.setState({cartItems: [...(this.state.cartItems.filter(elem => elem.id !== item.id)), it]});
        } else {
            this.setState({cartItems: [...this.state.cartItems, item]});
        }
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