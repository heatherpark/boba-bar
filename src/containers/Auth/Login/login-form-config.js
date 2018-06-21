export default {
  email: {
      value: 'test@test.com',
      validation: {
          required: true,
          isEmail: true
      },
      valid: false,
      touched: false
  },
  password: {
      value: '123123',
      validation: {
          required: true,
          minLength: 6
      },
      valid: false,
      touched: false
  }
}