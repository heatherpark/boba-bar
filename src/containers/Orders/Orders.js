import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from '../../store/actions/index';
import Order from '../../components/Order/Order';

import { Segment } from 'semantic-ui-react';

export class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }

  renderOrders(orders) {
    return orders.map(order => {
      return <Order price={order.price} order={order.drinkOrder} />;
    });
  }

  render() {
    return (
      <Segment.Group compact>
        {this.props.orders ? this.renderOrders(this.props.orders) : null}
      </Segment.Group>
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