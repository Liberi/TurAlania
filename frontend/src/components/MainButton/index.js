import React from 'react';
import './styles.css';

const MainButton = ({
	text,
	onClick,
	variant = 'primary',
	disabled = false,
	containerStyle,
	type = 'button',
	children,
	className = '',
}) => {
	return (
		<button
			type={type}
			className={`main-button ${variant} ${className} ${
				disabled ? 'disabled' : ''
			}`}
			onClick={!disabled ? onClick : undefined}
			style={containerStyle}
			disabled={disabled}
		>
			{text || children}
		</button>
	);
};

export default MainButton;
