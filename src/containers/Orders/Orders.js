import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Order from '../../components/Order/Order';

export class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }

  renderOrders(orders) {
    return orders.map(order => {
      return <Order order={order} />;
    });
  }

  render() {
    return (
      <div>
        {this.props.orders ? this.renderOrders(this.props.orders) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders.orders,
  token: state.auth.token,
  userId: state.auth.userId
});

const mapDispatchToProps = dispatch => ({
  onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);