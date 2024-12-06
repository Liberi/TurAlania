import React, { useRef, useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { MainButton } from '../../../../../components';
import './styles.css';

const PopularNowBlockSkeleton = ({ className }) => {
	const [containerPadding, setContainerPadding] = useState(0);
	const popularNowRef = useRef(null);

	useEffect(() => {
		const resizeObserver = new ResizeObserver(entries => {
			for (let entry of entries) {
				setContainerPadding(entry.contentRect.height);
			}
		});

		if (popularNowRef.current) {
			resizeObserver.observe(popularNowRef.current);
		}

		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	return (
		<div
			className={'container skeleton ' + className}
			style={{ paddingBottom: containerPadding + 'px' }}
		>
			<Skeleton className={'bigImage skeletonBigImage'} />
			<div className={'popularNow'} ref={popularNowRef}>
				<div className={'informationBlock'}>
					<Skeleton height={25} width={150} borderRadius={30} />
					<Skeleton height={50} width={250} />
					<div className={'dateAndLocation'}>
						<p>
							<Skeleton width={16} height={16} />
							<Skeleton width={100} height={16} />
						</p>
						<Separator className={'dateAndLocationSeparator'} />
						<p>
							<Skeleton width={16} height={16} />
							<Skeleton width={100} height={16} />
						</p>
					</div>
					<Skeleton height={20} width={150} />
					<div className={'controlBlock'}>
						<MainButton
							text={'Записаться'}
							variant={'secondary'}
							className={'controlBlockButton'}
							disabled={true}
						/>
						<Separator />
						<IconButton>
							<Skeleton width={16} height={16} />
						</IconButton>
						<IconButton>
							<Skeleton width={16} height={16} />
						</IconButton>
					</div>
				</div>
				<Skeleton count={3} className={'description'} />
			</div>
		</div>
	);
};

const Separator = ({ className }) => {
	return <span className={'separator ' + className}> | </span>;
};

const IconButton = ({ children, ...props }) => {
	return (
		<button className={'iconButton'} {...props}>
			{children}
		</button>
	);
};

export default PopularNowBlockSkeleton;
