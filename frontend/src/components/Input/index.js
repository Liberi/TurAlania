import React from 'react';
import './styles.css';

const Input = ({
	title,
	error,
	enabled,
	className,
	classNameInput,
	...props
}) => {
	return (
		<div
			className={`inputWrapper ${className || ''} ${enabled ? '' : 'inputDisabled'}`}
		>
			{title && (
				<label htmlFor={props.id} className={'inputTitle'}>
					{title}
				</label>
			)}
			<input
				className={`input ${error ? 'inputError' : ''} ${classNameInput || ''} `}
				disabled={!enabled}
				{...props}
			/>
			<span className={`errorText ${error ? 'show' : 'hide'}`}>
				{error}
			</span>
		</div>
	);
};

export default Input;
