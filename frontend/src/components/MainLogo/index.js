import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import { MainLogoSvg } from '../../assets/svg';
import { MainLogoLow } from '../../assets/img';

const MainLogo = ({ className, ...props }) => {
	return (
		<LazyLoadImage
			className={className}
			src={MainLogoSvg}
			placeholderSrc={MainLogoLow}
			alt={'MainLogo'}
			effect={'black-and-white'}
			{...props}
		/>
	);
};

export default MainLogo;
