import React from 'react';
import './styles.css';

const ShowMoreButton = ({ onClick }) => {
	return (
		<button className={'showMoreButton'} onClick={onClick}>
			<p>Показать еще</p>
			<svg width={'24'} height={'24'} viewBox={'0 0 24 24'} fill={'none'}>
				<path
					d={'M9 18L15 12L9 6'}
					stroke={'currentColor'}
					strokeWidth={'2'}
				/>
			</svg>
		</button>
	);
};

export default ShowMoreButton;
