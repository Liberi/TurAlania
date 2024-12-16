import React from 'react';
import ReactStars from 'react-stars';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { CalendarIcon, LengthIcon, DifficultyIcon } from '../../assets/svg';
import { NotFoundImageLow } from '../../assets/img';
import { getApiUrlFromPath } from '../../utils';
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
	className = '',
}) => {
	const src = getApiUrlFromPath(`fileStorage/images/original/${image.name}`);
	const placeholderSrc = image?.small
		? getApiUrlFromPath(`fileStorage/images/small/${image.small}`)
		: null;

	return (
		<div className={'tourCard ' + className}>
			<div className={'cardContent'}>
				<LazyLoadImage
					src={src}
					placeholderSrc={placeholderSrc}
					effect={'blur'}
					className={'cardImage'}
					alt={image.title}
					onError={e => {
						e.target.src = NotFoundImageLow;
						e.target.className = 'cardImage imgNotFound';
					}}
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
