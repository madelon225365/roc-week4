function Button({ variant, text }) {
	return ( 
		<button type="button" class={ `btn btn-${variant}`}>{text}</button>
	)
}

export default Button;