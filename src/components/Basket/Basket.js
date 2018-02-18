import React, { PureComponent } from 'react';
import { Image } from 'react-bootstrap';
import './Basket.css';
import basketImg from '../../img/basket.svg';

export class Basket extends PureComponent {
    constructor(props) {
        super();
        this.props = props;
    }

    getTotalItems = () => {
        return '0';
    }

    render() {
        return (
            <div>
                <h5 className='text'>{this.props.basketCount}</h5>
                <Image src={basketImg} width='25px' height='25px' className='basket' />
            </div>
        );
    }
}

export default Basket;