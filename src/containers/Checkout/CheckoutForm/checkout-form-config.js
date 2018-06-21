export default {
  firstName: {
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  },
  lastName: {
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  },
  address: {
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  },
  zipCode: {
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
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  },
  city: {
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false
  }
};