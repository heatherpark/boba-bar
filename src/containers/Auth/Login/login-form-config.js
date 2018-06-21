export default {
	email: {
		value: '',
		validation: {
			required: true,
			isEmail: true
		},
		valid: false,
		touched: false
	},
	password: {
		value: '',
		validation: {
			required: true,
			minLength: 6
		},
		valid: false,
		touched: false
	}
};