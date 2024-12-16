import React from 'react';
import './styles.css';

const LoadingDots = ({ size = 8 }) => {
	return (
		<div className={'loadingDots'}>
			<div className={'dot'} style={{ width: size, height: size }}></div>
			<div className={'dot'} style={{ width: size, height: size }}></div>
			<div className={'dot'} style={{ width: size, height: size }}></div>
		</div>
	);
};

export default LoadingDots;
