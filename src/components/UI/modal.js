import React from 'react';

import classes from './Modal.css';

const Modal = props => {
  return (
    <React.fragment>
      <div 
        className={classes.Modal}
        style={{
          transform: this.props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: this.props.showModal ? '1' : '0'
        }}>
        {this.props.children}
      </div>
    </React.fragment>
  );
};