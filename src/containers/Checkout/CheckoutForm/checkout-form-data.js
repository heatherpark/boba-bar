export default {
  firstName: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Your Name'
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  },
  lastName: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Your Name'
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  },
  address: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Street'
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  },
  zipCode: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'ZIP Code'
    },
    value: '',
    validation: {
      required: true,
      minLength: 5,
      maxLength: 5,
      isNumeric: true
    },
    valid: false,
    touched: false
  },
  state: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Country'
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  },
  city: {
    elementType: 'input',
    elementConfig: {
      type: 'email',
      placeholder: 'Your E-Mail'
    },
    value: '',
    validation: {
      required: true,
      isEmail: true
    },
    valid: false,
    touched: false
  }
};