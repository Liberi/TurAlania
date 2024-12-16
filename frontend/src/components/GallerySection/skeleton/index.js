import React from 'react';
import Skeleton from 'react-loading-skeleton';
import SectionHeadingSkeleton from '../../SectionHeading/skeleton';
import './styles.css';

const GallerySectionSkeleton = ({ className = '' }) => {
	return (
		<section className={'gallerySection skeleton ' + className}>
			<div className={'galleryHeader'}>
				<SectionHeadingSkeleton />
				<Skeleton className={'galleryButton'} height={48} width={200} />
			</div>
			<div className={'galleryImages'}>
				{Array(8)
					.fill()
					.map((_, index) => (
						<Skeleton
							key={index}
							className={'galleryImage'}
							height={320}
						/>
					))}
			</div>
		</section>
	);
};

export default GallerySectionSkeleton;
