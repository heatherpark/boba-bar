import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

export class Orders extends Component {
  render() {
    return (
      <div>Orders</div>
    );
  }
}

// const mapStateToProps = state => ({
//   orders: state.orders.orders
// });

// const mapDispatchToProps = dispatch => ({
//   onFetchOrders: () => dispatch(actions.fetchOrders)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Orders);
export default Orders;