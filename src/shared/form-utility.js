export function markInputAsTouched(formConfigKey, fieldKey) {
	this.setState({
		[formConfigKey]: {
			...this.state[formConfigKey],
			[fieldKey]: {
				...this.state[formConfigKey][fieldKey],
				touched: true
			}
		}
	});
};

export function fieldIsInvalid(formConfig, fieldKey) {
	return formConfig[fieldKey].touched 
		&& !formConfig[fieldKey].valid;
}

export function handleInputChange(value, formConfigKey, fieldKey) {
	const updateCheckoutFormState = prevState => {
		const formConfig = prevState[formConfigKey];
		const inputConfig = formConfig[fieldKey];

		return {
			[formConfigKey]: {
				...formConfig,
				[fieldKey]: {
					...formConfig[fieldKey],
					value,
					valid: checkValidity(value, inputConfig.validation)
				}
			}
		};
	};

	const updateFormIsValidState = prevState => ({
		formIsValid: formIsValid(prevState[formConfigKey])
	});

	this.setState(
		prevState => updateCheckoutFormState(prevState),
		() => this.setState(prevState => updateFormIsValidState(prevState))
	);
};

export function checkValidity(value, rules) {
	let isValid = true;
	if (!rules) {
		return true;
	}

	if (rules.required) {
		isValid = value.trim() !== '' && isValid;
	}

	if (rules.minLength) {
		isValid = value.length >= rules.minLength && isValid
	}

	if (rules.maxLength) {
		isValid = value.length <= rules.maxLength && isValid
	}

	if (rules.isEmail) {
		const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		isValid = pattern.test(value) && isValid
	}

	if (rules.isNumeric) {
		const pattern = /^\d+$/;
		isValid = pattern.test(value) && isValid
	}

	return isValid;
};

export function formIsValid(form) {
	let formIsValid = true;

	for (let field in form) {
		formIsValid = form[field].valid && formIsValid;
	}

	return formIsValid;
};