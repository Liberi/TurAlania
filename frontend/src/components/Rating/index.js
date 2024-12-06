import React from 'react';
import ReactStars from 'react-stars';
import colors from '../../styles/colors';
import './styles.css';

const Rating = ({ rating = 0, reviewsCount = 0 }) => {
	return (
		<div className={'ratingContainer'}>
			<ReactStars
				count={5}
				value={rating}
				size={22}
				edit={false}
				color1={colors.MainDark70}
				color2={colors.yellow}
			/>
			<p className={'ratingValue'}>{rating.toFixed(1)}</p>
			<p
				className={'reviewCount'}
			>{`(${reviewsCount.toString().padStart(3, '0')} отзывов)`}</p>
		</div>
	);
};

export default Rating;
