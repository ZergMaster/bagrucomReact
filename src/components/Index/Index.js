import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { ItemsList } from '../ItemsList/ItemsList';

class Index extends PureComponent {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
          <div>
            <HeaderMenu basketCount={5}/>
            <ItemsList mess={'hi from Index'}/>
          </div>
        );
      }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps');
    console.log(state);
    return { items: state.items }
}
export default connect(mapStateToProps)(Index);