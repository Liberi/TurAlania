import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ReactStars from 'react-stars';
import { CalendarIcon, LengthIcon, DifficultyIcon } from '../../assets/svg';
import colors from '../../styles/colors';
import './styles.css';

const TourCard = ({
	image,
	title,
	date,
	length,
	difficulty,
	rating,
	reviewCount,
	price,
}) => {
	return (
		<div className={'tourCard'}>
			<div className={'cardContent'}>
				<LazyLoadImage
					src={image}
					alt={title}
					className={'cardImage'}
				/>

				<h3 className={'cardTitle'}>{title}</h3>

				<div className={'cardCharacteristics'}>
					<p className={'characteristic'}>
						<CalendarIcon width={16} height={16} />
						<span>{date}</span>
					</p>
					<p className={'characteristic'}>
						<LengthIcon width={16} height={16} />
						<span>{length}</span>
					</p>
					<p className={'characteristic'}>
						<DifficultyIcon width={16} height={16} />
						<span>{difficulty}</span>
					</p>
				</div>
			</div>

			<div className={'cardFooter'}>
				<div className={'ratingBlock'}>
					<ReactStars
						count={5}
						value={rating}
						size={20}
						color1={colors.MainDark50}
						color2={colors.yellow}
						edit={false}
					/>
					<p className={'reviewCount'}>{reviewCount} отзывов</p>
				</div>

				<div className={'priceBlock'}>
					<p className={'price'}>{price}₽</p>
					<p className={'priceNote'}>на человека</p>
				</div>
			</div>
		</div>
	);
};

export default TourCard;
