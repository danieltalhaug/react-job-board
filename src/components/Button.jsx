const Button = (props) => {
    const { text, isActive, outline, disabled, variation, color } = props;
    const colors = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        accent: 'btn-accent',
        warning: 'btn-warning',
        error: 'btn-error',
    };
    const variations = {
        ghost: 'btn-ghost',
    };

	return (
        <button
            className={`
                btn ${isActive && 'btn-active'}
                ${outline && 'btn-outline'}
                ${variation ? variations[variation] : ''}
                ${colors ? colors[color] : ''}
            `}
            disabled={disabled}
        >
            { text }
        </button>
	);
};

export default Button;