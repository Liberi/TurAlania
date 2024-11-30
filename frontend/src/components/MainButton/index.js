import React from 'react';
import './styles.css';

const MainButton = ({
	text,
	onClick,
	variant = 'primary',
	disabled = false,
	containerStyle,
	type = 'button',
	className = '',
	children,
	...props
}) => {
	return (
		<button
			type={type}
			className={`main-button ${variant} ${className} ${
				disabled ? 'disabled' : ''
			}`}
			onClick={!disabled ? onClick : undefined}
			style={{
				...containerStyle,
				...(disabled ? { cursor: 'not-allowed' } : {}),
			}}
			disabled={disabled}
			{...props}
		>
			{text || children}
		</button>
	);
};

export default MainButton;
