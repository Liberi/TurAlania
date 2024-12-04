import React from 'react';
import { cn } from '../../utils/cn';
import './Toggle.css';

export const Toggle = ({
	checked,
	onChange,
	disabled = false,
	size = 'md',
	className,
	label,
}) => {
	const handleKeyDown = event => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			if (!disabled) {
				onChange(!checked);
			}
		}
	};

	return (
		<div className={'flexItemsCenterGap2'}>
			<button
				role={'switch'}
				aria-checked={checked}
				aria-label={label}
				disabled={disabled}
				onClick={() => !disabled && onChange(!checked)}
				onKeyDown={handleKeyDown}
				className={cn(
					'toggleBase',
					`toggle${size}`,
					checked && 'toggleChecked',
					disabled && 'toggleDisabled',
					className,
				)}
				tabIndex={disabled ? -1 : 0}
			>
				<span className={'toggleThumb'} />
			</button>
			{label && (
				<label className={cn('selectNone', disabled && 'textGray400')}>
					{label}
				</label>
			)}
		</div>
	);
};
