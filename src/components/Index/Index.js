import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { ItemsList } from '../ItemsList/ItemsList';
import { addItem } from '../../actions/addItem.action';

export class Index extends PureComponent {
    constructor(props) {
        super();
        this.props = props;
        console.log(' ---> PROPS ');
        console.log(this.props);
    }

    render() {
        console.log('RENDER');
        console.log(this.props);
        return (
          <div>
            <HeaderMenu basket={this.props.basket}/>
            <ItemsList addItemsToBasket={this.props.addItem}/>
          </div>
        );
      }
}

export default connect(
    (state)=>({
        basket: state.basket,
    }), (dispath)=> ({
        addItem: (item)=>{
            dispath(addItem(item));
        }
    })
)(Index);