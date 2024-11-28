import React from 'react';
import './styles.css';

const Input = ({ title, error, className, classNameInput, ...props }) => {
	return (
		<div className={`inputWrapper ${className || ''}`}>
			{title && (
				<label htmlFor={props.id} className={'inputTitle'}>
					{title}
				</label>
			)}
			<input
				className={`input ${error ? 'inputError' : ''} ${classNameInput || ''}`}
				{...props}
			/>
			<span className={`errorText ${error ? 'show' : 'hide'}`}>
				{error}
			</span>
		</div>
	);
};

export default Input;
