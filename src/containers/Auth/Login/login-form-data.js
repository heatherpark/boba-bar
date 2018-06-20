export default {
  email: {
      elementType: 'input',
      elementConfig: {
          type: 'email',
          placeholder: 'Email Address'
      },
      value: 'test@test.com',
      validation: {
          required: true,
          isEmail: true
      },
      valid: false,
      touched: false
  },
  password: {
      elementType: 'input',
      elementConfig: {
          type: 'password',
          placeholder: 'Password'
      },
      value: '123123',
      validation: {
          required: true,
          minLength: 6
      },
      valid: false,
      touched: false
  }
}