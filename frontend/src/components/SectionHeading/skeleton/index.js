import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './styles.css';

const SectionHeadingSkeleton = () => {
	return (
		<div className={'sectionHeading skeleton'}>
			<Skeleton className={'heading'} height={43} width={300} />
			<Skeleton className={'description'} height={24} width={'70%'} />
		</div>
	);
};

export default SectionHeadingSkeleton;
