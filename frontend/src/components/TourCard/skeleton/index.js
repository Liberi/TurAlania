import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './styles.css';

const TourCardSkeleton = () => {
	return (
		<div className={'tourCard skeleton'}>
			<div className={'cardContent'}>
				<Skeleton className={'cardImage'} height={180} />
				<Skeleton className={'cardTitle'} height={24} width={200} />
				<div className={'cardCharacteristics'}>
					<p className={'characteristic'}>
						<Skeleton circle width={16} height={16} />
						<Skeleton width={120} />
					</p>
					<p className={'characteristic'}>
						<Skeleton circle width={16} height={16} />
						<Skeleton width={100} />
					</p>
					<p className={'characteristic'}>
						<Skeleton circle width={16} height={16} />
						<Skeleton width={80} />
					</p>
				</div>
			</div>
			<div className={'cardFooter'}>
				<div className={'ratingBlock'}>
					<Skeleton width={100} height={15} />
					<Skeleton width={80} height={15} />
				</div>
				<div className={'priceBlock'}>
					<Skeleton width={70} height={20} />
					<Skeleton width={90} />
				</div>
			</div>
		</div>
	);
};

export default TourCardSkeleton;
