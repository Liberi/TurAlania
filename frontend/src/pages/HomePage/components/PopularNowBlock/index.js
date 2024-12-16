import React, { useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { MainButton, Rating } from '../../../../components';
import { useContainerPadding } from '../../hooks';
import { getApiUrlFromPath } from '../../../../utils';
import {
	CalendarIcon,
	MarkerIcon,
	LikeIcon,
	ShareIcon,
} from '../../../../assets/svg';
import colors from '../../../../styles/colors';
import './styles.css';


const PopularNowBlock = ({ className = '' }) => {
	const popularNowRef = useRef(null);
	const [isLiked, setIsLiked] = useState(false);
	const containerPadding = useContainerPadding(popularNowRef);

	return (
		<div
			className={'container ' + className}
			style={{
				paddingBottom:
					(!containerPadding ? 200 : containerPadding) + 'px',
			}}
		>
			<LazyLoadImage
				src={getApiUrlFromPath(
					'fileStorage/images/original/tchey01.jpg',
				)}
				/* placeholderSrc={getApiUrlFromPath(
					'fileStorage/images/small/tchey01_Small.jpg',
				)} */
				// effect={'blur'}
				alt={'«Цейский» ледник'}
				className={'bigImage'}
			/>
			<div className={'popularNow'} ref={popularNowRef}>
				<div className={'informationBlock'}>
					<h3>ПОПУЛЯРНО СЕЙЧАС</h3>
					<h2>«Цейский» ледник</h2>
					<div className={'dateAndLocation'}>
						<p>
							<MarkerIcon width={16} height={16} />
							{/* eslint-disable-next-line react/jsx-curly-brace-presence */}
							{'Алагирский район'}
						</p>
						<Separator className={'dateAndLocationSeparator'} />
						<p>
							<CalendarIcon width={16} height={16} />
							{/* eslint-disable-next-line react/jsx-curly-brace-presence */}
							{'13 октября'}
						</p>
					</div>
					<Rating rating={4.5} reviewsCount={300} />
					<div className={'controlBlock'}>
						<MainButton
							text={'Записаться'}
							variant={'secondary'}
							className={'controlBlockButton'}
						/>
						<Separator />
						<IconButton
							onClick={() => {
								setIsLiked(!isLiked);
							}}
						>
							<LikeIcon
								width={16}
								height={16}
								style={{
									fill: isLiked ? colors.red : colors.white,
								}}
							/>
						</IconButton>
						<IconButton>
							<ShareIcon width={16} height={16} />
						</IconButton>
					</div>
				</div>
				<p className={'description'}>
					Цейский ледник с уникальным ущельем — дальний ледник на
					склонах Большого Кавказа в Северной Осетии. Ледник
					поднимается среди северных частей горы Аладаг-Хох. Это один
					из самых больших и наиболее актуальных ледников на Кавказе.
				</p>
			</div>
		</div>
	);
};

const Separator = ({ className = '' }) => {
	return <span className={'separator ' + className}> | </span>;
};

const IconButton = ({ children, ...props }) => {
	return (
		<button className={'iconButton'} {...props}>
			{children}
		</button>
	);
};

export default PopularNowBlock;
