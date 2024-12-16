import React from 'react';
import './styles.css';

const SliderNavigation = ({ onPrevClick, onNextClick }) => {
	return (
		<div className={'sliderNavigation'}>
			<button
				className={'navigationButton'}
				onClick={onPrevClick}
				aria-label={'Previous slide'}
			>
				<svg width={'24'} height={'24'} viewBox={'0 0 24 24'} fill={'none'}>
					<path
						d={'M15 18L9 12L15 6'}
						stroke={'currentColor'}
						strokeWidth={'2'}
					/>
				</svg>
			</button>
			<button
				className={'navigationButton'}
				onClick={onNextClick}
				aria-label={'Next slide'}
			>
				<svg width={'24'} height={'24'} viewBox={'0 0 24 24'} fill={'none'}>
					<path
						d={'M9 18L15 12L9 6'}
						stroke={'currentColor'}
						strokeWidth={'2'}
					/>
				</svg>
			</button>
		</div>
	);
};

export default SliderNavigation;
